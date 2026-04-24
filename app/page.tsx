'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ClientSelect } from '@/components/ClientSelect';

gsap.registerPlugin(useGSAP, ScrollTrigger, MotionPathPlugin);

export default function LandingPage() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Top level animations if any
  }, { scope: container });

  return (
    <main ref={container} className="relative w-full overflow-x-hidden bg-[#F7FAFC]">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PhilosophySection />
      <ProtocolSection />
      <BookAppointmentCTA />
      <Footer />
    </main>
  );
}

function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.hero-text', 
      { y: 40, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, stagger: 0.08, ease: 'power3.out', delay: 0.2 }
    );
  }, { scope: heroRef });

  return (
    <section ref={heroRef} className="relative min-h-[100dvh] bg-[#0F172A] w-full flex items-end justify-start pb-16 px-6 md:px-16 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2500&auto=format&fit=crop"
        alt="Modern Hospital Atrium"
        fill
        className="object-cover opacity-60"
        priority
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/15 to-transparent"></div>
      
      <div className="relative z-10 max-w-4xl pt-32">
        <h1 className="hero-text font-sans font-bold text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-tight mb-2">
          Healthcare that restores clarity.
        </h1>
        <h2 className="hero-text font-serif italic text-3xl md:text-5xl lg:text-6xl text-white/90 mb-6">
          Care you can trust.
        </h2>
        <p className="hero-text font-sans text-white/80 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          Evidence-based medicine merging precision diagnostics with continuous, patient-centered monitoring for optimal health outcomes.
        </p>
        <div className="hero-text flex flex-wrap items-center gap-6">
          <button className="bg-[#1A73E8] text-white relative group overflow-hidden rounded-full px-8 py-4 font-sans font-medium hover:scale-[1.03] transition-transform duration-300">
            <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"></span>
            <span className="relative z-10 group-hover:text-[#1A73E8] transition-colors duration-300">Find a Specialist</span>
          </button>
          <a href="/departments" className="text-white font-sans font-medium hover:text-[#4FB3BF] transition-colors duration-200">
            Explore Departments &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="relative px-6 md:px-16 py-24 md:py-32 w-full bg-[#F7FAFC]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard1 />
        <FeatureCard2 />
        <FeatureCard3 />
      </div>
    </section>
  );
}

function FeatureCard1() {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    gsap.to('.lens', {
      motionPath: {
        path: [
          { x: 0, y: 0 },
          { x: 150, y: 0 },
          { x: 150, y: 150 },
          { x: 0, y: 150 },
          { x: 75, y: 75 },
          { x: 0, y: 0 },
        ],
        curviness: 1,
      },
      duration: 5,
      ease: 'none',
      repeat: -1,
    });
  }, { scope: cardRef });

  return (
    <div ref={cardRef} className="bg-white rounded-[2rem] border border-[rgba(15,23,42,0.08)] shadow-md shadow-slate-900/5 p-6 md:p-8 relative overflow-hidden flex flex-col h-[400px]">
      <div className="mb-6 relative z-10">
        <h3 className="font-sans font-bold text-xl text-slate-900 mb-2">Diagnostic Accuracy</h3>
        <p className="font-sans text-slate-600 text-sm">We start with a complete clinical picture.</p>
      </div>

      <div className="relative flex-grow rounded-2xl bg-slate-50 border border-slate-100 overflow-hidden">
        <div className="absolute inset-0 p-4 font-mono text-xs text-slate-400 flex flex-col justify-between">
           <div>SCANNING...</div>
           <div className="w-full h-px bg-slate-200/50 my-2"></div>
           <div>AWAITING ENHANCEMENT</div>
           <svg width="100%" height="40" className="opacity-20 mt-2">
             <path d="M0 20 Q 20 0, 40 20 T 80 20 T 120 20" stroke="currentColor" fill="none" />
           </svg>
        </div>

        <div className="absolute inset-0 p-4 font-mono text-xs text-[#1A73E8] flex flex-col justify-between bg-blue-50" style={{ clipPath: 'url(#lens-clip)' }}>
           <div className="font-bold text-[#0F172A]">VITALS STABLE</div>
           <div className="w-full h-px bg-[#1A73E8]/20 my-2"></div>
           <div>EARLY ANOMALY DETECTED</div>
           <div className="text-emerald-600 mt-1">✓ No immediate risks</div>
           <svg width="100%" height="40" className="mt-2" preserveAspectRatio="none">
             <path d="M0 20 Q 20 5, 40 20 T 80 20 T 120 20" stroke="#1A73E8" fill="none" strokeWidth="2" />
           </svg>
        </div>

        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <clipPath id="lens-clip">
               <circle className="lens" cx="40" cy="40" r="60" />
            </clipPath>
          </defs>
          <circle className="lens" cx="40" cy="40" r="60" fill="none" stroke="#4FB3BF" strokeWidth="2" strokeDasharray="4 4" />
        </svg>

      </div>
    </div>
  );
}

function FeatureCard2() {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    tl.fromTo('.panel-a', { x: -40, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.8, ease: 'power2.out' })
      .to('.text-a', { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.1 }, "-=0.4")
      .to('.panel-a', { x: 40, autoAlpha: 0, duration: 0.8, ease: 'power2.in' }, "+=2.5")
      
      .fromTo('.panel-b', { x: 40, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.8, ease: 'power2.out' })
      .to('.text-b', { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.1 }, "-=0.4")
      .to('.panel-b', { x: -40, autoAlpha: 0, duration: 0.8, ease: 'power2.in' }, "+=2.5")
      
      .fromTo('.panel-c', { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.8, ease: 'power2.out' })
      .to('.text-c', { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.1 }, "-=0.4")
      .to('.panel-c', { y: -40, autoAlpha: 0, duration: 0.8, ease: 'power2.in' }, "+=2.5");
  }, { scope: cardRef });

  return (
    <div ref={cardRef} className="bg-white rounded-[2rem] border border-[rgba(15,23,42,0.08)] shadow-md shadow-slate-900/5 p-6 md:p-8 relative overflow-hidden flex flex-col h-[400px]">
       <div className="mb-6 relative z-10">
        <h3 className="font-sans font-bold text-xl text-slate-900 mb-2">Real-time Monitoring</h3>
        <p className="font-sans text-slate-600 text-sm">Vital signs available securely and instantly.</p>
      </div>

      <div className="relative flex-grow flex items-center justify-center">
        <div className="panel-a absolute w-full max-w-[240px] bg-white border border-[#1A73E8]/20 shadow-lg rounded-2xl p-4 invisible">
          <div className="text-a font-mono text-xs text-slate-500 mb-2 invisible translate-y-2">Vitals Overview</div>
          <div className="text-a font-sans font-bold text-2xl text-[#0F172A] invisible translate-y-2">72 <span className="text-sm font-normal text-slate-500">BPM</span></div>
          <div className="text-a font-sans font-bold text-2xl text-[#0F172A] invisible translate-y-2">120/80 <span className="text-sm font-normal text-slate-500">mmHg</span></div>
          <div className="text-a text-emerald-600 text-xs font-mono mt-3 invisible translate-y-2">● STABLE</div>
        </div>
        <div className="panel-b absolute w-full max-w-[240px] bg-white border border-rose-200 shadow-lg rounded-2xl p-4 invisible">
          <div className="text-b font-mono text-xs text-slate-500 mb-2 invisible translate-y-2">System Alerts</div>
          <div className="text-b font-sans font-bold text-lg text-[#0F172A] invisible translate-y-2">No Active Alerts</div>
          <div className="text-b font-sans text-sm text-slate-500 invisible translate-y-2">All parameters within baseline.</div>
          <div className="text-b text-emerald-600 text-xs font-mono mt-3 invisible translate-y-2">● SECURE</div>
        </div>
        <div className="panel-c absolute w-full max-w-[240px] bg-[#0F172A] border border-slate-700 shadow-lg rounded-2xl p-4 invisible">
          <div className="text-c font-mono text-xs text-slate-400 mb-2 invisible translate-y-2">Trend Summary</div>
          <div className="text-c font-sans text-white text-sm invisible translate-y-2">Stability improving over last 24h.</div>
          <div className="text-c h-10 w-full mt-3 flex items-end space-x-1 invisible translate-y-2">
            {[40, 60, 50, 80, 90, 75, 100].map((h, i) => (
              <div key={i} className="flex-1 bg-[#4FB3BF] rounded-t-sm" style={{ height: `${h}%` }}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard3() {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });
    
    const path = cardRef.current?.querySelector('.journey-path') as SVGPathElement;
    if(path) {
      const len = path.getTotalLength();
      gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
      
      tl.to(path, { strokeDashoffset: 0, duration: 2.5, ease: 'power2.inOut' });

      gsap.utils.toArray('.journey-node').forEach((node: any, i) => {
         tl.fromTo(node, { scale: 0.5, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.4, ease: 'back.out(1.7)' }, 0.5 + (i * 0.6));
      });
    }
  }, { scope: cardRef });

  return (
    <div ref={cardRef} className="bg-white rounded-[2rem] border border-[rgba(15,23,42,0.08)] shadow-md shadow-slate-900/5 p-6 md:p-8 relative overflow-hidden flex flex-col h-[400px]">
       <div className="mb-4 relative z-10">
        <h3 className="font-sans font-bold text-xl text-slate-900 mb-2">Patient Care Journey</h3>
        <p className="font-sans text-slate-600 text-sm">Seamless coordination across all stages.</p>
      </div>

      <div className="relative flex-grow flex items-center justify-center p-4">
        <div className="relative w-full aspect-square max-w-[280px]">
           <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
             <path d="M 10 20 C 40 20, 30 80, 60 80 S 90 50, 90 20" fill="none" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
             <path className="journey-path" d="M 10 20 C 40 20, 30 80, 60 80 S 90 50, 90 20" fill="none" stroke="#1A73E8" strokeWidth="3" strokeLinecap="round" />
             
             <g className="journey-node invisible" transform="translate(10, 20)">
               <circle cx="0" cy="0" r="4" fill="#4FB3BF" />
               <circle cx="0" cy="0" r="8" fill="none" stroke="#4FB3BF" strokeWidth="1" opacity="0.4" />
               <text x="-5" y="-12" fontSize="5" fontFamily="monospace" fill="#0F172A">Intake</text>
             </g>

             <g className="journey-node invisible" transform="translate(42, 55)">
               <circle cx="0" cy="0" r="4" fill="#1A73E8" />
               <text x="-25" y="0" fontSize="5" fontFamily="monospace" fill="#0F172A">Diagnose</text>
             </g>

             <g className="journey-node invisible" transform="translate(60, 80)">
               <circle cx="0" cy="0" r="4" fill="#1A73E8" />
               <text x="8" y="2" fontSize="5" fontFamily="monospace" fill="#0F172A">Treat</text>
             </g>

             <g className="journey-node invisible" transform="translate(90, 20)">
               <circle cx="0" cy="0" r="4" fill="#16A34A" />
               <circle cx="0" cy="0" r="8" fill="#16A34A" opacity="0.2" />
               <text x="-15" y="-12" fontSize="5" fontFamily="monospace" fill="#0F172A" fontWeight="bold">Follow-up</text>
             </g>
           </svg>
        </div>
      </div>
    </div>
  );
}

function PhilosophySection() {
  const phiRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.phi-line', 
      { y: 30, opacity: 0 }, 
      { 
        y: 0, opacity: 1, duration: 1.2, stagger: 0.3, ease: 'power3.out',
        scrollTrigger: {
          trigger: phiRef.current,
          start: 'top 70%',
        }
      }
    );
    gsap.to('.phi-bg', {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: phiRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });

  }, { scope: phiRef });

  return (
    <section ref={phiRef} className="relative w-full bg-[#0F172A] py-24 md:py-32 px-6 md:px-16 overflow-hidden flex items-center justify-center min-h-[70vh]">
      <div className="absolute inset-0 w-full h-full phi-bg z-0 opacity-[0.08]">
        <Image
          src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2500&auto=format&fit=crop"
          alt="Abstract medical texture"
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      
      <div className="relative z-10 max-w-4xl text-center space-y-6">
        <div className="phi-line font-sans text-slate-400 text-xl md:text-3xl tracking-tight">
          Most hospitals focus on: treating symptoms.
        </div>
        <div className="phi-line font-serif italic text-white text-4xl md:text-6xl lg:text-7xl leading-tight">
          We focus on: restoring <span className="text-[#4FB3BF] not-italic font-sans font-bold">whole&#8209;patient health</span>.
        </div>
      </div>
    </section>
  );
}

function ProtocolSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.protocol-card') as HTMLDivElement[];
    
    cards.forEach((card, i) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        pin: true,
        pinSpacing: false,
        end: "+=100%",
        id: `card-${i}`
      });

      if (i < cards.length - 1) {
        gsap.to(card, {
          scale: 0.9,
          opacity: 0.5,
          filter: 'blur(20px)',
          ease: 'none',
          scrollTrigger: {
            trigger: cards[i + 1],
            start: "top bottom",
            end: "top top",
            scrub: true,
          }
        });
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full bg-[#F7FAFC]">
      <ProtocolCard 
        num="01" 
        title="Clinical Intake Protocol" 
        desc="We begin with a full evaluation of symptoms, history, and vitals." 
        bg="bg-white"
      >
        <IntakeAnimation />
      </ProtocolCard>
      
      <ProtocolCard 
        num="02" 
        title="Precision Diagnostics" 
        desc="We use modern diagnostic tools to uncover root causes." 
        bg="bg-slate-50"
      >
        <DiagnosticsAnimation />
      </ProtocolCard>
      
      <ProtocolCard 
        num="03" 
        title="Continuous Care Loop" 
        desc="We track progress and adjust care plans in real time." 
        bg="bg-white"
      >
        <CareLoopAnimation />
      </ProtocolCard>
    </section>
  );
}

function ProtocolCard({ num, title, desc, bg, children }: { num: string, title: string, desc: string, bg: string, children: React.ReactNode }) {
  return (
    <div className={`protocol-card w-full h-[100dvh] flex flex-col md:flex-row shadow-2xl ${bg} relative z-10`}>
      <div className="w-full md:w-1/2 h-1/2 md:h-full p-10 md:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[rgba(15,23,42,0.08)]">
         <div className="font-mono text-[#1A73E8] tracking-widest text-sm font-semibold mb-6">STEP {num}</div>
         <h2 className="font-sans font-bold text-4xl md:text-6xl text-slate-900 tracking-tight mb-6">{title}</h2>
         <p className="font-sans text-slate-600 text-lg md:text-xl max-w-md">{desc}</p>
      </div>
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center bg-slate-50/50">
         {children}
      </div>
    </div>
  );
}

function IntakeAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.to('.intake-ring', {
      rotation: 360,
      transformOrigin: '50% 50%',
      duration: 10,
      ease: 'none',
      repeat: -1,
      stagger: 0.5
    });
  }, { scope: ref });

  return (
    <div ref={ref} className="relative w-64 h-64 flex items-center justify-center">
       <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible opacity-80">
         <circle cx="50" cy="50" r="40" fill="none" stroke="#E2E8F0" strokeWidth="1" />
         <circle className="intake-ring" cx="50" cy="50" r="40" fill="none" stroke="#4FB3BF" strokeWidth="2" strokeDasharray="30 200" />
         <circle cx="50" cy="50" r="25" fill="none" stroke="#E2E8F0" strokeWidth="1" />
         <circle className="intake-ring" cx="50" cy="50" r="25" fill="none" stroke="#1A73E8" strokeWidth="2" strokeDasharray="40 100" />
         <circle cx="50" cy="50" r="10" fill="#0F172A" />
       </svg>
    </div>
  );
}

function DiagnosticsAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.to('.scan-line', {
      y: 100,
      duration: 2,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1
    });
    const dots = gsap.utils.toArray('.grid-dot');
    gsap.to(dots, {
      opacity: () => Math.random() > 0.8 ? 1 : 0.2,
      fill: () => Math.random() > 0.9 ? '#1A73E8' : '#cbd5e1',
      duration: 0.5,
      repeat: -1,
      stagger: { each: 0.1, from: 'random' }
    });
  }, { scope: ref });

  return (
    <div ref={ref} className="relative w-64 h-64 p-4 border border-slate-200 bg-white rounded-xl shadow-inner overflow-hidden">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {Array.from({ length: 10 }).map((_, i) => 
            Array.from({ length: 10 }).map((_, j) => (
              <circle key={`${i}-${j}`} className="grid-dot" cx={5 + j * 10} cy={5 + i * 10} r="2" fill="#cbd5e1" opacity="0.2" />
            ))
          )}
          <line className="scan-line" x1="0" y1="0" x2="100" y2="0" stroke="#4FB3BF" strokeWidth="1" />
          <defs>
             <linearGradient id="scan-glow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4FB3BF" stopOpacity="0" />
                <stop offset="100%" stopColor="#4FB3BF" stopOpacity="0.4" />
             </linearGradient>
          </defs>
          <rect className="scan-line" x="0" y="-20" width="100" height="20" fill="url(#scan-glow)" />
        </svg>
    </div>
  );
}

function CareLoopAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.fromTo('.ekg-path', 
      { strokeDasharray: 200, strokeDashoffset: 200 }, 
      { strokeDashoffset: -200, duration: 2.5, ease: 'linear', repeat: -1 }
    );
  }, { scope: ref });

  return (
    <div ref={ref} className="relative w-64 h-32 flex items-center justify-center">
       <svg viewBox="0 0 200 50" className="w-full h-full overflow-visible">
          <polyline className="ekg-path" points="0,25 50,25 60,10 70,45 80,5 90,30 100,25 200,25" fill="none" stroke="#1A73E8" strokeWidth="3" strokeLinejoin="miter" />
          <circle className="ekg-dot" cx="100" cy="25" r="4" fill="#4FB3BF" opacity="0">
             <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" />
          </circle>
       </svg>
    </div>
  );
}

// ============== H. BOOK APPOINTMENT CTA ==============
function BookAppointmentCTA() {
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.cta-elem', 
      { y: 30, opacity: 0 }, 
      { 
        y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 80%',
        }
      }
    );
  }, { scope: ctaRef });

  return (
    <section ref={ctaRef} className="relative w-full bg-[#F7FAFC] py-24 md:py-32 px-6 md:px-16 z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
      <div className="max-w-4xl mx-auto text-center mb-16 cta-elem">
         <h2 className="font-sans font-bold text-3xl md:text-5xl text-slate-900 tracking-tight mb-4">Ready for clarity?</h2>
         <p className="font-sans text-slate-600 text-lg">Request a preliminary consultation today.</p>
      </div>

      <div className="max-w-3xl mx-auto cta-elem relative z-30">
        <form className="bg-white rounded-[2.5rem] border border-[rgba(15,23,42,0.08)] shadow-lg shadow-[#1A73E8]/5 p-8 md:p-12 space-y-6 relative ring-1 ring-[#4FB3BF]/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            <div className="space-y-2">
              <label className="font-sans font-medium text-sm text-slate-700">First Name</label>
              <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-sans text-sm outline-none focus:ring-2 focus:ring-[#1A73E8]/20 focus:border-[#1A73E8] transition-all" />
            </div>
            <div className="space-y-2">
              <label className="font-sans font-medium text-sm text-slate-700">Last Name</label>
              <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-sans text-sm outline-none focus:ring-2 focus:ring-[#1A73E8]/20 focus:border-[#1A73E8] transition-all" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-50">
            <div className="space-y-2">
              <label className="font-sans font-medium text-sm text-slate-700">Email Address</label>
              <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-sans text-sm outline-none focus:ring-2 focus:ring-[#1A73E8]/20 focus:border-[#1A73E8] transition-all" />
            </div>
            <div className="space-y-2 relative">
              <label className="font-sans font-medium text-sm text-slate-700">Department</label>
              <ClientSelect 
                placeholder="Select Department" 
                options={["Cardiology", "Neurology", "Oncology", "Orthopedics"]} 
              />
            </div>
          </div>
          
          <div className="space-y-2 relative z-40">
            <label className="font-sans font-medium text-sm text-slate-700">Brief description of ailment</label>
            <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-sans text-sm outline-none focus:ring-2 focus:ring-[#1A73E8]/20 focus:border-[#1A73E8] transition-all resize-none"></textarea>
          </div>
          
          <div className="pt-4 relative z-10">
            <button type="button" className="w-full bg-[#1A73E8] text-white overflow-hidden relative group rounded-xl px-6 py-4 font-sans font-bold text-base transition-transform duration-300 hover:scale-[1.02] shadow-md">
              <span className="absolute inset-0 bg-[#4FB3BF] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"></span>
              <span className="relative z-10">Request Appointment</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
