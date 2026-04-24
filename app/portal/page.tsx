'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { 
  Activity, 
  Calendar, 
  FileText, 
  MessageSquare, 
  CreditCard, 
  Bell,
  Search,
  ArrowUpRight,
  Download,
  Clock,
  User as UserIcon
} from 'lucide-react';
import { motion } from 'motion/react';

export default function PatientPortal() {
  return (
    <main className="relative w-full min-h-screen bg-[#F0F4F8] flex flex-col">
      <Navbar theme="light" />
      
      <div className="flex-grow pt-24 pb-12 px-6 md:px-10 lg:px-16 container mx-auto">
        {/* Header Section */}
        <section className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="font-sans font-bold text-3xl text-slate-900 tracking-tight">Patient Portal</h1>
            <p className="font-sans text-slate-500 mt-1">Welcome back, Mr. Bausta. Here is your clinical summary.</p>
          </div>
          <div className="flex items-center gap-3 bg-white p-1.5 rounded-full shadow-sm border border-slate-100">
            <button className="p-2 rounded-full hover:bg-slate-50 relative">
              <Bell className="w-5 h-5 text-slate-500" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="w-px h-6 bg-slate-100 mx-1"></div>
            <div className="flex items-center gap-3 pl-2 pr-4">
              <div className="w-8 h-8 rounded-full bg-[#1A73E8]/10 flex items-center justify-center text-[#1A73E8]">
                <UserIcon className="w-4 h-4" />
              </div>
              <span className="font-sans font-semibold text-sm text-slate-700">James Bausta</span>
            </div>
          </div>
        </section>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Health Snapshot & Appointments */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Vitals Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'Heart Rate', value: '72', unit: 'bpm', icon: Activity, color: 'text-rose-500', bg: 'bg-rose-50' },
                { label: 'BP', value: '118/76', unit: 'mmHg', icon: Activity, color: 'text-blue-500', bg: 'bg-blue-50' },
                { label: 'Weight', value: '184', unit: 'lbs', icon: Activity, color: 'text-emerald-500', bg: 'bg-emerald-50' }
              ].map((vital, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-6 rounded-[2rem] border border-white shadow-sm"
                >
                  <div className={`p-2 w-fit rounded-xl ${vital.bg} ${vital.color} mb-4`}>
                    <vital.icon className="w-5 h-5" />
                  </div>
                  <div className="font-sans text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">{vital.label}</div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-sans font-bold text-2xl text-slate-900">{vital.value}</span>
                    <span className="font-sans text-slate-400 text-xs">{vital.unit}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Upcoming Appointments */}
            <div className="bg-white rounded-[2.5rem] border border-white shadow-sm overflow-hidden">
              <div className="p-8 border-b border-slate-50 flex justify-between items-center">
                <h3 className="font-sans font-bold text-lg text-slate-900">Upcoming Appointments</h3>
                <Link href="/book" className="text-xs font-sans font-semibold text-[#1A73E8] hover:underline">Schedule New</Link>
              </div>
              <div className="p-2 space-y-2">
                {[
                  { dr: 'Dr. Sarah Miller', dept: 'Cardiology', date: 'Oct 12, 2023', time: '10:30 AM', status: 'Confirmed' },
                  { dr: 'Dr. Aris Thorne', dept: 'Neurology', date: 'Oct 24, 2023', time: '02:00 PM', status: 'Pending' }
                ].map((apt, i) => (
                  <div key={i} className="flex items-center justify-between p-6 rounded-[2rem] hover:bg-slate-50 transition-colors group">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400">
                        <Calendar className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-sans font-bold text-slate-900">{apt.dr}</div>
                        <div className="font-sans text-xs text-slate-500">{apt.dept}</div>
                      </div>
                    </div>
                    <div className="text-right flex items-center gap-8">
                      <div className="hidden md:block">
                        <div className="font-sans font-semibold text-sm text-slate-700">{apt.date}</div>
                        <div className="font-sans text-xs text-slate-400">{apt.time}</div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest ${apt.status === 'Confirmed' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                        {apt.status}
                      </div>
                      <button className="p-2 rounded-full hover:bg-slate-200 text-slate-400 opacity-0 group-hover:opacity-100 transition-all">
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Medical Records */}
            <div className="bg-white rounded-[2.5rem] border border-white shadow-sm overflow-hidden">
              <div className="p-8 border-b border-slate-50">
                <h3 className="font-sans font-bold text-lg text-slate-900">Recent Records</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left font-sans">
                  <thead>
                    <tr className="border-b border-slate-50 text-slate-400 text-xs font-semibold uppercase tracking-wider">
                      <th className="px-8 py-4">Document Name</th>
                      <th className="px-8 py-4">Date</th>
                      <th className="px-8 py-4">Category</th>
                      <th className="px-8 py-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {[
                      { name: 'Lipid Panel Results', date: 'Sep 28, 2023', cat: 'Lab Report' },
                      { name: 'Chest X-Ray Imaging', date: 'Sep 15, 2023', cat: 'Radiology' },
                      { name: 'Post-Op Instructions', date: 'Aug 10, 2023', cat: 'Clinical Notes' }
                    ].map((record, i) => (
                      <tr key={i} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                        <td className="px-8 py-5 flex items-center gap-3">
                          <FileText className="w-4 h-4 text-slate-400" />
                          <span className="font-semibold text-slate-700">{record.name}</span>
                        </td>
                        <td className="px-8 py-5 text-slate-500">{record.date}</td>
                        <td className="px-8 py-5">
                          <span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">{record.cat}</span>
                        </td>
                        <td className="px-8 py-5 text-right">
                          <button className="text-[#1A73E8] hover:bg-blue-50 p-2 rounded-full transition-colors">
                            <Download className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-6 text-center">
                 <button className="text-xs font-sans font-semibold text-slate-400 hover:text-[#1A73E8] transition-colors">View All Documents</button>
              </div>
            </div>
          </div>

          {/* Right Column: Actions & Communication */}
          <div className="space-y-8">
            
            {/* Quick Actions */}
            <div className="bg-white rounded-[2.5rem] border border-white shadow-sm p-8">
              <h3 className="font-sans font-bold text-lg text-slate-900 mb-6">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Pay Bill', icon: CreditCard, color: 'text-indigo-600', bg: 'bg-indigo-50' },
                  { label: 'Refill Rx', icon: Clock, color: 'text-purple-600', bg: 'bg-purple-50' },
                  { label: 'Messages', icon: MessageSquare, color: 'text-[#4FB3BF]', bg: 'bg-cyan-50' },
                  { label: 'Find Care', icon: Search, color: 'text-blue-600', bg: 'bg-blue-50' }
                ].map((action, i) => (
                  <button key={i} className="flex flex-col items-center justify-center p-6 rounded-3xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-md transition-all group">
                    <div className={`p-3 rounded-2xl ${action.bg} ${action.color} mb-3 transition-transform group-hover:scale-110`}>
                      <action.icon className="w-6 h-6" />
                    </div>
                    <span className="font-sans font-bold text-slate-700 text-xs tracking-tight">{action.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Care Team Messaging */}
            <div className="bg-[#0F172A] rounded-[2.5rem] p-8 text-white shadow-xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white/10 rounded-2xl">
                  <MessageSquare className="w-6 h-6 text-[#4FB3BF]" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-lg">Clinical Direct</h3>
                  <p className="text-white/50 text-xs">Reach your specialist team</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                   <div className="flex justify-between items-center mb-2">
                     <span className="text-[10px] font-mono text-[#4FB3BF] uppercase tracking-widest">Active Chat</span>
                     <span className="text-[10px] text-white/40">2h ago</span>
                   </div>
                   <p className="text-xs text-white/80 line-clamp-2">The results of your cardiology panel have been finalized. Please review them...</p>
                </div>
              </div>

              <button className="w-full bg-[#1A73E8] hover:bg-[#1A73E8]/90 text-white rounded-full py-4 px-6 font-sans font-bold text-sm tracking-tight transition-all duration-300">
                Start New Message
              </button>
            </div>

            {/* Health Tips / Feed */}
            <div className="bg-emerald-600 rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden">
               <div className="relative z-10">
                 <h3 className="font-sans font-bold text-lg mb-2">Center Insight</h3>
                 <p className="text-white/80 text-sm leading-relaxed mb-6">Hydration protocols have been updated for your current neuro-regeneration plan.</p>
                 <button className="bg-white text-emerald-600 rounded-full px-5 py-2 text-xs font-bold font-sans">Learn More</button>
               </div>
               <Activity className="absolute -right-8 -bottom-8 w-40 h-40 text-emerald-500 opacity-20 rotate-12" />
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
