'use client';

import React, { useState } from 'react';

export function EmergencyWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-[#DC2626] text-white p-4 rounded-full shadow-[0_8px_30px_rgb(220,38,38,0.3)] hover:scale-105 hover:bg-red-700 transition-all duration-300 flex items-center justify-center group"
        aria-label="Emergency Services"
      >
         <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
         </svg>
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-sans font-bold text-sm flex items-center group-hover:ml-2">
          EMERGENCY
        </span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={() => setIsOpen(false)}></div>
          <div className="relative bg-white rounded-[2rem] w-full max-w-md shadow-2xl p-8 border border-red-100 transform transition-all scale-100">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-[#DC2626]">
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                 </svg>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-600 transition-colors bg-slate-100 hover:bg-slate-200 rounded-full p-2">
                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                 </svg>
              </button>
            </div>
            
            <h3 className="font-sans font-bold text-2xl text-slate-900 mb-2">Emergency Response</h3>
            <p className="font-sans text-slate-600 text-sm mb-8">If you are experiencing a life-threatening medical emergency, please seek immediate assistance.</p>
            
            <div className="space-y-4">
              <a href="tel:911" className="w-full flex items-center justify-between bg-[#DC2626] text-white p-4 rounded-xl hover:bg-red-700 transition-colors group">
                <div className="flex items-center gap-3">
                   <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                   </svg>
                  <span className="font-sans font-semibold">Call Emergency Hotline</span>
                </div>
                <span className="font-mono text-sm opacity-80 group-hover:opacity-100 transition-opacity">911</span>
              </a>
              
              <button className="w-full flex items-center justify-between bg-slate-50 border border-slate-200 text-slate-900 p-4 rounded-xl hover:border-slate-300 hover:bg-slate-100 transition-colors">
                 <span className="font-sans font-semibold">Request Ambulance Dispatch</span>
                 <span className="text-slate-400">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
