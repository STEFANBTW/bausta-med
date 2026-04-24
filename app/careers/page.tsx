'use client';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const ROLES = [
  { title: "Clinical Informatics Lead", department: "Data Integrity", type: "Full-Time", location: "On-Site" },
  { title: "Cardiothoracic Surgical Nurse", department: "Surgery", type: "Full-Time", location: "On-Site" },
  { title: "Senior Preventative Oncologist", department: "Oncology", type: "Full-Time", location: "Hybrid" },
  { title: "Patient Experience Coordinator", department: "Operations", type: "Part-Time", location: "On-Site" }
];

export default function CareersPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    gsap.fromTo(['.car-elem'],
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.1 }
    );
  }, { scope: pageRef });

  return (
    <main ref={pageRef} className="relative w-full overflow-x-hidden bg-[#F7FAFC] min-h-screen flex flex-col">
      <Navbar theme="light" />
      <section className="pt-40 flex-grow pb-24 px-6 md:px-16 w-full max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16 car-elem">
          <h1 className="font-sans font-bold text-4xl md:text-6xl text-slate-900 tracking-tight mb-4">
            Become an instrument of care.
          </h1>
          <p className="font-serif italic text-2xl text-slate-600 mb-6">
            Join our clinical teams pushing boundaries daily.
          </p>
          <p className="font-sans text-slate-500 text-lg leading-relaxed">
            We are constantly searching for medical professionals, data scientists, and operational staff who share our commitment to precision medicine and evidence-based practice.
          </p>
        </div>

        <div className="car-elem bg-white rounded-[2rem] border border-[rgba(15,23,42,0.08)] shadow-sm overflow-hidden">
           <div className="hidden md:grid grid-cols-12 gap-4 px-8 py-4 border-b border-slate-100 bg-slate-50 font-sans font-medium text-sm text-slate-500">
              <div className="col-span-6">Role / Department</div>
              <div className="col-span-3">Type</div>
              <div className="col-span-3">Location</div>
           </div>
           <div className="divide-y divide-slate-100">
             {ROLES.map(r => (
               <div key={r.title} className="group grid grid-cols-1 md:grid-cols-12 gap-4 px-8 py-6 hover:bg-slate-50 transition-colors items-center cursor-pointer">
                  <div className="col-span-1 md:col-span-6">
                    <h3 className="font-sans font-bold text-slate-900 text-lg group-hover:text-[#1A73E8] transition-colors">{r.title}</h3>
                    <p className="font-mono text-xs text-slate-500 mt-1">{r.department}</p>
                  </div>
                  <div className="col-span-1 md:col-span-3">
                    <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full font-sans text-xs font-medium">{r.type}</span>
                  </div>
                  <div className="col-span-1 md:col-span-3 flex justify-between items-center">
                    <span className="font-sans text-slate-600 text-sm">{r.location}</span>
                    <span className="text-[#1A73E8] opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300">&rarr;</span>
                  </div>
               </div>
             ))}
           </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
