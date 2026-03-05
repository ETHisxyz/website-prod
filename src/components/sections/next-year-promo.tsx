"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function NextYearPromo() {
  return (
    <section className="bg-white">
      <div className="max-w-[1280px] mx-auto p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-black border-4 border-black neo-shadow overflow-hidden group">
          {/* Text Content */}
            <div className="p-10 md:p-16 flex flex-col justify-center">
                  <h2 className="text-[48px] md:text-[64px] font-black leading-none mb-8 text-white tracking-tighter transition-transform group-hover:scale-105 normal-case">
                    ETHis <br />
                    <span className="text-primary drop-shadow-[4px_4px_0px_#FF8C8C]">2026</span>
                  </h2>


              <div className="flex flex-col gap-6">
                <p className="text-[20px] md:text-[24px] font-bold text-white uppercase leading-tight max-w-sm">
                  Mark your calendars. Munich is calling.
                </p>
                <div className="h-[4px] w-full bg-accent"></div>
                <p className="text-[14px] md:text-[16px] font-mono font-black text-primary uppercase tracking-widest">
                    2-3 July 2026 // Munich, Germany
                </p>
              </div>
          </div>

          {/* Image Content */}
            <div className="relative min-h-[400px] border-t-4 md:border-t-0 md:border-l-4 border-black overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1595867818082-083862f3d630?q=80&w=2000&auto=format&fit=crop"
                alt="Munich"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
              />
            <div className="absolute inset-0 bg-secondary/20 mix-blend-multiply"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-white border-4 border-black neo-shadow -rotate-6">
               <span className="text-black font-black text-2xl uppercase">Save the date</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
