import React from 'react';
import Image from 'next/image';

const Sponsors = () => {
    const partners = [
      { 
        name: 'Eth Munich', 
        logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/68ea0bb2-589b-4a71-9c75-5bebfc51b135/TVxht8sY_400x400-1772067056919.jpg',
        displayName: 'ETHMUNICH'
      },
      { 
        name: 'Viridis', 
        logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/68ea0bb2-589b-4a71-9c75-5bebfc51b135/Screenshot-2026-02-26-004542-1772067006700.png',
        isLarge: true
      },
      { 
        name: '1E9', 
        logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/68ea0bb2-589b-4a71-9c75-5bebfc51b135/a1d97b_a269cffeaf7244f3961182ad407c9ac9-mv2-1772067288306.png' 
      },
      { 
        name: 'VDAO', 
        logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/68ea0bb2-589b-4a71-9c75-5bebfc51b135/1500x500-1772066987791.jpeg',
        isLarge: true
      },
    ];

    return (
      <section id="sponsors" className="bg-white">
        <div className="mx-auto max-w-[1280px] p-8 md:p-12">
            <div className="flex flex-col md:flex-row border-4 border-black neo-shadow mb-12 overflow-hidden">
              <div className="md:w-1/2 p-6 md:p-12 bg-primary overflow-hidden">
                 <p className="font-mono text-[14px] tracking-[0.05em] uppercase mb-4 text-black font-black bg-white px-2 border-2 border-black inline-block">Thank You</p>
                 <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-black leading-tight tracking-tight uppercase text-black break-words">Partners</h2>
              </div>
                <div className="md:w-1/2 p-6 md:p-12 flex items-center justify-between bg-muted border-t-4 md:border-t-0 md:border-l-4 border-black overflow-hidden">
                   <p className="font-mono text-[15px] md:text-[18px] tracking-[0.05em] uppercase text-black font-black">Building the Real World</p>
                   <div className="w-6 h-6 flex-shrink-0 bg-black animate-bounce ml-4"></div>
                </div>
              </div>

              {/* Partners Grid */}
            <div className="mb-12">
              <div className="p-8 md:p-12 bg-white border-4 border-black neo-shadow">
                <div className="grid grid-cols-2 md:grid-cols-4 border-t-4 border-l-4 border-black">
                  {partners.map((partner, index) => (
                    <div 
                      key={index} 
                      className="h-32 md:h-48 flex flex-col items-center justify-center p-4 md:p-6 border-r-4 border-b-4 border-black group hover:bg-primary/20 transition-colors bg-white"
                    >
                    <div className={`relative w-full h-full flex flex-col items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ${(partner as any).displayName ? 'gap-2' : ''}`}>
                       <div className="relative w-full h-full">
                           <Image 
                              src={partner.logo} 
                              alt={partner.name}
                              fill
                              className="object-contain p-4 md:p-6"
                           />
                       </div>
                       {(partner as any).displayName && (
                         <span className="font-mono font-black text-[10px] md:text-[12px] tracking-widest text-black uppercase">{ (partner as any).displayName }</span>
                       )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

            <div className="p-12 bg-black border-4 border-black neo-shadow flex justify-center">
              <a 
                href="https://tally.so/r/jaBZ66" 
                className="btn-neo bg-white text-black hover:bg-primary flex items-center gap-4 group/btn px-8"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[14px] font-black uppercase tracking-wider">Sponsor</span>
                  <div className="flex items-center gap-2">
                    <svg 
                      viewBox="0 0 256 417" 
                      className="h-[24px] w-auto fill-current" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z" />
                      <path d="M127.962 0L0 212.32l127.962 75.638V154.158z" fillOpacity="0.7" />
                      <path d="M127.961 312.187l-1.575 1.92V417l1.575-4.628L256 236.587z" />
                      <path d="M127.962 417V312.187L0 236.587z" fillOpacity="0.7" />
                      <path d="M127.961 287.958l127.96-75.637-127.96-58.162z" fillOpacity="0.5" />
                      <path d="M0 212.32l127.962 75.638V154.158z" fillOpacity="0.5" />
                    </svg>
                    <span className="font-display font-black text-[32px] tracking-tighter antialiased normal-case leading-none">ETHis</span>
                  </div>
                </div>
                <svg 
                  className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
      </div>
    </section>
  );
};

export default Sponsors;
