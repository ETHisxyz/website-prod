"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const carouselPhotos = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/68ea0bb2-589b-4a71-9c75-5bebfc51b135/a1d97b_4c16473178c149ab91cdd26c75ee6974-mv2-1772065270406.jpg",
    alt: "Festival der Zukunft Stage",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/68ea0bb2-589b-4a71-9c75-5bebfc51b135/a1d97b_9cbfd7d5234d44de977972457698e47a-mv2-1772065271065.jpg",
    alt: "Festival der Zukunft Future City",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/68ea0bb2-589b-4a71-9c75-5bebfc51b135/FDZ_DAYTWO_MEHRING__AST0807-resized-1772065272137.jpg",
    alt: "Festival speaker at Dome Stage",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/68ea0bb2-589b-4a71-9c75-5bebfc51b135/FDZ_DAYONE_ALL__AST9071-resized-1772065271066.jpg",
    alt: "Audience at Festival der Zukunft",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/68ea0bb2-589b-4a71-9c75-5bebfc51b135/2025_07_04_FdZ_2025_Tag2_by_Hans-Martin_Kudlinski-158-resized-1772065271456.jpg",
    alt: "Networking at the festival",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/68ea0bb2-589b-4a71-9c75-5bebfc51b135/DSCF3385-resized-1772065272443.jpg",
    alt: "Festival atmosphere and audience",
  },
];

const PhotoCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % carouselPhotos.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent(c => (c - 1 + carouselPhotos.length) % carouselPhotos.length);
  const next = () => setCurrent(c => (c + 1) % carouselPhotos.length);

  return (
    <div className="w-full h-full relative overflow-hidden bg-black">
      {carouselPhotos.map((photo, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? 'auto' : 'none' }}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      {/* Prev / Next */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-primary border-2 border-black w-8 h-8 flex items-center justify-center font-black shadow-[2px_2px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all text-sm"
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-primary border-2 border-black w-8 h-8 flex items-center justify-center font-black shadow-[2px_2px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all text-sm"
        aria-label="Next"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
        {carouselPhotos.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 border-2 border-black transition-all ${i === current ? 'bg-primary' : 'bg-white'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const RecapVisual = () => {
  const munichHero = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1771291844745.png";

  return (
    <section className="relative w-full overflow-x-hidden bg-white">
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative">
        <div className="relative z-20 w-full h-full flex flex-col items-center justify-center p-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-center">

            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="relative w-full aspect-video border-4 border-black shadow-[6px_6px_0px_0px_#000000] bg-white overflow-hidden animate-float-slow">
                <PhotoCarousel />
              </div>

                <div className="border-4 border-black shadow-[8px_8px_0px_0px_#FF8C8C] bg-white p-6 transform -rotate-2">
                    <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter">Europe&apos;s Leading Tech Festival</h3>
                  <div className="text-lg font-bold leading-tight flex flex-col gap-4">
                      <p>
                          Organized by 1E9 and the Deutsches Museum, Munich&apos;s annual Festival der Zukunft (Festival of the Future) brings together over 1500 engineers, innovators, scientists, tech enthusiasts and builders to explore how tech can empower humanity.
                      </p>
                      <p>
                        Technology, science, and creativity meet a community excited about the future. 100+ speakers and artists, interactive experiences, and networking in a unique location.
                      </p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                  {["AI", "ROBOTICS", "SPACE", "ENERGY", "BIOTECH", "DEEP TECH"].map(tag => (
                    <span key={tag} className="bg-[#FF8C8C] border-2 border-black px-2 py-1 text-xs font-black shadow-[2px_2px_0px_0px_#000000]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full border-4 border-black bg-primary flex items-center justify-center animate-bounce">
                <span className="text-2xl font-black">+</span>
              </div>
            </div>

              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="relative w-full aspect-video border-4 border-black shadow-[6px_6px_0px_0px_#FFDE03] bg-white overflow-hidden animate-float">
                  <Image
                    src={munichHero}
                    alt="Deutsches Museum"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />

                  <div className="absolute top-4 left-4 bg-white border-2 border-black px-3 py-1.5 flex items-center gap-2 shadow-[4px_4px_0px_0px_#000000]">
                    <svg viewBox="0 0 256 417" className="h-[18px] w-auto fill-current text-black" xmlns="http://www.w3.org/2000/svg">
                      <path d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z" />
                      <path d="M127.962 0L0 212.32l127.962 75.638V154.158z" fillOpacity="0.7" />
                      <path d="M127.961 312.187l-1.575 1.92V417l1.575-4.628L256 236.587z" />
                      <path d="M127.962 417V312.187L0 236.587z" fillOpacity="0.7" />
                      <path d="M127.961 287.958l127.96-75.637-127.96-58.162z" fillOpacity="0.5" />
                      <path d="M0 212.32l127.962 75.638V154.158z" fillOpacity="0.5" />
                    </svg>
                    <span className="font-black text-base tracking-tighter uppercase">ETHis</span>
                  </div>

                  <div className="absolute bottom-4 left-4 bg-white border-2 border-black px-3 py-1 font-black text-sm">
                    DEUTSCHES MUSEUM, MUNICH, EUROPE
                  </div>
                </div>

                <div className="border-4 border-black shadow-[8px_8px_0px_0px_#6495ED] bg-white p-6 transform rotate-1">
                      <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter">Ethereum&apos;s Leading Voices.</h3>
                  <div className="text-lg font-bold leading-tight flex flex-col gap-4">
                    <p>
                      We are bringing the Ethereum community face-to-face with Europe’s institutional giants and tech leaders to embed decentralized protocols into the real economy.
                    </p>
                    <p>
                      Co-located at the Deutsches Museum, the world’s largest science and technology museum, your ETHis pass provides full entry to both the Real-World Ethereum summit and the Festival of the Future.
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {["RWAS", "DEPIN", "D/ACC", "IDENTITY", "TRUSTWARE", "ZKP", "INFRA-FI"].map(tag => (
                      tag === "RWAS" ? (
                        <a
                          key={tag}
                          href="https://info.arkm.com/research/rwa-tokenization-how-to-understand-and-track-real-world-assets-on-chain"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#6495ED] border-2 border-black px-2 py-1 text-xs font-black shadow-[2px_2px_0px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all cursor-pointer"
                        >
                          {tag}
                        </a>
                      ) : (
                        <span key={tag} className="bg-[#6495ED] border-2 border-black px-2 py-1 text-xs font-black shadow-[2px_2px_0px_0px_#000000]">
                          {tag}
                        </span>
                      )
                    ))}
                  </div>
                </div>
              </div>

          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes float-slow {
          0% { transform: translateY(0px) rotate(-2deg); }
          50% { transform: translateY(-15px) rotate(-1deg); }
          100% { transform: translateY(0px) rotate(-2deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default RecapVisual;
