import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

interface Speaker {
  name: string;
  role: string;
  company: string;
  image: string;
}

const speakers: Speaker[] = [
  {
    name: 'TBA',
    role: '',
    company: '',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'TBA',
    role: '',
    company: '',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'TBA',
    role: '',
    company: '',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'TBA',
    role: '',
    company: '',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=400&auto=format&fit=crop',
  },
];

const Speakers: React.FC = () => {
  return (
    <section id="speakers" className="bg-white">
      <div className="mx-auto max-w-[1280px] py-24 px-8 md:px-12">
        {/* Header Decorative Elements */}
          <div className="flex flex-col mb-12">
            <div className="grid grid-cols-4 gap-0 mb-8 max-w-[400px] border-4 border-black neo-shadow">
              <div className="aspect-square bg-primary"></div>
              <div className="aspect-square bg-white border-l-4 border-black"></div>
              <div className="aspect-square bg-muted border-l-4 border-black"></div>
              <div className="aspect-square bg-primary border-l-4 border-black"></div>
            </div>
            
            <div className="flex justify-between items-end pt-4">
              <div className="font-mono text-[14px] font-black tracking-[0.1em] text-black uppercase bg-primary px-2 border-2 border-black">
                WORLD CLASS BUILDERS
              </div>
                <div className="flex items-center gap-2 font-mono text-[14px] font-black tracking-[0.1em] text-black uppercase bg-primary/20 px-2 border-2 border-black">
                  IN MUNICH <span className="w-3 h-3 bg-black"></span>
                </div>
            </div>
          </div>

        {/* Section Title & CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-[48px] md:text-[64px] font-black tracking-[-0.03em] text-black uppercase leading-none">
              Speakers
            </h2>
            <p className="font-mono text-[18px] font-black text-black/60 uppercase">
              More info coming soon.
            </p>
          </div>
          <button className="bg-primary text-black px-8 py-4 border-4 border-black font-black uppercase tracking-wider text-[18px] neo-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[0px] active:translate-y-[0px] transition-all flex items-center gap-2 group cursor-pointer">
            Apply to Speak
            <ArrowUpRight className="w-6 h-6 stroke-[3] group-hover:rotate-45 transition-transform" />
          </button>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
          {speakers.map((speaker, index) => (
            <div key={index} className="flex flex-col group">
              <div className="relative aspect-square border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[12px_12px_0px_0px_var(--primary)] transition-all bg-muted mb-6 overflow-hidden">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300 scale-100 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
              <h3 className="text-[24px] font-black text-black mb-2 tracking-tight uppercase">
                {speaker.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
