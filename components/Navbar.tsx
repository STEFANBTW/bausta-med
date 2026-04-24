'use client';
import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { User } from 'lucide-react';

export function Navbar({ theme = 'transparent' }: { theme?: 'transparent' | 'light' | 'dark' }) {
  const navRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine appearance based on theme and scroll
  let navClasses = '';
  let linkClasses = '';

  if (scrolled || theme === 'light') {
    if (theme === 'dark') {
      navClasses = 'bg-[#0F172A]/90 backdrop-blur-xl border-b border-[rgba(255,255,255,0.08)] shadow-lg text-white';
      linkClasses = 'text-white/80 hover:text-white';
    } else {
      navClasses = 'bg-white/90 backdrop-blur-xl border-b border-[rgba(15,23,42,0.08)] shadow-lg shadow-slate-900/5 text-slate-900';
      linkClasses = 'text-slate-600 hover:text-slate-900';
    }
  } else {
    // Top of page and transparent or dark
    navClasses = 'bg-transparent text-white';
    linkClasses = 'text-white/80 hover:text-white';
  }

  return (
    <div className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${navClasses}`}>
      <nav
        ref={navRef}
        className="w-full flex items-center justify-between px-6 py-3 md:px-10 transition-all duration-500"
      >
        <div className="flex items-center gap-8">
          <Link href="/" className="font-sans font-bold text-lg tracking-tight">The Bausta Med Center</Link>
          <div className="hidden md:flex space-x-6 font-sans font-medium text-sm">
            <Link href="/departments" className={`transition-colors hover:-translate-y-[1px] duration-200 ${linkClasses}`}>Departments</Link>
            <Link href="/patients" className={`transition-colors hover:-translate-y-[1px] duration-200 ${linkClasses}`}>Patients</Link>
            <Link href="/research" className={`transition-colors hover:-translate-y-[1px] duration-200 ${linkClasses}`}>Research</Link>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Link href="/login" className={`flex items-center justify-center p-2 rounded-full transition-all duration-200 ${linkClasses} hover:bg-slate-100/10`}>
            <User className="w-5 h-5" />
          </Link>
          <Link href="/book" className="bg-[#1A73E8] text-white overflow-hidden relative group rounded-full px-5 py-2 font-sans font-medium text-sm transition-transform duration-300 hover:scale-[1.03]">
            <span className="absolute inset-0 bg-[#4FB3BF] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"></span>
            <span className="relative z-10">Book Appointment</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
