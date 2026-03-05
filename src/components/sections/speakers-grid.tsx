import React from 'react';
import Image from 'next/image';

interface Speaker {
  name: string;
  title: string;
  company: string;
  image: string;
  isCircular?: boolean;
}

const speakers: Speaker[] = [
  {
    name: 'Alex Oladele',
    title: 'SENIOR SOFTWARE ENGINEER',
    company: 'RED HAT',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68ea0bb2-589b-4a71-9c75-5bebfc51b135-githubuniverse-com/assets/images/AlexOladele_1cd5be8d-9.webp',
  },
  {
    name: 'Rajeev Nair',
    title: 'GENERAL MANAGER - IT INFRASTRUCTURE & SECURITY',
    company: 'CATHAY PACIFIC',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68ea0bb2-589b-4a71-9c75-5bebfc51b135-githubuniverse-com/assets/images/RajeevNair_c3b47e1b-10.webp',
  },
  {
    name: 'Bassem Dghaidi',
    title: 'SENIOR SOFTWARE ENGINEER',
    company: 'GITHUB',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68ea0bb2-589b-4a71-9c75-5bebfc51b135-githubuniverse-com/assets/images/BassemDghaidi_52e2a311-11.webp',
    isCircular: true,
  },
  {
    name: 'Bree Hall',
    title: 'DEVELOPER ADVOCATE',
    company: 'HUBSPOT',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68ea0bb2-589b-4a71-9c75-5bebfc51b135-githubuniverse-com/assets/images/BreeHall_7fec8a6b-12.webp',
  },
  {
    name: 'Den Delimarsky',
    title: 'PRINCIPAL PRODUCT MANAGER',
    company: 'MICROSOFT',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68ea0bb2-589b-4a71-9c75-5bebfc51b135-githubuniverse-com/assets/images/DenDelimarsky_aa57d9e5-13.webp',
    isCircular: true,
  },
  {
    name: 'Sharanya Doddapaneni',
    title: 'VP ENGINEERING',
    company: 'GITHUB',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68ea0bb2-589b-4a71-9c75-5bebfc51b135-githubuniverse-com/assets/images/SharanyaDoddapaneni_b822bd99-14.webp',
  },
];

const SpeakersGrid: React.FC = () => {
  return (
    <section className="w-full bg-white pt-20 pb-20 overflow-hidden">
      {/* Decorative Banner */}
      <div className="container px-8 mb-16">
        <div className="grid grid-cols-4 gap-4 h-32 md:h-48 overflow-hidden">
          <div className="bg-[#E2FF9E] rounded-[24px]" />
          <div className="bg-[#56F389] rounded-[24px] flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-white rounded-full translate-y-16" />
                <div className="w-8 h-32 bg-white -translate-x-8" />
             </div>
          </div>
          <div className="bg-[#BCFFD2] rounded-full" />
          <div className="bg-[#1F883D] rounded-[24px] flex items-center justify-center relative overflow-hidden">
            <div className="w-24 h-24 bg-[#E2FF9E] rounded-full scale-150 blur-sm opacity-50" />
            <div className="absolute flex items-center justify-center">
              <div className="w-16 h-16 bg-[#56F389] [clip-path:polygon(50%_0%,_61%_35%,_98%_35%,_68%_57%,_79%_91%,_50%_70%,_21%_91%,_32%_57%,_2%_35%,_39%_35%)] scale-150 rotate-12" />
            </div>
          </div>
        </div>
      </div>

      {/* Eyebrow and Content Header */}
      <div className="container px-8">
        <div className="flex flex-col md:flex-row justify-between mb-12 border-t border-[#D0D7DE] pt-4">
          <div className="font-mono text-[12px] tracking-wider text-black uppercase mb-4 md:mb-0">
            WHO WILL BE THERE
          </div>
          <div className="font-mono text-[12px] tracking-wider text-black uppercase flex items-center">
            IN PERSON <span className="ml-2 w-2 h-2 bg-[#1F883D] inline-block" />
          </div>
        </div>

        <h2 className="text-[64px] md:text-[80px] font-bold tracking-tight mb-16 leading-[1.1]">
          Speakers
        </h2>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {speakers.map((speaker, index) => (
            <div key={index} className="flex flex-col group">
              <div className="relative aspect-square mb-6 overflow-hidden bg-[#F6F8FA] rounded-[12px]">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className={`object-cover grayscale transition-transform duration-500 group-hover:scale-105 ${
                    speaker.isCircular ? 'rounded-full scale-90' : ''
                  }`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-[20px] font-bold text-black">{speaker.name}</h3>
                <p className="font-mono text-[11px] font-medium text-[#57606A] leading-tight mt-1">
                  {speaker.title}
                </p>
                <p className="font-mono text-[11px] font-medium text-[#57606A]">
                  {speaker.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersGrid;