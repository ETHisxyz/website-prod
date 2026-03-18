import React from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

const ExploreSection = () => {
  const cards = [
        {
          id: 1,
          tag: "RWAS",
          title: "What are Real World Assets?",
          buttonText: "READ RESEARCH",
          image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/68ea0bb2-589b-4a71-9c75-5bebfc51b135/image-1771355978930.png",
          link: "https://info.arkm.com/research/rwa-tokenization-how-to-understand-and-track-real-world-assets-on-chain"
        },
      {
        id: 2,
        tag: "D/ACC",
        title: "d/acc: one year later",
        buttonText: "READ RESEARCH",
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/68ea0bb2-589b-4a71-9c75-5bebfc51b135/image-1771354207865.png",
        link: "https://vitalik.eth.limo/general/2025/01/05/dacc2.html"
      },
      {
        id: 3,
        tag: "DEPIN",
        title: "State of Depin 2025",
        buttonText: "READ RESEARCH",
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/68ea0bb2-589b-4a71-9c75-5bebfc51b135/image-1771354883310.png",
        link: "https://messari.io/report/state-of-depin-2025"
      }
  ];

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1280px] mx-auto">
        {/* Header Row */}
        <div className="bg-primary py-16 px-8 sm:px-12 border-x-4 border-black">
          <h2 className="text-[48px] sm:text-[64px] font-black tracking-tight text-black leading-none uppercase">
            deep dive
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 md:p-12 border-x-4 border-black border-b-4">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="flex flex-col group bg-white border-4 border-black neo-shadow hover:translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              {/* Image Container */}
              <div className="p-4 pb-0">
                <div className="relative aspect-[16/9] border-2 border-black overflow-hidden bg-muted">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="inline-block bg-[#6495ED] border-2 border-black px-3 py-1 mb-4">
                    <span className="font-mono text-[12px] font-black uppercase tracking-wider text-black">
                      {card.tag}
                    </span>
                  </div>
                  <p className="text-[20px] leading-[1.3] font-black text-black mb-12 uppercase">
                    {card.title}
                  </p>
                </div>
                
                <a 
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neo w-full bg-primary flex items-center justify-between border-4 border-black"
                >
                  <span className="font-mono text-[14px] font-black tracking-wider text-black">
                    {card.buttonText}
                  </span>
                  <ExternalLink size={20} strokeWidth={4} className="text-black" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
