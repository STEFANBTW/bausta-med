'use client';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ClientSelect } from '@/components/ClientSelect';

export default function BookPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(['.anim-title', '.anim-sub', '.anim-form-element'],
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
    );
  }, { scope: pageRef });

  return (
    <main ref={pageRef} className="relative w-full overflow-x-hidden bg-[#F7FAFC] min-h-screen">
      <Navbar theme="light" />
      <section className="pt-40 pb-20 px-6 md:px-16 w-full max-w-3xl mx-auto min-h-[80vh]">
        <h1 className="anim-title font-sans font-bold text-4xl md:text-5xl text-slate-900 tracking-tight mb-4 text-center">
          Schedule a Consultation
        </h1>
        <p className="anim-sub font-sans text-lg text-slate-600 mb-12 text-center max-w-xl mx-auto">
          Please provide your preliminary details. A care coordinator will contact you to finalize the clinical intake.
        </p>
        <form className="bg-white rounded-[2rem] border border-[rgba(15,23,42,0.08)] shadow-sm p-8 md:p-12 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 anim-form-element">
            <div className="space-y-2">
              <label className="font-sans font-medium text-sm text-slate-700">First Name</label>
              <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-sans text-sm outline-none focus:ring-2 focus:ring-[#1A73E8]/20 focus:border-[#1A73E8] transition-all" />
            </div>
            <div className="space-y-2">
              <label className="font-sans font-medium text-sm text-slate-700">Last Name</label>
              <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-sans text-sm outline-none focus:ring-2 focus:ring-[#1A73E8]/20 focus:border-[#1A73E8] transition-all" />
            </div>
          </div>
          <div className="space-y-2 anim-form-element">
            <label className="font-sans font-medium text-sm text-slate-700">Email Address</label>
            <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-sans text-sm outline-none focus:ring-2 focus:ring-[#1A73E8]/20 focus:border-[#1A73E8] transition-all" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 anim-form-element">
            <div className="space-y-2 relative z-50">
              <label className="font-sans font-medium text-sm text-slate-700">Department</label>
              <ClientSelect 
                placeholder="Select Department" 
                options={["Cardiology", "Neurology", "Oncology", "Orthopedics"]} 
              />
            </div>
            <div className="space-y-2">
              <label className="font-sans font-medium text-sm text-slate-700">Preferred Date (Optional)</label>
              <input type="date" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-sans text-sm outline-none focus:ring-2 focus:ring-[#1A73E8]/20 focus:border-[#1A73E8] transition-all text-slate-600" />
            </div>
          </div>
          <div className="space-y-2 anim-form-element">
             <label className="font-sans font-medium text-sm text-slate-700">Brief reasoning for visit</label>
             <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-sans text-sm outline-none focus:ring-2 focus:ring-[#1A73E8]/20 focus:border-[#1A73E8] transition-all resize-none"></textarea>
          </div>
          <div className="pt-4 anim-form-element">
            <button type="button" className="w-full bg-[#1A73E8] text-white overflow-hidden relative group rounded-xl px-6 py-4 font-sans font-medium text-base transition-transform duration-300 hover:scale-[1.02]">
              <span className="absolute inset-0 bg-[#4FB3BF] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"></span>
              <span className="relative z-10">Request Appointment</span>
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </main>
  );
}
