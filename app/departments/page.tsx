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

const DEPARTMENTS = [
  { 
    id: "cardio",
    title: "Cardiology", 
    desc: "Advanced heart failure treatments, non-invasive imaging, and total cardiac wellness.", 
    img: "https://images.unsplash.com/photo-1551076805-e1869043e560?q=80&w=2000&auto=format&fit=crop"
  },
  { 
    id: "neuro",
    title: "Neurology", 
    desc: "Mapping the mind: treating degenerative conditions, trauma, and comprehensive stroke recovery.", 
    img: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2000&auto=format&fit=crop"
  },
  { 
    id: "onco",
    title: "Oncology", 
    desc: "Targeted cellular therapies and personalized immunotherapy for precise cancer eradication.", 
    img: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2000&auto=format&fit=crop"
  },
  { 
    id: "ortho",
    title: "Orthopedics", 
    desc: "Restoring mobility. From micro-robotic joint replacement to sports medicine trauma recovery.", 
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop"
  }
];

export default function DepartmentsPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero Entrance
    gsap.fromTo('.hero-anim',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
    );

    // Parallax & Fade for department sections
    const sections = gsap.utils.toArray('.dept-section');
    sections.forEach((sec: any) => {
      const img = sec.querySelector('.dept-img');
      const text = sec.querySelector('.dept-text');
      
      gsap.fromTo(img, 
        { y: -50, scale: 1.1 },
        { 
          y: 50, scale: 1, ease: 'none',
          scrollTrigger: {
            trigger: sec,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        }
      );

      gsap.fromTo(text,
        { opacity: 0, x: sec.classList.contains('reverse') ? 50 : -50 },
        { 
          opacity: 1, x: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: {
            trigger: sec,
            start: 'top 70%',
          }
        }
      );
    });

  }, { scope: pageRef });

  return (
    <main ref={pageRef} className="relative w-full overflow-x-hidden bg-[#0F172A] min-h-screen">
      <Navbar theme="dark" />
      
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center pt-24 overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" 
          alt="Clinical Hospital" 
          fill 
          className="object-cover"
          unoptimized 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/50 via-[#0F172A]/40 to-[#0F172A]/20"></div>
        <div className="relative z-10 max-w-4xl px-6 text-center space-y-6">
          <div className="hero-anim font-mono text-[#4FB3BF] tracking-widest text-sm font-semibold uppercase">Centers of Excellence</div>
          <h1 className="hero-anim font-sans font-bold text-5xl md:text-7xl text-white tracking-tight leading-tight">
            Specialized Care, <br/><span className="text-[#1A73E8]">Uncompromising Standards.</span>
          </h1>
          <p className="hero-anim font-sans text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
            Our departments are led by world-class clinicians wielding the latest in medical technology. Explore our core disciplines below.
          </p>
        </div>
      </section>

      {/* Cinematic Departments List */}
      <section className="relative bg-[#0F172A] pb-32">
        {DEPARTMENTS.map((dept, idx) => {
          const isReverse = idx % 2 !== 0;
          return (
            <div key={dept.id} className={`dept-section ${isReverse ? 'reverse' : ''} w-full min-h-[80vh] flex flex-col ${isReverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center overflow-hidden`}>
               {/* Image Half */}
               <div className="w-full md:w-1/2 h-[50vh] md:h-[100vh] relative overflow-hidden">
                 <Image 
                   src={dept.img} 
                   alt={dept.title} 
                   fill 
                   className="dept-img object-cover opacity-80"
                   unoptimized 
                 />
                 <div className="absolute inset-0 bg-[#0F172A]/20"></div>
                 {/* Inner Gradient for blending */}
                 <div className={`absolute inset-0 bg-gradient-to-${isReverse ? 'l' : 'r'} from-[#0F172A] to-transparent w-[10%] ${isReverse ? 'left-0' : 'right-0'}`}></div>
               </div>
               
               {/* Text Half */}
               <div className="w-full md:w-1/2 h-full flex items-center justify-center p-10 md:p-24 bg-[#0F172A]">
                 <div className="dept-text max-w-lg space-y-6">
                    <div className="font-mono text-[#4FB3BF] tracking-widest text-sm font-semibold">0{idx + 1} {'//'} DEPARTMENT</div>
                    <h2 className="font-sans font-bold text-4xl md:text-6xl text-white tracking-tight">{dept.title}</h2>
                    <p className="font-sans text-slate-400 text-lg md:text-xl leading-relaxed">
                      {dept.desc}
                    </p>
                    <div className="pt-8">
                       <button className="bg-[#1A73E8] text-white overflow-hidden relative group rounded-full px-8 py-3 font-sans font-medium text-sm transition-transform duration-300 hover:scale-[1.03]">
                         <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"></span>
                         <span className="relative z-10 group-hover:text-[#1A73E8] transition-colors duration-300">Consult Specialist</span>
                       </button>
                    </div>
                 </div>
               </div>
            </div>
          );
        })}
      </section>

      <Footer />
    </main>
  );
}
