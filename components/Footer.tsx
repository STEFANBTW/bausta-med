import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full bg-[#0F172A] rounded-t-[4rem] px-6 md:px-16 pt-12 pb-8 z-30 relative mt-[-2rem]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
        
        <div className="md:col-span-2">
          <div className="font-sans font-bold text-2xl text-white tracking-tight mb-4">The Bausta Med Center</div>
          <p className="font-sans text-slate-400 max-w-sm leading-relaxed">Evidence-based care, delivered with clarity. Reimagining the clinical experience through precision and human-centric design.</p>
        </div>

        <div>
          <h4 className="font-sans font-semibold text-white mb-6">Navigation</h4>
          <ul className="space-y-3 font-sans text-slate-400 text-sm">
            <li><Link href="/departments" className="hover:text-[#4FB3BF] transition-colors">Departments</Link></li>
            <li><Link href="/patients" className="hover:text-[#4FB3BF] transition-colors">Patients</Link></li>
            <li><Link href="/research" className="hover:text-[#4FB3BF] transition-colors">Research</Link></li>
            <li><Link href="/careers" className="hover:text-[#4FB3BF] transition-colors">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-sans font-semibold text-white mb-6">Legal</h4>
          <ul className="space-y-3 font-sans text-slate-400 text-sm">
            <li><a href="#" className="hover:text-[#4FB3BF] transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#4FB3BF] transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-[#4FB3BF] transition-colors">Compliance</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-sans text-slate-500">
        <div>&copy; {new Date().getFullYear()} The Bausta Med Center. All rights reserved.</div>
        <div className="mt-4 md:mt-0 font-mono tracking-widest uppercase">System Operational</div>
      </div>
    </footer>
  );
}
