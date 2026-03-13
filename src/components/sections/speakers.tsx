import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { TallyFormButton } from '@/components/tally-form-button';

interface Speaker {
  name: string;
  role: string;
  company: string;
  image: string;
  linkedin?: string;
}

const speakers: Speaker[] = [
  {
    name: 'Mark Ballandies',
    role: 'CO-FOUNDER',
    company: 'WIHI',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/68ea0bb2-589b-4a71-9c75-5bebfc51b135/image-1772712454557.png',
  },
  {
    name: 'Felix Fritsch',
    role: 'CO-FOUNDER',
    company: 'COMMONS HUB AUSTRIA',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/68ea0bb2-589b-4a71-9c75-5bebfc51b135/image-1772712846737.png',
  },
  {
    name: 'Sebastian Becker',
    role: 'MANAGING DIRECTOR',
    company: 'BLOCKCHAIN BUNDESVERBAND',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/68ea0bb2-589b-4a71-9c75-5bebfc51b135/image-1772713018638.png',
  },
  {
    name: 'Mark Conway-Greenslade',
    role: 'HEAD OF TECHNICAL STRATEGY',
    company: 'INVERSED TECH',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/68ea0bb2-589b-4a71-9c75-5bebfc51b135/image-1772713221320.png',
  },
  {
    name: 'Theo Beutel',
    role: 'ECOSYSTEM DEVELOPMENT',
    company: 'ETHEREUM FOUNDATION',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/68ea0bb2-589b-4a71-9c75-5bebfc51b135/image-1772717770958.png',
  },
  {
    name: 'Marcel Uhlmann',
    role: 'CIO & MANAGING DIRECTOR',
    company: 'TRADEVEST',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/68ea0bb2-589b-4a71-9c75-5bebfc51b135/image-1772717876500.png',
    linkedin: 'https://www.linkedin.com/in/marceluhlmann/',
  },
  {
    name: 'Dr. Eric Falk',
    role: 'CEO & FOUNDER',
    company: 'FILEDGR',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/68ea0bb2-589b-4a71-9c75-5bebfc51b135/image-1772718367929.png',
    linkedin: 'https://www.linkedin.com/in/erfalk/',
  },
  {
    name: 'Donny Lewis',
    role: 'ED STRATEGIC DEVELOPMENT',
    company: 'VIRIDIS',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/68ea0bb2-589b-4a71-9c75-5bebfc51b135/image-1772718420015.png',
    linkedin: 'https://www.linkedin.com/in/donny-lewis-77b71a13/',
  },
  {
    name: 'Sagar Barvaliya',
    role: 'GENERAL PARTNER',
    company: 'BLOCKCHAIN FOUNDERS CAPITAL',
    image: '/sagar-barvaliya.png',
    linkedin: 'https://www.bfc.vc/',
  },
];

const Speakers: React.FC = () => {
  return (
    <section id="speakers" className="bg-white">
      <div className="mx-auto max-w-[1280px] py-24 px-8 md:px-12">
        {/* Header Decorative Elements */}
          <div className="flex flex-col mb-12">

            
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

          </div>
            <TallyFormButton formId="D4VGDN" className="bg-primary text-black px-8 py-4 border-4 border-black font-black uppercase tracking-wider text-[18px] neo-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[0px] active:translate-y-[0px] transition-all flex items-center gap-2 group cursor-pointer">
              Apply to Speak
              <ArrowUpRight className="w-6 h-6 stroke-[3] group-hover:rotate-45 transition-transform" />
            </TallyFormButton>
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
              <h3 className="text-[24px] font-black text-black mb-1 tracking-tight uppercase">
                {speaker.name}
              </h3>
              <p className="font-mono text-[13px] font-bold text-black/60 uppercase">{speaker.role}</p>
              <p className="font-mono text-[13px] font-bold text-black uppercase">{speaker.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
