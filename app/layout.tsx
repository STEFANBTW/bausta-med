import type {Metadata} from 'next';
import { Inter, Playfair_Display, IBM_Plex_Mono } from 'next/font/google';
import { EmergencyWidget } from '@/components/EmergencyWidget';
import './globals.css'; // Global styles

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif', style: ['normal', 'italic'] });
const mono = IBM_Plex_Mono({ weight: '400', subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'The Bausta, Med centre',
  description: 'Evidence-based care, delivered with clarity.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${mono.variable}`}>
      <body className="font-sans text-slate-900 bg-[#F7FAFC] antialiased relative selection:bg-[#1A73E8] selection:text-white" suppressHydrationWarning>
         <svg className="pointer-events-none fixed inset-0 z-0 opacity-[0.05] h-full w-full" xmlns="http://www.w3.org/2000/svg">
           <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/>
           </filter>
          <rect width="100%" height="100%" filter="url(#noise)"></rect>
         </svg>
        {children}
        <EmergencyWidget />
      </body>
    </html>
  );
}
