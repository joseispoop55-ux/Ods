import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-zinc-950 text-zinc-500 py-24 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-red-600 p-2.5 rounded-xl">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="text-3xl font-black text-white tracking-tighter uppercase leading-none">O.D’s <span className="text-red-600">Home Deeds</span></span>
            </div>
            <p className="max-w-md text-xl leading-relaxed font-medium text-zinc-400 mb-10">
              Professional property transformation. Landscaping, pressure washing, and deep cleaning for those who demand excellence.
            </p>
            <div className="flex gap-4">
               {['#services', '#packages', '#quote'].map(link => (
                 <a key={link} href={link} className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 rounded-lg text-xs font-black uppercase tracking-widest text-white transition-colors">
                   {link.replace('#', '')}
                 </a>
               ))}
            </div>
          </div>

          {/* Contact Actions */}
          <div className="flex flex-col justify-center space-y-6">
            <h4 className="text-white font-black text-sm uppercase tracking-[0.2em] mb-2">Get In Touch</h4>
            
            <a href="tel:5557891234" className="group flex items-center gap-6 p-6 bg-zinc-900/50 hover:bg-red-600 border border-zinc-800 hover:border-red-500 rounded-3xl transition-all duration-300">
              <div className="w-12 h-12 bg-zinc-800 group-hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <span className="block text-zinc-500 group-hover:text-red-100 text-xs font-bold uppercase tracking-wider mb-1">Call Us Directly</span>
                <span className="block text-2xl md:text-3xl font-black text-white">(555) 789-1234</span>
              </div>
            </a>

            <a href="mailto:contact@odshomedeeds.com" className="group flex items-center gap-6 p-6 bg-zinc-900/50 hover:bg-zinc-800 border border-zinc-800 rounded-3xl transition-all duration-300">
              <div className="w-12 h-12 bg-zinc-800 group-hover:bg-zinc-700 rounded-full flex items-center justify-center text-white transition-colors">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <span className="block text-zinc-500 text-xs font-bold uppercase tracking-wider mb-1">Email Support</span>
                <span className="block text-xl md:text-2xl font-black text-white">contact@odshomedeeds.com</span>
              </div>
            </a>

          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-bold uppercase tracking-wider text-zinc-600">
            &copy; {new Date().getFullYear()} O.D’s Home Deeds.
          </p>
          <p className="text-zinc-700 text-xs">
            Designed for Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};