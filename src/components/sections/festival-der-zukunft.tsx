"use client";

import React from "react";

export default function FestivalDerZukunft() {
  return (
    <section className="bg-white border-t-4 border-black w-full">
      {/* Top label bar */}
      <div className="border-b-4 border-black">
        <div className="p-4 bg-black">
          <span className="font-mono text-[13px] text-[#ffde03] font-black uppercase tracking-widest">
            ETHis × Festival der Zukunft
          </span>
        </div>
      </div>

      {/* Two-column content */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-b-4 border-black">
        {/* Left: text */}
        <div className="p-10 md:p-16 flex flex-col justify-center gap-6 border-r-4 border-black bg-[#f3f4f6]">
          <h2
            className="font-black leading-none tracking-tighter text-black"
            style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
          >
            Part of
            <br />
            <span className="text-black">Festival</span>
            <br />
            der Zukunft
          </h2>
          <p className="text-[15px] font-black text-black max-w-md leading-snug uppercase tracking-tight">
            Festival of the Future is a high profile event connecting leaders and institutions from across technology, culture, science and society.
          </p>
        </div>

        {/* Right: YouTube embed centred */}
        <div className="bg-black flex flex-col items-center justify-center p-8 gap-6">
          <div className="w-full max-w-xl aspect-video border-4 border-black">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/W7aKy87ESFA"
              title="Festival der Zukunft"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="font-mono text-[#ffde03] text-[12px] font-black uppercase tracking-widest">
            Official Festival Film // 2025
          </p>
        </div>
      </div>
    </section>
  );
}
