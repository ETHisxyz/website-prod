"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const HeroSection = () => {
    return (
      <section id="hero" className="bg-white relative overflow-hidden">
        {/* Background Dots */}
        <div className="absolute inset-0 bg-dots pointer-events-none opacity-50" />
    
          {/* Eyebrow Section */}
        <div className="bg-primary border-b-4 border-black relative z-10">
          <div className="max-w-[1280px] mx-auto">
            <div className="py-4 px-8 flex items-center gap-3">
                <span className="font-mono text-[11px] md:text-[13px] tracking-[0.15em] text-black font-bold uppercase">
                    IN-PERSON & VIRTUAL  |  2-3 JULY 2026  |  MUNICH
                </span>
              <span className="w-3 h-3 bg-black inline-block animate-pulse"></span>
            </div>
          </div>
        </div>
  
        {/* Huge Logo Section */}
        <div className="py-12 md:py-24 bg-transparent relative overflow-hidden group z-10">
          <div className="max-w-[1280px] mx-auto">
            <div className="px-8 flex flex-col md:flex-row-reverse md:items-center justify-between gap-8">
              <div className="flex flex-col items-end text-right">
                <a href="/" className="inline-block group/logo transition-transform duration-300 hover:-translate-x-2 hover:-translate-y-2">
                  <div className="flex items-center gap-4 md:gap-8 justify-end">
                    <h1 className="font-display text-[64px] sm:text-[80px] md:text-[150px] lg:text-[220px] font-black leading-[0.8] tracking-tighter text-black antialiased normal-case text-right">
                      ETHis
                    </h1>
                  </div>
                </a>
                <div className="flex flex-wrap items-center justify-end gap-4 mt-8 text-right">
                  <p className="text-[20px] md:text-[32px] lg:text-[44px] font-black text-black uppercase leading-none">
                    The Real World 
                  </p>
                  <span className="inline-block bg-white border-4 border-black px-4 py-2 text-[20px] md:text-[32px] lg:text-[44px] font-black uppercase shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-1">
                    Ethereum
                  </span>
                  <p className="text-[20px] md:text-[32px] lg:text-[44px] font-black text-black uppercase leading-none">
                    Summit.
                  </p>
                </div>
              </div>
            
              {/* Floating Ethereum Logo */}
              <div className="relative w-56 h-56 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] animate-float-3d hidden md:block transition-all duration-500 hover:scale-105 cursor-help" style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}>
                  <svg viewBox="0 0 256 417" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                  <defs>
                    <linearGradient id="grad-pink" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FF8C8C" />
                      <stop offset="50%" stopColor="#FFB0B0" />
                      <stop offset="100%" stopColor="#FF8C8C" />
                    </linearGradient>
                    <linearGradient id="grad-yellow" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFDE03" />
                      <stop offset="50%" stopColor="#FFF2A0" />
                      <stop offset="100%" stopColor="#FFDE03" />
                    </linearGradient>
                    <linearGradient id="grad-purple" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#E0B0FF" />
                      <stop offset="50%" stopColor="#F5E6FF" />
                      <stop offset="100%" stopColor="#E0B0FF" />
                    </linearGradient>
                    <linearGradient id="grad-green" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#90EE90" />
                      <stop offset="50%" stopColor="#C1FFC1" />
                      <stop offset="100%" stopColor="#90EE90" />
                    </linearGradient>
                    <linearGradient id="grad-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6495ED" />
                      <stop offset="50%" stopColor="#A0C1FF" />
                      <stop offset="100%" stopColor="#6495ED" />
                    </linearGradient>
                    <linearGradient id="grad-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#40E0D0" />
                      <stop offset="50%" stopColor="#A0FFF6" />
                      <stop offset="100%" stopColor="#40E0D0" />
                    </linearGradient>
                  </defs>
                  {/* Top Facets */}
                  <path d="M127.961 0L255.923 189.1L127.961 288.4V0Z" fill="url(#grad-pink)" className="opacity-90"/> {/* Pink Right */}
                  <path d="M127.961 0L0 189.1L127.961 288.4V0Z" fill="url(#grad-yellow)" className="opacity-90"/> {/* Yellow Left */}
                  <path d="M127.961 0L255.923 189.1L127.961 150V0Z" fill="url(#grad-purple)" className="opacity-70"/> {/* Purple Tint */}
                  <path d="M127.961 0L0 189.1L127.961 150V0Z" fill="url(#grad-green)" className="opacity-70"/> {/* Green Tint */}
  
                  {/* Bottom Facets */}
                  <path d="M127.961 416.3L255.923 213.5L127.961 312.6V416.3Z" fill="url(#grad-blue)" className="opacity-90"/> {/* Blue Right */}
                  <path d="M127.961 416.3L0 213.5L127.961 312.6V416.3Z" fill="url(#grad-cyan)" className="opacity-90"/> {/* Cyan Left */}
  
                  {/* Shine Overlays */}
                  <path d="M127.961 20L230 189.1L127.961 250V20Z" fill="white" className="opacity-20 mix-blend-overlay"/>
                  <path d="M127.961 390L230 213.5L127.961 280V390Z" fill="white" className="opacity-10 mix-blend-overlay"/>
  
                  {/* Wireframe Overlay */}
                  <path d="M127.961 0L255.923 189.1L127.961 288.4L0 189.1L127.961 0Z" stroke="black" strokeWidth="8" strokeLinejoin="round"/>
                  <path d="M127.961 416.3L255.923 213.5L127.961 312.6L0 213.5L127.961 416.3Z" stroke="black" strokeWidth="8" strokeLinejoin="round"/>
                  
                  {/* Center Dividing Lines */}
                  <path d="M0 189.1L127.961 288.4L255.923 189.1" stroke="black" strokeWidth="6" strokeLinejoin="round"/>
                  <path d="M0 213.5L127.961 312.6L255.923 213.5" stroke="black" strokeWidth="6" strokeLinejoin="round"/>
                  <path d="M127.961 0V416.3" stroke="black" strokeWidth="6" strokeLinejoin="round" className="opacity-100"/>
                </svg>
        </div>
        </div>
      </div>
    </div>

      {/* Yellow Ticker Bar */}
      <div className="bg-primary border-t-4 border-black overflow-hidden py-3 relative z-10">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4">
              {[
                "RWAs", "STABLECOINS", "d/acc", "BUILT ENVIRONMENT", "VERIFIED CITIES", 
                "DID", "COSMO-LOCALISM", "INSTITUTIONAL DEFI", "ZERO-KNOWLEDGE PROOFS", 
                "COORDINATION", "DAOs", "DePIN", "PHYSICAL RESILIENCE"
              ].map((item, index) => (
                <React.Fragment key={index}>
                  <span className="text-[18px] md:text-[22px] font-black text-black tracking-tighter uppercase">
                    {item}
                  </span>
                  <span className="text-[18px] md:text-[22px] font-black text-black/30">//</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Simplified Content Area */}
      <div className="relative border-t-4 border-black overflow-hidden bg-white z-10">
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Description Column */}
              <div className="p-10 md:p-16 lg:p-20 flex flex-col justify-center">
                      <p className="text-[24px] md:text-[32px] lg:text-[42px] text-black font-black leading-[1.1] tracking-tighter uppercase">
                        Join the first summit dedicated to Ethereum in the physical world.<br /><br />
                          Where digital protocol meets real economy.
                      </p>
              </div>
              
        {/* Primary Action Button Area */}
              <div className="p-10 md:p-16 lg:p-20 bg-primary flex flex-col justify-center border-t-4 md:border-t-0 md:border-l-4 border-black">
                  <a 
                    href="#"
                    className="btn-neo w-full h-[84px] text-[18px] md:text-[20px] tracking-widest flex items-center justify-between px-6 md:px-10 bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all"
                  >
                  <span className="font-black">REGISTER NOW</span>
                  <ArrowUpRight className="w-8 h-8 stroke-[4]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Visual Area */}
        <div className="h-[300px] md:h-[500px] relative border-t-4 border-black bg-muted overflow-hidden z-10">
          <div className="w-full h-full relative">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/68ea0bb2-589b-4a71-9c75-5bebfc51b135/image-1771288181733.png"
              alt="Munich Cityscape"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute bottom-8 left-8 bg-white border-4 border-black p-4 neo-shadow">
              <p className="font-mono text-xs font-bold uppercase tracking-widest">Live from Munich // 2026</p>
            </div>
          </div>
        </div>

      </section>
    );
};

export default HeroSection;
