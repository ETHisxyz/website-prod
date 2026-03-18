"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const timelineItems = [
  { label: "Zuse Z3", year: "1941", desc: "First programmable computer." },
  { label: "IBM Mainframe", year: "1952", desc: "Enterprise computing arrives." },
  { label: "Cray-1", year: "1976", desc: "Supercomputing era begins." },
  { label: "Apple I", year: "1976", desc: "Personal computing begins." },
  { label: "NeXT Cube", year: "1990", desc: "The machine that birthed the web." },
  { label: "Ethereum", year: "2015", desc: "The World Computer joins history.", highlight: true },
];

export function Mission() {
  const headingRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const inflectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const headingInView = useInView(headingRef, { once: true, amount: 0.3 });
  const missionInView = useInView(missionRef, { once: true, amount: 0.3 });
  const inflectionInView = useInView(inflectionRef, { once: true, amount: 0.3 });
  const timelineInView = useInView(timelineRef, { once: true, amount: 0.2 });

  return (
    <section className="py-24 px-4 bg-white border-b-4 border-black">
      <div className="max-w-[1280px] mx-auto">

        {/* Heading */}
        <div ref={headingRef} className="flex flex-col mb-16">
          <motion.h2
            className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none flex items-center gap-3 flex-wrap"
            initial={{ opacity: 0, y: 40 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            THE
            <svg viewBox="0 0 256 417" className="h-[40px] md:h-[64px] w-auto fill-current text-black" xmlns="http://www.w3.org/2000/svg">
              <path d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z" />
              <path d="M127.962 0L0 212.32l127.962 75.638V154.158z" fillOpacity="0.7" />
              <path d="M127.961 312.187l-1.575 1.92V417l1.575-4.628L256 236.587z" />
              <path d="M127.962 417V312.187L0 236.587z" fillOpacity="0.7" />
              <path d="M127.961 287.958l127.96-75.637-127.96-58.162z" fillOpacity="0.5" />
              <path d="M0 212.32l127.962 75.638V154.158z" fillOpacity="0.5" />
            </svg>
            <span className="text-primary font-display normal-case">ETHis</span>
          </motion.h2>
          <motion.h2
            className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none"
            initial={{ opacity: 0, y: 40 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            MISSION
          </motion.h2>
        </div>

        {/* Mission statement */}
        <div ref={missionRef} className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-3xl md:text-4xl font-black leading-tight uppercase tracking-tight text-black">
              Ethereum is the World Computer.
            </p>
          </motion.div>
          <motion.div
            className="border-l-4 border-primary pl-8"
            initial={{ opacity: 0, y: 30 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-lg md:text-xl font-bold leading-relaxed text-black/70">
              ETHis accelerates the role of the world computer in the Physical World; facilitating the adoption of Ethereum-based Trustware into real-world systems.
            </p>
          </motion.div>
        </div>

        {/* Historical Inflection */}
        <div className="border-t-4 border-black pt-16">
          <div ref={inflectionRef} className="mb-12">
            <motion.span
              className="font-mono text-[11px] font-black uppercase tracking-widest bg-black text-primary px-2 py-1 inline-block mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={inflectionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              A HISTORICAL INFLECTION
            </motion.span>
            <motion.p
              className="text-lg md:text-xl font-bold max-w-2xl leading-snug text-black/70"
              initial={{ opacity: 0, y: 20 }}
              animate={inflectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              Our inaugural ETHis Summit event marks the arrival of the World Computer as a permanent exhibit at the Deutsches Museum, the world's largest science and technology archive.
            </motion.p>
          </div>

          {/* Timeline */}
          <div ref={timelineRef} className="relative">
            <div className="relative">
              {/* Track base */}
              <div className="absolute top-[14px] left-0 right-0 h-[3px] bg-black/10" />
              {/* Animated fill */}
              <motion.div
                className="absolute top-[14px] left-0 h-[3px] bg-primary origin-left"
                initial={{ scaleX: 0 }}
                animate={timelineInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 3.2, ease: [0.22, 1, 0.36, 1] }}
              />

              {/* Items */}
              <div className="flex gap-0">
                {timelineItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="flex flex-col items-start flex-1 pr-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className={`w-[28px] h-[28px] border-4 border-black flex-shrink-0 mb-4 ${item.highlight ? "bg-primary" : "bg-white"}`} />
                    <span className={`font-mono text-[10px] font-black uppercase tracking-widest mb-1.5 ${item.highlight ? "bg-black text-primary px-1.5 py-0.5" : "text-black/35"}`}>
                      {item.year}
                    </span>
                    <span className={`font-black text-[12px] uppercase tracking-tight leading-tight mb-1.5 ${item.highlight ? "text-black" : "text-black/60"}`}>
                      {item.label}
                    </span>
                    <span className={`text-[11px] font-bold leading-snug ${item.highlight ? "text-black/70" : "text-black/35"}`}>
                      {item.desc}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom note */}
          <motion.p
            className="mt-10 text-sm font-black uppercase tracking-tight text-black/40 border-t-2 border-black/10 pt-6"
            initial={{ opacity: 0 }}
            animate={timelineInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + timelineItems.length * 0.45, ease: "easeOut" }}
          >
            Ethereum now takes its place in history alongside the Cray Supercomputer, the IBM Mainframe, and the Apple I.
          </motion.p>
        </div>

      </div>
    </section>
  );
}
