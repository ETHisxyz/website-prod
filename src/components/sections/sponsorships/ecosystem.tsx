"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const segments = [
  {
    num: "01",
    label: "THE BUILDERS",
    description: "Global protocol architects and local technical talent from Munich's engineering universities (TUM/CDTM).",
    delay: 0.1,
  },
  {
    num: "02",
    label: "THE MAKERS",
    description: "Hardware engineers and fabrication experts bridging atoms and bits.",
    delay: 0.25,
  },
  {
    num: "03",
    label: "THE INDUSTRY",
    description: 'The "Hidden Champions" of the German Mittelstand, global manufacturers, and industrial players integrating Ethereum into hardware and production lines.',
    delay: 0.4,
  },
  {
    num: "04",
    label: "THE INSTITUTIONS",
    description: "Asset managers tokenizing RWAs and local government agencies piloting resilient municipal infrastructure.",
    delay: 0.55,
  },
];

export function Ecosystem() {
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef    = useRef<HTMLDivElement>(null);

  const headingInView = useInView(headingRef, { once: true, amount: 0.4 });
  const gridInView    = useInView(gridRef,    { once: true, amount: 0.15 });

  return (
    <section className="py-24 px-4 bg-white border-b-4 border-black">
      <div className="max-w-[1280px] mx-auto">

        {/* Heading */}
        <div ref={headingRef} className="mb-16">
          <div className="overflow-hidden mb-1">
            <motion.h2
              className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none"
              initial={{ y: 80, opacity: 0 }}
              animate={headingInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              Our <span className="bg-primary px-2">Ecosystem.</span>
            </motion.h2>
          </div>
          <div className="overflow-hidden mb-6">
            <motion.h2
              className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-black/20"
              initial={{ y: 80, opacity: 0 }}
              animate={headingInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              Our Ecosystem.
            </motion.h2>
          </div>
          <motion.p
            className="text-xl md:text-2xl font-bold uppercase tracking-tight text-black/60"
            initial={{ opacity: 0, y: 16 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            Bridging the gap between bits and atoms.
          </motion.p>
        </div>

        {/* 2×2 grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t-4 border-l-4 border-black">
          {segments.map((seg) => (
            <motion.div
              key={seg.label}
              className="border-r-4 border-b-4 border-black bg-white p-8 md:p-10 flex flex-col gap-6 group hover:bg-primary transition-colors duration-200"
              initial={{ opacity: 0, y: 32 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: seg.delay, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[11px] font-black uppercase tracking-widest bg-black text-white px-2 py-1 group-hover:bg-white group-hover:text-black transition-colors duration-200">
                  {seg.label}
                </span>
                <span className="text-6xl font-black text-black/8 leading-none select-none">
                  {seg.num}
                </span>
              </div>
              <p className="text-base md:text-lg font-bold leading-snug text-black/70 group-hover:text-black transition-colors duration-200">
                {seg.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
