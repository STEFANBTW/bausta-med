'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ChevronRight, Lock, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    window.location.href = '/portal';
  };

  return (
    <main className="relative w-full min-h-screen bg-[#F7FAFC] flex flex-col">
      <Navbar theme="light" />
      
      <section className="flex-grow flex items-center justify-center px-6 pt-32 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full max-w-md"
        >
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="text-center mb-10">
              <h1 className="font-sans font-bold text-3xl text-slate-900 tracking-tight mb-2">Welcome Back</h1>
              <p className="font-sans text-slate-500 text-sm">Access your clinical dashboard and health records.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    type="email" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3 pl-12 pr-4 font-sans text-sm outline-none focus:ring-2 focus:ring-[#1A73E8]/20 focus:border-[#1A73E8] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold ml-1">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    type="password" 
                    required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3 pl-12 pr-4 font-sans text-sm outline-none focus:ring-2 focus:ring-[#1A73E8]/20 focus:border-[#1A73E8] transition-all"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button type="button" className="text-xs font-sans font-medium text-[#1A73E8] hover:underline">Forgot password?</button>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#1A73E8] text-white rounded-full py-4 font-sans font-semibold text-sm flex items-center justify-center gap-2 group hover:bg-[#1A73E8]/90 transition-all duration-300 shadow-lg shadow-blue-600/10 active:scale-[0.98]"
              >
                Sign In
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-slate-50 text-center">
              <p className="text-xs font-sans text-slate-500">
                Don&apos;t have an account? <Link href="/book" className="text-[#1A73E8] font-semibold hover:underline">Register for treatment</Link>
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
