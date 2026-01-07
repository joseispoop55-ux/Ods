import React, { useState } from 'react';

interface BillingModalProps {
  item: string | null;
  onClose: () => void;
}

type PaymentMethod = 'card' | 'apple_pay' | 'later';

export const BillingModal: React.FC<BillingModalProps> = ({ item, onClose }) => {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    date: '',
    time: ''
  });

  if (!item) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
    // Simulate API processing
    setTimeout(() => {
      setStep(3);
    }, 2500);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative bg-zinc-50 w-full max-w-5xl h-full md:h-auto md:max-h-[90vh] md:rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 duration-300">
        
        {/* Left Panel: Summary (Desktop) */}
        <div className="hidden md:flex flex-col w-1/3 bg-zinc-900 text-white p-10 border-r border-zinc-800">
           <div className="mb-12">
             <div className="flex items-center gap-2 mb-6">
                <div className="bg-red-600 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="font-black uppercase tracking-tight text-xl">Order Summary</span>
             </div>
             
             <div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700/50 mb-6">
               <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2">Service Selected</p>
               <h3 className="text-xl font-black text-white leading-tight mb-2">{item}</h3>
               <p className="text-sm text-zinc-400">Professional execution by O.D's Home Deeds team.</p>
             </div>

             <div className="space-y-4">
               <div className="flex justify-between text-sm">
                 <span className="text-zinc-400">Duration Est.</span>
                 <span className="font-bold">2 - 4 Hours</span>
               </div>
               <div className="flex justify-between text-sm">
                 <span className="text-zinc-400">Team Size</span>
                 <span className="font-bold">2 Specialists</span>
               </div>
               <div className="h-px bg-zinc-800 my-4"></div>
               <div className="flex justify-between items-center">
                 <span className="text-zinc-400 font-medium">Total due</span>
                 <span className="text-2xl font-black text-white">TBD<span className="text-xs font-normal text-zinc-500 ml-1"> / On Completion</span></span>
               </div>
             </div>
           </div>

           <div className="mt-auto">
             <h4 className="font-bold text-sm uppercase tracking-widest mb-4 text-zinc-500">What Happens Next?</h4>
             <ul className="space-y-4 text-sm text-zinc-400">
               <li className="flex gap-3">
                 <span className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 text-xs font-bold text-white">1</span>
                 <span>We review your property details.</span>
               </li>
               <li className="flex gap-3">
                 <span className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 text-xs font-bold text-white">2</span>
                 <span>You receive a confirmation call within 24 hours.</span>
               </li>
               <li className="flex gap-3">
                 <span className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 text-xs font-bold text-white">3</span>
                 <span>Our team arrives fully equipped on your scheduled day.</span>
               </li>
             </ul>
           </div>
        </div>

        {/* Right Panel: Form */}
        <div className="flex-1 flex flex-col bg-white h-full overflow-y-auto">
          
          {/* Mobile Header */}
          <div className="p-6 border-b border-zinc-100 flex justify-between items-center sticky top-0 bg-white z-10">
            <div>
              <h2 className="text-2xl font-black text-zinc-900 uppercase tracking-tight">Checkout</h2>
              <p className="md:hidden text-xs text-zinc-500 mt-1 font-medium truncate max-w-[200px]">{item}</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-zinc-100 rounded-full transition-colors">
              <svg className="w-6 h-6 text-zinc-400 hover:text-zinc-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="p-6 md:p-10">
            {step === 1 && (
              <form onSubmit={handleSubmit} className="space-y-10">
                
                {/* Section 1: Contact */}
                <section>
                  <h3 className="text-sm font-black text-zinc-900 uppercase tracking-widest mb-6 flex items-center gap-2">
                    <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs">1</span>
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 md:col-span-1">
                      <label className="block text-xs font-bold text-zinc-500 uppercase mb-2">First Name</label>
                      <input 
                        required 
                        type="text" 
                        className="w-full bg-white text-zinc-900 border border-zinc-300 rounded-xl px-4 py-3 font-semibold focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-all placeholder:text-zinc-300"
                        placeholder="Jane"
                        value={formData.firstName}
                        onChange={e => setFormData({...formData, firstName: e.target.value})}
                      />
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <label className="block text-xs font-bold text-zinc-500 uppercase mb-2">Last Name</label>
                      <input 
                        required 
                        type="text" 
                        className="w-full bg-white text-zinc-900 border border-zinc-300 rounded-xl px-4 py-3 font-semibold focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-all placeholder:text-zinc-300"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={e => setFormData({...formData, lastName: e.target.value})}
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-xs font-bold text-zinc-500 uppercase mb-2">Email Address</label>
                      <input 
                        required 
                        type="email" 
                        className="w-full bg-white text-zinc-900 border border-zinc-300 rounded-xl px-4 py-3 font-semibold focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-all placeholder:text-zinc-300"
                        placeholder="jane@example.com"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div className="col-span-2">
                       <label className="block text-xs font-bold text-zinc-500 uppercase mb-2">Street Address</label>
                       <input 
                        required 
                        type="text" 
                        className="w-full bg-white text-zinc-900 border border-zinc-300 rounded-xl px-4 py-3 font-semibold focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-all placeholder:text-zinc-300"
                        placeholder="1234 Property Ln."
                        value={formData.address}
                        onChange={e => setFormData({...formData, address: e.target.value})}
                      />
                    </div>
                  </div>
                </section>

                {/* Section 2: Scheduling */}
                <section>
                  <h3 className="text-sm font-black text-zinc-900 uppercase tracking-widest mb-6 flex items-center gap-2">
                    <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs">2</span>
                    Schedule Service
                  </h3>
                  <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-zinc-500 uppercase mb-2">Preferred Date</label>
                        <input 
                          required
                          type="date" 
                          min={today}
                          className="w-full bg-white text-zinc-900 border border-zinc-300 rounded-xl px-4 py-3 font-semibold focus:ring-2 focus:ring-red-600 outline-none cursor-pointer"
                          value={formData.date}
                          onChange={e => setFormData({...formData, date: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-zinc-500 uppercase mb-2">Preferred Time Window</label>
                        <select 
                          required
                          className="w-full bg-white text-zinc-900 border border-zinc-300 rounded-xl px-4 py-3 font-semibold focus:ring-2 focus:ring-red-600 outline-none appearance-none"
                          value={formData.time}
                          onChange={e => setFormData({...formData, time: e.target.value})}
                        >
                          <option value="">Select a window</option>
                          <option value="morning">Morning (8AM - 12PM)</option>
                          <option value="afternoon">Afternoon (12PM - 4PM)</option>
                          <option value="evening">Evening (4PM - 7PM)</option>
                        </select>
                      </div>
                    </div>
                    <p className="text-xs text-zinc-500 mt-4 leading-relaxed">
                      * We will do our best to accommodate your selected time. Our team will confirm the exact arrival slot via phone.
                    </p>
                  </div>
                </section>

                {/* Section 3: Payment */}
                <section>
                   <h3 className="text-sm font-black text-zinc-900 uppercase tracking-widest mb-6 flex items-center gap-2">
                    <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs">3</span>
                    Payment Method
                  </h3>
                  
                  {/* Payment Tabs */}
                  <div className="flex gap-2 p-1 bg-zinc-100 rounded-xl mb-6">
                    <button 
                      type="button"
                      onClick={() => setPaymentMethod('apple_pay')}
                      className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 ${paymentMethod === 'apple_pay' ? 'bg-black text-white shadow-md' : 'text-zinc-500 hover:bg-zinc-200'}`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.83 2.66c.46-.57.77-1.37.77-2.16 0-.11-.01-.22-.03-.32-.73.03-1.62.49-2.14 1.1-.42.48-.79 1.25-.79 2.01 0 .11.02.22.04.32.82.06 1.66-.42 2.15-.95zM12.9 3.01c-1.35.07-2.5 0.77-3.15 0.77-.65 0-1.65-.73-2.73-.71-1.4.02-2.71.82-3.43 2.08-1.47 2.54-.38 6.3 1.05 8.36.7.99 1.52 2.1 2.61 2.06 1.04-.04 1.44-.67 2.7-.67 1.27 0 1.63.67 2.73.65 1.14-.02 1.86-1.03 2.55-2.05.8-1.17 1.13-2.31 1.15-2.37-.03-.01-2.22-.85-2.24-3.38-.02-2.12 1.73-3.13 1.81-3.18-1-.99-2.55-1.1-3.05-1.51z"/></svg>
                      Apple Pay
                    </button>
                    <button 
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all ${paymentMethod === 'card' ? 'bg-white text-zinc-900 shadow-md' : 'text-zinc-500 hover:bg-zinc-200'}`}
                    >
                      Card
                    </button>
                     <button 
                      type="button"
                      onClick={() => setPaymentMethod('later')}
                      className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all ${paymentMethod === 'later' ? 'bg-white text-zinc-900 shadow-md' : 'text-zinc-500 hover:bg-zinc-200'}`}
                    >
                      Pay Later
                    </button>
                  </div>

                  {/* Payment Content */}
                  <div className="min-h-[150px]">
                    {paymentMethod === 'apple_pay' && (
                      <div className="flex flex-col items-center justify-center p-8 bg-zinc-50 rounded-2xl border border-zinc-200 text-center animate-in fade-in slide-in-from-bottom-2">
                        <button type="submit" className="w-full max-w-sm bg-black hover:bg-zinc-800 text-white font-medium py-4 rounded-[4px] flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95">
                           Pay with <span className="font-bold text-lg tracking-tight">Pay</span>
                        </button>
                        <p className="text-xs text-zinc-500 mt-4">Secure payment processing via Apple.</p>
                      </div>
                    )}

                    {paymentMethod === 'card' && (
                      <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2">
                        <div className="relative">
                           <input 
                            type="text" 
                            className="w-full bg-white text-zinc-900 border border-zinc-300 rounded-xl px-4 py-3 font-mono font-medium focus:ring-2 focus:ring-red-600 outline-none placeholder:text-zinc-300"
                            placeholder="0000 0000 0000 0000"
                          />
                          <svg className="w-6 h-6 absolute right-4 top-3.5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                           <input 
                            type="text" 
                            className="w-full bg-white text-zinc-900 border border-zinc-300 rounded-xl px-4 py-3 font-mono font-medium focus:ring-2 focus:ring-red-600 outline-none placeholder:text-zinc-300"
                            placeholder="MM/YY"
                          />
                           <input 
                            type="text" 
                            className="w-full bg-white text-zinc-900 border border-zinc-300 rounded-xl px-4 py-3 font-mono font-medium focus:ring-2 focus:ring-red-600 outline-none placeholder:text-zinc-300"
                            placeholder="CVC"
                          />
                        </div>
                        <button type="submit" className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-black uppercase tracking-widest py-4 rounded-xl shadow-lg mt-4 transition-all">
                          Confirm & Pay
                        </button>
                      </div>
                    )}

                    {paymentMethod === 'later' && (
                      <div className="bg-zinc-50 border border-zinc-200 p-6 rounded-2xl animate-in fade-in slide-in-from-bottom-2">
                        <div className="flex items-start gap-4">
                           <div className="p-3 bg-green-100 text-green-600 rounded-full">
                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                           </div>
                           <div>
                             <h4 className="font-bold text-zinc-900 mb-1">Pay on Completion</h4>
                             <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                               No upfront payment required. You will be billed once the job is completed to your satisfaction. We accept Cash, Check, or Card on-site.
                             </p>
                             <button type="submit" className="px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-white font-bold rounded-xl uppercase tracking-wide text-xs">
                               Book Appointment
                             </button>
                           </div>
                        </div>
                      </div>
                    )}
                  </div>
                </section>
                
                <p className="text-center text-xs text-zinc-400 mt-8 pb-8 md:pb-0">
                  By confirming, you agree to O.D's Home Deeds terms of service and cancellation policy.
                </p>

              </form>
            )}

            {step === 2 && (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px]">
                <div className="relative w-24 h-24 mb-8">
                  <div className="absolute inset-0 border-4 border-zinc-100 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
                </div>
                <h3 className="text-2xl font-black text-zinc-900 mb-2">Securing Your Slot...</h3>
                <p className="text-zinc-500 font-medium">Please wait while we confirm availability.</p>
              </div>
            )}

            {step === 3 && (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                <div className="w-24 h-24 bg-green-500 text-white rounded-full flex items-center justify-center mb-8 shadow-xl shadow-green-500/30 animate-in zoom-in duration-300">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-zinc-900 mb-4 tracking-tight">Booking Confirmed!</h3>
                <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200 max-w-sm w-full mb-8">
                  <p className="text-zinc-500 text-sm mb-4">
                    Thank you <span className="text-zinc-900 font-bold">{formData.firstName}</span>. Your appointment for <span className="text-zinc-900 font-bold">{item}</span> is scheduled.
                  </p>
                  <div className="flex justify-between items-center text-sm border-t border-zinc-200 pt-4">
                    <span className="text-zinc-500">Date</span>
                    <span className="font-bold text-zinc-900">{formData.date || 'Pending'}</span>
                  </div>
                </div>
                <button 
                  onClick={onClose}
                  className="px-10 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-black rounded-xl uppercase tracking-widest shadow-lg transition-all"
                >
                  Return to Home
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};