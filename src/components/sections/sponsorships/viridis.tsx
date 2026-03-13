"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const features = [
  {
    label: "PRODUCTION & FABRICATION",
    body: "A living lab for hardtech innovation. Providing the physical tools to prototype and deploy Ethereum-based systems into hardware.",
    delay: 0.35,
  },
  {
    label: "A MUNICH NODE",
    body: "A hub for local builders to converge and innovate. A space to facilitate direct collaboration between technical talent and local industry.",
    delay: 0.55,
  },
];

export function Viridis() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 px-4 bg-black text-white border-b-4 border-black">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 border-4 border-white/10">

        {/* Left — intro */}
        <motion.div
          className="p-10 md:p-14 border-b-4 lg:border-b-0 lg:border-r-4 border-white/10 flex flex-col justify-between gap-10"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <span className="font-mono text-[11px] font-black uppercase tracking-widest bg-primary text-black px-2 py-1 inline-block mb-8">
              MEMBER SPOTLIGHT
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight">
              ETH<span className="text-primary">is</span> members{" "}
              <span className="text-primary">VIRIDIS</span>{" "}
              are establishing an Innovation Park in Munich.
            </h2>
          </div>

        </motion.div>

        {/* Right — feature blocks */}
        <div className="flex flex-col">
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              className={`p-10 md:p-12 flex flex-col gap-4 ${i === 0 ? "border-b-4 border-white/10" : ""}`}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: f.delay, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="font-mono text-[11px] font-black uppercase tracking-widest text-primary">
                {f.label}
              </span>
              <p className="text-base md:text-lg font-bold leading-relaxed text-white/70">
                {f.body}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
