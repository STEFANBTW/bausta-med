'use client';

import React, { useState, useRef, useEffect } from 'react';

export function ClientSelect({ options, placeholder }: { options: string[], placeholder: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={ref}>
      <div 
        className={`w-full bg-slate-50 border rounded-xl px-4 py-3 font-sans text-sm flex items-center justify-between cursor-pointer transition-all ${isOpen ? 'border-[#1A73E8] ring-2 ring-[#1A73E8]/20 bg-white' : 'border-slate-200 hover:border-slate-300'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={selected ? 'text-slate-900' : 'text-slate-500'}>
          {selected || placeholder}
        </span>
        <svg className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      
      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-[rgba(15,23,42,0.08)] rounded-xl shadow-xl py-2 opacity-100 scale-100 transition-all origin-top">
          {options.map((opt) => (
            <div 
              key={opt}
              className="px-4 py-2 hover:bg-slate-50 cursor-pointer font-sans text-sm text-slate-700 hover:text-[#1A73E8] transition-colors"
              onClick={() => { setSelected(opt); setIsOpen(false); }}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
