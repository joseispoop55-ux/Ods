import React, { useState } from 'react';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-200/50 supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="bg-zinc-900 p-2 rounded-xl shadow-lg shadow-zinc-900/20">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="text-xl md:text-2xl font-black text-zinc-900 tracking-tighter uppercase leading-none">
              O.D’s <span className="text-red-600">Home Deeds</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Services', 'Packages', 'Quote'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
                className="text-sm font-bold text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 px-4 py-2 rounded-full transition-all uppercase tracking-wide cursor-pointer"
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className="px-6 py-2.5 bg-zinc-900 text-white text-sm font-black uppercase tracking-widest rounded-xl hover:bg-red-600 hover:shadow-lg hover:shadow-red-600/30 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              Book Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-zinc-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-zinc-200 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col p-4 space-y-2">
            {['Services', 'Packages', 'Quote'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-6 py-4 text-xl font-black text-zinc-800 hover:bg-zinc-50 rounded-2xl uppercase tracking-tight"
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact"
              className="block px-6 py-4 mt-4 bg-red-600 text-white text-center font-black uppercase tracking-widest rounded-2xl"
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};