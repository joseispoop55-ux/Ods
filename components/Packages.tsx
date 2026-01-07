import React from 'react';

const PACKAGES = [
  {
    name: "Prince",
    sub: "Essential Care",
    features: [
      "1x Full house pressure wash",
      "Fence line excluded",
      "Driveway excluded",
      "Bi-monthly grass trimming",
      "Bi-monthly weed trimming"
    ],
    accent: "bg-white",
    border: "border-zinc-200",
    text: "text-zinc-900",
    description: "Perfect for maintaining appearances."
  },
  {
    name: "King",
    sub: "Premium Service",
    features: [
      "1x Full house pressure wash",
      "Fence line excluded",
      "Weekly yard maintenance",
      "Demand-based scheduling",
      "Bi-monthly grass & weed trim"
    ],
    accent: "bg-zinc-900",
    border: "border-zinc-900",
    text: "text-white",
    description: "For the homeowner who values perfection.",
    popular: true
  },
  {
    name: "Emperor",
    sub: "Ultimate Transformation",
    features: [
      "2x/month house pressure wash",
      "Weekly yard maintenance",
      "In-home deep clean included",
      "Bi-monthly grass trimming",
      "Bi-monthly weed trimming"
    ],
    accent: "bg-zinc-100",
    border: "border-zinc-200",
    text: "text-zinc-900",
    description: "Complete interior and exterior luxury."
  }
];

interface PackagesProps {
  onBook: (packageName: string) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onBook }) => {
  return (
    <section id="packages" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <span className="text-red-600 font-black uppercase tracking-[0.2em] text-xs mb-4 block">Membership Tiers</span>
          <h2 className="text-5xl md:text-6xl font-black text-zinc-900 mb-6 tracking-tight">Packages & Resources</h2>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto font-medium">
            Choose the tier that fits your lifestyle. Our team is here to get you off to a great and productive start.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {PACKAGES.map((pkg, idx) => (
            <div 
              key={idx} 
              className={`relative flex flex-col p-8 md:p-10 rounded-[2.5rem] border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${pkg.accent} ${pkg.border} ${pkg.text} ${pkg.popular ? 'md:-mt-8 md:mb-8 ring-4 ring-red-600/10 shadow-xl' : 'shadow-lg'}`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                   <span className="bg-red-600 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-red-600/30">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-4xl font-black mb-2 uppercase tracking-tighter">{pkg.name}</h3>
                <p className="text-xs font-bold uppercase tracking-widest opacity-60">{pkg.sub}</p>
              </div>

              <p className="mb-10 font-medium opacity-70 leading-relaxed text-sm min-h-[40px]">{pkg.description}</p>
              
              <ul className="space-y-5 mb-12 flex-grow">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-4">
                    <div className={`mt-1 w-1.5 h-1.5 rounded-full shrink-0 ${pkg.text === 'text-white' ? 'bg-red-500' : 'bg-red-600'}`}></div>
                    <span className="font-bold text-sm tracking-tight leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => onBook(`${pkg.name} Package`)}
                className={`block w-full text-center py-5 rounded-xl font-black uppercase tracking-widest text-xs transition-all ${
                  pkg.text === 'text-white' 
                    ? 'bg-white text-zinc-900 hover:bg-zinc-200' 
                    : 'bg-zinc-900 text-white hover:bg-zinc-800'
                }`}
              >
                Select Package
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};