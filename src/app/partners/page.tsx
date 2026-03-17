import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/sections/navbar';
import Footer from '@/components/sections/footer';
import { partners } from '@/data/partners';
import { TallyFormButton } from '@/components/tally-form-button';
import { ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'Partners | ETHis Summit',
  description: 'The organisations and communities building the real world with Ethereum. ETHis Summit partners.',
};

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero header */}
        <div className="bg-black border-b-4 border-black">
          <div className="max-w-[1280px] mx-auto px-8 md:px-12 py-16 md:py-24">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
              <div>
                <p className="font-mono text-[13px] font-black uppercase tracking-widest bg-primary text-black px-2 border-2 border-primary inline-block mb-6">
                  ETHis Summit · Munich · July 2–3 2026
                </p>
                <h1 className="text-[64px] md:text-[96px] lg:text-[120px] font-black uppercase tracking-tighter leading-none text-white">
                  Partners
                </h1>
              </div>
              <TallyFormButton
                formId="jaBZ66"
                className="bg-primary text-black px-8 py-4 border-4 border-primary font-black uppercase tracking-wider text-[18px] shadow-[4px_4px_0px_0px_var(--primary)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all flex items-center gap-2 group cursor-pointer flex-shrink-0"
              >
                Become a Partner
                <ArrowUpRight className="w-6 h-6 stroke-[3] group-hover:rotate-45 transition-transform" />
              </TallyFormButton>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="border-b-4 border-black bg-primary">
          <div className="max-w-[1280px] mx-auto px-8 md:px-12 py-4 flex items-center gap-8">
            <span className="font-mono text-[13px] font-black uppercase tracking-widest text-black">
              {partners.length} Partners
            </span>
            <span className="font-mono text-[13px] font-black uppercase tracking-widest text-black/50">
              · Building in the Real World
            </span>
          </div>
        </div>

        {/* Partners grid */}
        <div className="max-w-[1280px] mx-auto px-8 md:px-12 py-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-0 border-t-4 border-l-4 border-black">
            {partners.map((partner, index) => {
              const inner = (
                <div className={`relative h-32 md:h-40 flex flex-col items-center justify-center p-4 group-hover:bg-primary/10 transition-colors ${partner.darkBg ? 'bg-black' : 'bg-white'}`}>
                  <div className="relative w-full flex-1">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                      className="object-contain p-2"
                    />
                  </div>
                  {partner.displayName && (
                    <span className="font-mono text-[9px] font-black uppercase tracking-widest text-black/60 mt-1">
                      {partner.displayName}
                    </span>
                  )}
                  {partner.url && (
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-primary border-2 border-black p-0.5">
                        <ArrowUpRight className="w-3 h-3 stroke-[3]" />
                      </div>
                    </div>
                  )}
                </div>
              );

              const cls = 'border-r-4 border-b-4 border-black group';

              return partner.url ? (
                <a key={index} href={partner.url} target="_blank" rel="noopener noreferrer" className={cls}>
                  {inner}
                </a>
              ) : (
                <div key={index} className={cls}>{inner}</div>
              );
            })}
          </div>
        </div>

        {/* Sponsor CTA */}
        <div className="max-w-[1280px] mx-auto px-8 md:px-12 pb-16">
          <div className="p-12 bg-black border-4 border-black neo-shadow flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-mono text-[13px] font-black uppercase tracking-widest text-primary mb-2">Interested?</p>
              <h2 className="text-[28px] md:text-[40px] font-black uppercase tracking-tighter text-white leading-none">
                Partner with ETHis
              </h2>
            </div>
            <TallyFormButton
              formId="jaBZ66"
              className="btn-neo bg-white text-black hover:bg-primary flex items-center gap-4 group/btn px-8 flex-shrink-0"
            >
              <span className="font-mono text-[14px] font-black uppercase tracking-wider">Become a Sponsor</span>
              <ArrowUpRight className="w-5 h-5 stroke-[3] transition-transform group-hover/btn:rotate-45" />
            </TallyFormButton>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
