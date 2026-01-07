import React, { useState, useRef } from 'react';
import { analyzePropertyPhoto } from '../services/geminiService';
import { AIQuoteResponse } from '../types';

export const AIQuoteTool: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIQuoteResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64String = (reader.result as string).split(',')[1];
        try {
          const analysis = await analyzePropertyPhoto(base64String);
          setResult(analysis);
        } catch (err) {
          setError("Failed to analyze image. Please try again with a clearer photo.");
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
      reader.readAsDataURL(file);
    } catch (err) {
      setError("Error reading file.");
      setLoading(false);
    }
  };

  const generateMailto = () => {
    if (!result) return "#contact";
    const subject = "Booking Request from AI Quote";
    const body = `I would like to book the following service based on my AI estimate:\n\nComplexity: ${result.estimatedComplexity}\nPrice Range: ${result.estimatedPriceRange}\nSuggested Services: ${result.suggestedServices.join(', ')}\n\nMy Notes:\n`;
    return `mailto:contact@odshomedeeds.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="quote" className="py-24 bg-zinc-950 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight">Instant AI-Powered Quote</h2>
        <p className="text-zinc-500 mb-12 max-w-2xl mx-auto font-medium">
          Upload a photo of your driveway, patio, or yard. Our AI will assess the work needed and give you an instant estimate.
        </p>

        {!result && (
          <div className="bg-zinc-900 border-2 border-dashed border-zinc-800 rounded-3xl p-12 transition-all hover:border-red-600 group">
            <input 
              type="file" 
              accept="image/*" 
              className="hidden" 
              ref={fileInputRef} 
              onChange={handleFileUpload}
            />
            {loading ? (
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-red-500 font-bold uppercase tracking-widest text-sm">Gemini is analyzing...</p>
              </div>
            ) : (
              <div className="cursor-pointer" onClick={() => fileInputRef.current?.click()}>
                <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600/20 group-hover:scale-110 transition-all">
                  <svg className="w-8 h-8 text-zinc-600 group-hover:text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-xl font-black mb-2 uppercase">SNAP PROPERTY PHOTO</p>
                <p className="text-zinc-600 font-medium">Fast, free, and surprisingly accurate</p>
              </div>
            )}
          </div>
        )}

        {error && (
          <div className="mt-6 p-4 bg-red-600/10 border border-red-600/20 rounded-xl text-red-500 font-bold">
            {error}
          </div>
        )}

        {result && (
          <div className="mt-8 bg-zinc-900 rounded-3xl p-10 text-left border border-red-600/30 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div>
                <span className="inline-block px-3 py-1 bg-red-600/20 text-red-500 text-xs font-black rounded-lg mb-2 uppercase tracking-widest">
                  Assessment: {result.estimatedComplexity} Complexity
                </span>
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Your Professional Estimate</h3>
              </div>
              <div className="text-4xl font-black text-red-600 bg-red-600/5 px-6 py-3 rounded-2xl border border-red-600/20">
                {result.estimatedPriceRange}
              </div>
            </div>
            
            <p className="text-zinc-400 mb-8 text-lg leading-relaxed border-l-4 border-red-600 pl-6 italic font-medium">"{result.description}"</p>
            
            <div className="mb-10">
              <h4 className="text-zinc-600 font-black text-xs uppercase tracking-widest mb-4">Recommended Services</h4>
              <div className="flex flex-wrap gap-2">
                {result.suggestedServices.map((s, idx) => (
                  <span key={idx} className="px-5 py-2.5 bg-zinc-800 rounded-xl text-zinc-300 text-sm font-bold border border-zinc-700">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={generateMailto()}
                className="flex-1 py-5 bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-red-600/20 flex items-center justify-center text-center"
              >
                Book This Deed Now
              </a>
              <button 
                onClick={() => setResult(null)} 
                className="px-8 py-5 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 font-black uppercase tracking-widest rounded-xl transition-all"
              >
                Clear
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};