import React from 'react';

interface HeroProps {
  onBook: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBook }) => {
  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center bg-zinc-950 overflow-hidden">
      {/* High-End Industrial Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-zinc-900/50 skew-x-[-15deg] translate-x-32 border-l border-white/5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-red-600/5 rounded-full blur-[150px] opacity-50"></div>
        {/* Animated accent line */}
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-red-600/20 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-4xl animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-flex items-center gap-3 bg-red-600/10 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-red-600/20 mb-10 shadow-xl shadow-red-900/10">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
            <span className="text-red-500 text-xs font-black uppercase tracking-[0.3em]">Property Maintenance Excellence</span>
          </div>
          
          <h1 className="text-7xl lg:text-9xl font-black text-white mb-10 leading-[0.9] tracking-tighter">
            O.D’S <br/>
            <span className="text-red-600">HOME DEEDS</span>
          </h1>
          
          <div className="space-y-8 mb-14">
            <p className="text-2xl lg:text-3xl text-zinc-400 leading-tight font-medium max-w-2xl">
              Professional landscaping, pressure washing, and deep cleaning for clients who demand <span className="text-white font-black underline decoration-red-600/50">perfection</span>.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="#services" 
              onClick={scrollToServices}
              className="group px-12 py-6 bg-red-600 text-white text-xl font-black rounded-2xl shadow-2xl shadow-red-900/40 hover:bg-red-500 hover:-translate-y-1 transition-all text-center flex items-center justify-center gap-4 cursor-pointer"
            >
              CHOOSE YOUR DEEDS
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <button 
              onClick={onBook} 
              className="px-12 py-6 bg-zinc-900 text-white text-xl font-black rounded-2xl border border-white/10 hover:bg-zinc-800 transition-all text-center uppercase tracking-widest"
            >
              General Inquiry
            </button>
          </div>
        </div>
      </div>
      
      {/* Vertical Side Label */}
      <div className="absolute right-8 bottom-24 hidden lg:block rotate-90 origin-right text-zinc-800 text-xs font-black uppercase tracking-[1em] pointer-events-none">
        ESTABLISHED 2024 • PREMIUM CARE
      </div>
    </section>
  );
};