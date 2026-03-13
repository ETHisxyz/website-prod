"use client";

import React, { useEffect, useRef, useState } from 'react';

const DURATION = 1200;
const INTERVAL = 16;

function useCountUp(target: number, active: boolean, delay: number) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const timeout = setTimeout(() => {
      const steps = DURATION / INTERVAL;
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(parseFloat((eased * target).toFixed(1)));
        if (step >= steps) {
          setValue(target);
          clearInterval(timer);
        }
      }, INTERVAL);
      return () => clearInterval(timer);
    }, delay);
    return () => clearTimeout(timeout);
  }, [active, target, delay]);

  return value;
}

function Bar({ segment, index, animated }: { segment: { label: string; percentage: number; description: string; color: string }; index: number; animated: boolean }) {
  const count = useCountUp(segment.percentage, animated, index * 150);

  return (
    <div>
      <div className="flex justify-between items-end mb-2">
        <span className="text-xl font-black uppercase tracking-tight leading-none">{segment.label}</span>
        <span className="text-4xl font-black text-primary leading-none">{count.toFixed(1)}%</span>
      </div>
      <div className="h-4 border-2 border-white bg-white/10 overflow-hidden">
        <div
          className={`h-full ${segment.color} transition-all ease-out`}
          style={{
            width: animated ? `${segment.percentage}%` : '0%',
            transitionDuration: '1200ms',
            transitionDelay: `${index * 150}ms`,
          }}
        />
      </div>
      <p className="mt-2 text-sm font-bold uppercase opacity-60">
        {segment.description}
      </p>
    </div>
  );
}

export function Audience() {
  const segments = [
    { label: "Enterprise and Corporate", percentage: 62.6, description: "Decision-makers from global industrial groups and asset managers.", color: "bg-primary" },
    { label: "Startups & VC", percentage: 8.7, description: "Early-stage founders and capital allocators in deep tech and AI.", color: "bg-white" },
    { label: "Research & Academia", percentage: 6.6, description: "Technical talent and researchers from TUM, Fraunhofer, and MPG.", color: "bg-white" },
    { label: "Retail & Private", percentage: 20.0, description: "Individual participants and ecosystem observers.", color: "bg-white" },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !animated) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [animated]);

  return (
    <section className="py-24 px-4 bg-black text-white border-b-4 border-black">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-none">
            THE <span className="text-primary">FESTIVAL OF THE FUTURE</span> AUDIENCE.
          </h2>
          <p className="text-2xl font-bold uppercase tracking-tight">
            Running since 2019, the festival attracts nearly 3000 participants each year.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16" ref={sectionRef}>
          <div className="space-y-6">
            {segments.map((segment, index) => (
              <Bar key={index} segment={segment} index={index} animated={animated} />
            ))}
          </div>

          <div className="flex flex-col justify-center">
            <div className="p-12 border-4 border-primary bg-primary text-black neo-shadow-white">
              <p className="text-3xl font-black uppercase leading-tight mb-6">
                ETHis breaks out of the crypto bubble and into the real world.
              </p>
              <p className="text-xl font-bold uppercase">
                Sponsors gain direct access to a high-density environment of professional allocators and protocol builders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
