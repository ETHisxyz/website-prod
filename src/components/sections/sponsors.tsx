"use client";

import React from 'react';
import Image from 'next/image';
import { TallyFormButton } from '@/components/tally-form-button';
import { partners, type Partner } from '@/data/partners';

function PartnerTile({ partner }: { partner: Partner }) {
  const inner = (
    <div className={`w-[130px] sm:w-[155px] h-[88px] sm:h-[100px] flex-shrink-0 flex flex-col items-center justify-center border-4 border-black p-2 sm:p-3 group hover:shadow-[4px_4px_0px_0px_var(--primary)] transition-all ${partner.darkBg ? 'bg-black' : 'bg-white'}`}>
      <div className="relative w-full flex-1">
        <Image
          src={partner.logo}
          alt={partner.name}
          fill
          sizes="(max-width: 640px) 130px, 155px"
          className="object-contain"
        />
      </div>
      {partner.displayName && (
        <span className="font-mono text-[9px] font-black uppercase tracking-widest text-black/60 mt-1">
          {partner.displayName}
        </span>
      )}
    </div>
  );

  return partner.url ? (
    <a href={partner.url} target="_blank" rel="noopener noreferrer">{inner}</a>
  ) : (
    <div>{inner}</div>
  );
}

const row1 = partners.slice(0, Math.ceil(partners.length / 2));
const row2 = partners.slice(Math.ceil(partners.length / 2));

const Sponsors = () => {
  return (
    <section id="sponsors" className="bg-white border-t-4 border-black overflow-hidden">
      <div className="mx-auto max-w-[1280px] pt-16 px-8 md:px-12">
        <div className="flex flex-col md:flex-row border-4 border-black neo-shadow mb-10 overflow-hidden">
          <div className="md:w-1/2 p-6 md:p-12 bg-primary overflow-hidden">
            <p className="font-mono text-[14px] tracking-[0.05em] uppercase mb-4 text-black font-black bg-white px-2 border-2 border-black inline-block">Thank You</p>
            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-black leading-tight tracking-tight uppercase text-black break-words">Partners</h2>
          </div>
          <div className="md:w-1/2 p-6 md:p-12 flex items-center justify-between bg-muted border-t-4 md:border-t-0 md:border-l-4 border-black overflow-hidden">
            <p className="font-mono text-[15px] md:text-[18px] tracking-[0.05em] uppercase text-black font-black">Building in the Real World</p>
            <div className="w-6 h-6 flex-shrink-0 bg-black animate-bounce ml-4"></div>
          </div>
        </div>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="overflow-x-hidden mb-4" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)' }}>
        <div className="flex gap-3 w-max pl-4" style={{ willChange: 'transform', animation: 'marquee 28s linear infinite' }}>
          {[...row1, ...row1].map((partner, i) => (
            <PartnerTile key={i} partner={partner} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="overflow-x-hidden" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)' }}>
        <div className="flex gap-3 w-max pl-4" style={{ willChange: 'transform', animation: 'marquee 32s linear infinite reverse' }}>
          {[...row2, ...row2].map((partner, i) => (
            <PartnerTile key={i} partner={partner} />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-8 md:px-12 pb-16">
        <div className="mt-10 p-12 bg-black border-4 border-black neo-shadow flex justify-center">
          <TallyFormButton
            formId="jaBZ66"
            className="btn-neo bg-white text-black hover:bg-primary flex items-center gap-4 group/btn px-8"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-[14px] font-black uppercase tracking-wider">Sponsor</span>
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 256 417" className="h-[24px] w-auto fill-current" xmlns="http://www.w3.org/2000/svg">
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
            <svg className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </TallyFormButton>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
