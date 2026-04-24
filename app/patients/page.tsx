'use client';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

import Link from 'next/link';

const BLOCKS = [
  { title: "Patient Portal", desc: "Access your clinical records, test results, and direct messaging with your care team in a secure environment.", action: "Log In" },
  { title: "Visit Information", desc: "Guidelines, parking instructions, and required preparatory materials for incoming patient visits.", action: "View Guide" },
  { title: "Billing & Insurance", desc: "Transparent financial coordination and comprehensive guides on accepted coverage plans.", action: "Explore Options" },
  { title: "Patient Rights", desc: "Our commitment to your privacy, dignity, and active involvement in your ongoing care protocols.", action: "Read Policy" }
];

export default function PatientsPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    gsap.fromTo(['.pat-header', '.pat-block'],
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.1 }
    );
  }, { scope: pageRef });

  return (
    <main ref={pageRef} className="relative w-full overflow-x-hidden bg-[#F7FAFC] min-h-screen flex flex-col">
      <Navbar theme="light" />
      <section className="pt-40 flex-grow pb-24 px-6 md:px-16 w-full max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <h1 className="pat-header font-sans font-bold text-4xl md:text-6xl text-slate-900 tracking-tight mb-4">
            Patient Resources
          </h1>
          <p className="pat-header font-serif italic text-2xl text-slate-600 mb-6">
            Clarity before, during, and after your care.
          </p>
          <p className="pat-header font-sans text-slate-500 text-lg leading-relaxed">
            We believe that an informed patient has better outcomes. Access your secure portal, explore pre-visit requirements, and understand your care pathway fully.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BLOCKS.map(b => (
            <div key={b.title} className="pat-block bg-white rounded-[2rem] border border-[rgba(15,23,42,0.08)] shadow-sm p-8 transition-transform duration-300 hover:-translate-y-1">
               <h3 className="font-sans font-bold text-xl text-slate-900 mb-3">{b.title}</h3>
               <p className="font-sans text-slate-600 text-base leading-relaxed mb-6">{b.desc}</p>
               <Link href={b.title === "Patient Portal" ? "/login" : "#"} className="text-[#1A73E8] font-sans font-medium hover:text-[#4FB3BF] transition-colors flex items-center gap-2">
                  {b.action} &rarr;
               </Link>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
