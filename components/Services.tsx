import React, { useState } from 'react';

const SERVICE_DATA = [
  {
    id: "cleaning",
    title: "In-Home Deep Cleaning",
    description: "Full interior sanitization. From kitchen detailing to floor scrubbing, we handle the heavy lifting inside.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    id: "washing",
    title: "Pressure Washing",
    description: "Revitalize your surfaces. We strip away grime from siding, driveways, and decks with pro-grade power.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: "yard",
    title: "Yard Maintenance",
    description: "Precision landscaping. Bi-monthly grass trimming and weed control for a property that stands out.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    )
  },
  {
    id: "consulting",
    title: "Property Consult",
    description: "Maximize your value. Get specific guides and expert insights on property care and maintenance.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  }
];

interface ServicesProps {
  onBook: (services: string[]) => void;
}

export const Services: React.FC<ServicesProps> = ({ onBook }) => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleService = (id: string) => {
    setSelected(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const getSelectedTitles = () => {
    return SERVICE_DATA.filter(s => selected.includes(s.id)).map(s => s.title);
  };

  return (
    <section id="services" className="py-32 bg-zinc-950 relative overflow-hidden">
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-red-600 font-black uppercase tracking-[0.2em] text-sm mb-4 block">Our Expertise</span>
            <h2 className="text-5xl lg:text-7xl font-black text-white leading-[0.9] tracking-tight">
              Pick Your <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">Home Deeds</span>
            </h2>
          </div>
          <p className="text-zinc-500 max-w-sm text-lg font-medium leading-relaxed">
            Select the services you need to build a custom property care plan tailored to your home.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICE_DATA.map((service) => {
            const isSelected = selected.includes(service.id);
            return (
              <div 
                key={service.id} 
                onClick={() => toggleService(service.id)}
                className={`group cursor-pointer p-8 rounded-[2rem] border transition-all duration-300 relative flex flex-col justify-between min-h-[380px] overflow-hidden ${
                  isSelected 
                    ? 'bg-zinc-900 border-red-600 shadow-2xl shadow-red-900/20 translate-y-[-4px]' 
                    : 'bg-zinc-900/20 border-zinc-800 hover:bg-zinc-900 hover:border-zinc-700'
                }`}
              >
                {/* Hover Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className={`mb-8 transition-all duration-300 ${isSelected ? 'text-red-500 scale-110' : 'text-zinc-600 group-hover:text-zinc-400'}`}>
                  {service.icon}
                </div>
                
                <div>
                  <h3 className={`text-2xl font-black mb-4 tracking-tight transition-colors ${isSelected ? 'text-white' : 'text-zinc-300'}`}>
                    {service.title}
                  </h3>
                  
                  <p className={`text-sm leading-relaxed mb-8 font-medium transition-colors ${isSelected ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-zinc-800/50 flex items-center justify-between">
                  <span className={`text-xs font-black uppercase tracking-widest transition-colors ${isSelected ? 'text-red-500' : 'text-zinc-600 group-hover:text-zinc-500'}`}>
                    {isSelected ? 'Service Added' : 'Tap to Add'}
                  </span>
                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
                    isSelected ? 'bg-red-600 border-red-600' : 'border-zinc-700 group-hover:border-zinc-500'
                  }`}>
                    {isSelected && (
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Action Bar */}
      {selected.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-xl z-50 animate-in slide-in-from-bottom-24 fade-in duration-500">
          <div className="bg-zinc-900/95 backdrop-blur-xl border border-red-500/30 p-3 pl-5 rounded-2xl shadow-2xl flex items-center justify-between gap-4">
            <div>
              <p className="text-white font-black text-sm uppercase tracking-tight">{selected.length} Services Selected</p>
              <p className="text-zinc-500 text-xs">Ready for estimation</p>
            </div>
            <button 
              onClick={() => onBook(getSelectedTitles())}
              className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-black rounded-xl transition-all shadow-lg shadow-red-600/20 uppercase tracking-widest text-xs sm:text-sm"
            >
              Start Booking
            </button>
          </div>
        </div>
      )}
    </section>
  );
};