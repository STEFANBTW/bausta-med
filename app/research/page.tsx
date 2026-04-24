'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const TRIALS = [
  { 
    id: "T-892", 
    title: "Targeted Biological Inhibitors in Stage II Oncology", 
    phase: "Phase III", 
    status: "Recruiting",
    img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2000&auto=format&fit=crop"
  },
  { 
    id: "T-914", 
    title: "Neurological Pathway Mapping for Dementia Prevention", 
    phase: "Early Phase", 
    status: "Active",
    img: "https://images.unsplash.com/photo-1631551460395-e2d422ca1029?q=80&w=2000&auto=format&fit=crop"
  },
  { 
    id: "T-705", 
    title: "Non-invasive Cardiac Stress Modulation Arrays", 
    phase: "Phase II", 
    status: "Review",
    img: "https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=2000&auto=format&fit=crop"
  }
];

export default function ResearchPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    // Intro Animations
    gsap.fromTo('.res-intro',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
    );

    // Horizontal Scroll Trigger
    const scrollContainer = document.querySelector('.horizontal-scroll-container') as HTMLElement;
    const scrollWrapper = document.querySelector('.horizontal-scroll-wrapper') as HTMLElement;
    
    if (scrollContainer && scrollWrapper) {
      gsap.to(scrollWrapper, {
        x: () => -(scrollWrapper.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: scrollContainer,
          pin: true,
          scrub: 1,
          snap: 1 / (TRIALS.length - 1),
          start: "top top",
          end: () => "+=" + (scrollWrapper.scrollWidth - window.innerWidth),
          invalidateOnRefresh: true
        }
      });
    }

  }, { scope: pageRef });

  return (
    <main ref={pageRef} className="relative w-full overflow-x-hidden bg-[#0F172A] min-h-screen">
      <Navbar theme="dark" />
      
      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col justify-end pb-32 px-6 md:px-16 z-10 overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2080&auto=format&fit=crop" 
          alt="Clinical Lab" 
          fill 
          className="object-cover opacity-50 custom-mix-blend"
          unoptimized 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/50 via-[#0F172A]/35 to-transparent"></div>
        
        <div className="relative z-20 max-w-4xl res-intro">
           <div className="font-mono text-[#4FB3BF] text-sm tracking-widest uppercase mb-6">Clinical Trials & Data</div>
           <h1 className="font-sans font-bold text-5xl md:text-8xl text-white tracking-tight leading-[0.95] mb-6">
             Advancing the <br/><span className="italic font-serif text-[#1A73E8]">frontier.</span>
           </h1>
           <p className="font-sans text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed">
             The Bausta Med Center conducts independently-verified studies focused on longevity, precision medicine, and non-invasive surgical techniques. Scroll to explore active domains.
           </p>
        </div>
      </section>

      {/* Horizontal Scroll Section */}
      <section className="relative w-full bg-[#0F172A] horizontal-scroll-container">
         <div className="w-[300vw] h-screen flex relative horizontal-scroll-wrapper">
            {TRIALS.map((trial, i) => (
              <div key={trial.id} className="horizontal-panel w-screen h-screen flex items-center justify-center p-6 md:p-24 relative overflow-hidden">
                 
                 {/* Card Container */}
                 <div className="w-full max-w-6xl h-[80vh] bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] shadow-2xl flex flex-col md:flex-row overflow-hidden relative z-10">
                    {/* Trial Image */}
                    <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden group">
                       <Image 
                         src={trial.img} 
                         alt={trial.title} 
                         fill 
                         className="object-cover transition-transform duration-700 group-hover:scale-105"
                         unoptimized 
                       />
                       <div className="absolute inset-0 bg-[#1A73E8] mix-blend-overlay opacity-20"></div>
                    </div>

                    {/* Trial Info */}
                    <div className="w-full md:w-1/2 h-1/2 md:h-full p-10 md:p-16 flex flex-col justify-center">
                       <div className="font-mono text-sm text-slate-400 mb-4">{trial.id} {'//'} {trial.phase}</div>
                       <h3 className="font-sans font-bold text-3xl md:text-5xl text-white tracking-tight mb-8 leading-tight">
                         {trial.title}
                       </h3>
                       <div className="flex items-center gap-4 mb-10">
                          <span className="font-sans font-medium text-sm text-slate-400">Status:</span>
                          <span className={`px-4 py-1.5 rounded-full font-mono text-xs font-semibold ${trial.status === 'Recruiting' ? 'bg-[#1A73E8]/20 text-[#4FB3BF]' : 'bg-slate-800 text-slate-300'}`}>
                            {trial.status}
                          </span>
                       </div>
                       
                       <div>
                         <button className="bg-transparent border border-white/20 text-white rounded-full px-8 py-3 font-sans font-medium text-sm transition-all duration-300 hover:bg-white hover:text-[#0F172A]">
                           Read Whitepaper
                         </button>
                       </div>
                    </div>
                 </div>
                 
                 {/* Background Number */}
                 <div className="absolute right-12 bottom-12 font-sans font-bold text-[15vw] text-white/5 leading-none pointer-events-none">
                    0{i+1}
                 </div>
              </div>
            ))}
         </div>
      </section>

      <Footer />
    </main>
  );
}
