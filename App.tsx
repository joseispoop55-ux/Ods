import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Packages } from './components/Packages';
import { AIQuoteTool } from './components/AIQuoteTool';
import { Footer } from './components/Footer';
import { BillingModal } from './components/BillingModal';

const App: React.FC = () => {
  const [bookingItem, setBookingItem] = useState<string | null>(null);

  const handleBook = (item: string) => {
    setBookingItem(item);
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-red-600 selection:text-white bg-zinc-50">
      <Header />
      <main className="flex-grow">
        <Hero onBook={() => handleBook('General Inquiry')} />
        
        <Services onBook={(services) => handleBook(`Custom Service Plan: ${services.join(', ')}`)} />
        
        <Packages onBook={handleBook} />
        
        <div className="bg-zinc-900 py-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
             <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>
          </div>
          <div className="max-w-4xl mx-auto px-4 text-center text-white relative">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">Guaranteed Quality. <br/><span className="text-red-600">Professional Integrity.</span></h2>
            <p className="text-zinc-400 text-xl max-w-2xl mx-auto leading-relaxed">
              We provide specific information to help you get off to a great start with your property's care.
            </p>
          </div>
        </div>
        
        <AIQuoteTool />

        {/* The Process Section */}
        <section id="process" className="py-32 bg-zinc-50 border-t border-zinc-200">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-20">
              <span className="text-red-600 font-bold uppercase tracking-widest text-sm mb-4 block">How we work</span>
              <h2 className="text-5xl font-black text-zinc-900 mb-6">The Deed Process</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { step: "01", title: "Select Services", desc: "Choose exactly what your property needs from our list of expert deeds." },
                { step: "02", title: "Instant Review", desc: "Our team or AI assesses the requirements for a productive start." },
                { step: "03", title: "Execution", desc: "Professional delivery of landscaping, washing, or cleaning services." }
              ].map((item, i) => (
                <div key={i} className="relative p-10 bg-white rounded-3xl border border-zinc-200 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl">
                  <span className="text-6xl font-black text-zinc-100 absolute top-4 right-8">{item.step}</span>
                  <h3 className="text-2xl font-black text-zinc-900 mb-4 relative z-10">{item.title}</h3>
                  <p className="text-zinc-500 font-medium relative z-10 leading-relaxed">{item.desc}</p>
                  <div className="mt-8 h-1 w-12 bg-red-600"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Booking Modal */}
      <BillingModal 
        item={bookingItem} 
        onClose={() => setBookingItem(null)} 
      />
    </div>
  );
};

export default App;