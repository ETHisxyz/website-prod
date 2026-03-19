"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { TallyFormButton } from '@/components/tally-form-button';
import { speakers, type Speaker } from '@/data/speakers';

function SpeakerCard({ speaker }: { speaker: Speaker }) {
  const inner = (
    <div className="w-[160px] sm:w-[190px] flex-shrink-0 flex flex-col group border-4 border-black bg-white shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_var(--primary)] transition-all h-full">
      <div className="relative w-full aspect-square overflow-hidden border-b-4 border-black bg-muted flex-shrink-0">
        <Image
          src={speaker.image}
          alt={speaker.name}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 160px, 190px"
        />
      </div>
      <div className="p-3 flex flex-col gap-1 flex-grow">
        <p className="font-black text-[12px] sm:text-[13px] leading-tight uppercase tracking-tight">{speaker.name}</p>
        <p className="font-mono text-[10px] font-bold text-black/50 uppercase leading-tight">{speaker.role}</p>
        <p className="font-mono text-[10px] font-bold text-black uppercase leading-tight">{speaker.company}</p>
      </div>
    </div>
  );

  return speaker.linkedin ? (
    <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer" className="flex">{inner}</a>
  ) : (
    <div className="flex">{inner}</div>
  );
}

const row1 = speakers.slice(0, Math.ceil(speakers.length / 2));
const row2 = speakers.slice(Math.ceil(speakers.length / 2));

const Speakers: React.FC = () => {
  return (
    <section id="speakers" className="bg-white border-t-4 border-black overflow-hidden">
      <div className="mx-auto max-w-[1280px] py-16 px-8 md:px-12">
        <div className="flex flex-col mb-8">
          <div className="flex justify-between items-end pt-4">
            <div className="font-mono text-[14px] font-black tracking-[0.1em] text-black uppercase bg-primary px-2 border-2 border-black">
              WORLD CLASS BUILDERS
            </div>
            <div className="flex items-center gap-2 font-mono text-[14px] font-black tracking-[0.1em] text-black uppercase bg-primary/20 px-2 border-2 border-black">
              IN MUNICH <span className="w-3 h-3 bg-black"></span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <h2 className="text-[48px] md:text-[64px] font-black tracking-[-0.03em] text-black uppercase leading-none">
            Speakers
          </h2>
          <TallyFormButton formId="D4VGDN" className="bg-primary text-black px-8 py-4 border-4 border-black font-black uppercase tracking-wider text-[18px] neo-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[0px] active:translate-y-[0px] transition-all flex items-center gap-2 group cursor-pointer">
            Apply to Speak
            <ArrowUpRight className="w-6 h-6 stroke-[3] group-hover:rotate-45 transition-transform" />
          </TallyFormButton>
        </div>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="overflow-x-hidden mb-4" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)' }}>
        <div className="flex items-stretch gap-3 w-max pl-4" style={{ willChange: 'transform', animation: 'marquee 30s linear infinite' }}>
          {[...row1, ...row1].map((speaker, i) => (
            <SpeakerCard key={i} speaker={speaker} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="overflow-x-hidden pb-16" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)' }}>
        <div className="flex items-stretch gap-3 w-max pl-4" style={{ willChange: 'transform', animation: 'marquee 35s linear infinite reverse' }}>
          {[...row2, ...row2].map((speaker, i) => (
            <SpeakerCard key={i} speaker={speaker} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
