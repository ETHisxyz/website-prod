import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/sections/navbar';
import Footer from '@/components/sections/footer';
import { speakers, type Speaker } from '@/data/speakers';
import { ArrowUpRight } from 'lucide-react';
import { TallyFormButton } from '@/components/tally-form-button';

export const metadata = {
  title: 'Speakers | ETHis Summit',
  description: 'Meet the world-class builders speaking at ETHis Summit, Munich, July 2–3 2026.',
};

export default function SpeakersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero header */}
        <div className="bg-primary border-b-4 border-black">
          <div className="max-w-[1280px] mx-auto px-8 md:px-12 py-16 md:py-24">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
              <div>
                <p className="font-mono text-[13px] font-black uppercase tracking-widest bg-black text-primary px-2 border-2 border-black inline-block mb-6">
                  ETHis Summit · Munich · July 2–3 2026
                </p>
                <h1 className="text-[64px] md:text-[96px] lg:text-[120px] font-black uppercase tracking-tighter leading-none text-black">
                  Speakers
                </h1>
              </div>
              <TallyFormButton
                formId="D4VGDN"
                className="bg-black text-primary px-8 py-4 border-4 border-black font-black uppercase tracking-wider text-[18px] neo-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all flex items-center gap-2 group cursor-pointer flex-shrink-0"
              >
                Apply to Speak
                <ArrowUpRight className="w-6 h-6 stroke-[3] group-hover:rotate-45 transition-transform" />
              </TallyFormButton>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="border-b-4 border-black bg-black">
          <div className="max-w-[1280px] mx-auto px-8 md:px-12 py-4 flex items-center gap-8">
            <span className="font-mono text-[13px] font-black uppercase tracking-widest text-primary">
              {speakers.length} Confirmed Speakers
            </span>
            <span className="font-mono text-[13px] font-black uppercase tracking-widest text-white/40">
              · More Announced Soon
            </span>
          </div>
        </div>

        {/* Speaker grid */}
        <div className="max-w-[1280px] mx-auto px-8 md:px-12 py-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-0 border-t-4 border-l-4 border-black">
            {speakers.map((speaker, index) => (
              <div key={index} className="border-r-4 border-b-4 border-black bg-white group">
                {speaker.linkedin ? (
                  <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer" className="flex flex-col">
                    <SpeakerCardInner speaker={speaker} />
                  </a>
                ) : (
                  <div className="flex flex-col">
                    <SpeakerCardInner speaker={speaker} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function SpeakerCardInner({ speaker }: { speaker: Speaker }) {
  return (
    <>
      <div className="relative aspect-square w-full overflow-hidden border-b-4 border-black bg-muted">
        <Image
          src={speaker.image}
          alt={speaker.name}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
        />
        {speaker.linkedin && (
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-primary border-2 border-black p-1">
              <ArrowUpRight className="w-3 h-3 stroke-[3]" />
            </div>
          </div>
        )}
      </div>
      <div className="p-4">
        <p className="font-black text-[14px] uppercase leading-tight tracking-tight mb-1">{speaker.name}</p>
        <p className="font-mono text-[11px] font-bold text-black/50 uppercase leading-tight">{speaker.role}</p>
        <p className="font-mono text-[11px] font-bold text-black uppercase leading-tight">{speaker.company}</p>
      </div>
    </>
  );
}
