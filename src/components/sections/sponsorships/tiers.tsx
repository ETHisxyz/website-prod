"use client";

import React, { useState } from 'react';
import { Check, ArrowUpRight, X } from 'lucide-react';

function SponsorModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white border-4 border-black neo-shadow flex flex-col"
        style={{ maxHeight: "90vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header */}
        <div className="flex items-center justify-between px-6 py-4 border-b-4 border-black bg-primary flex-shrink-0">
          <span className="font-mono text-[12px] font-black uppercase tracking-widest">
            Become a Sponsor
          </span>
          <button
            onClick={onClose}
            className="w-9 h-9 border-2 border-black bg-white flex items-center justify-center hover:bg-black hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4 stroke-[3]" />
          </button>
        </div>
        {/* Tally embed */}
        <div className="flex-1 overflow-hidden">
          <iframe
            src="https://tally.so/embed/jaBZ66?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            className="w-full h-full"
            style={{ minHeight: "500px", border: "none" }}
            title="Become a Sponsor"
            allow="fullscreen"
          />
        </div>
      </div>
    </div>
  );
}

export function SponsorshipTiers() {
  const [modalOpen, setModalOpen] = useState(false);

  const tierCards = [
    {
      name: "Contributor",
      price: "€3K",
      color: "bg-white",
      isBlack: false,
      isYellow: false,
      tag: null,
      description: "Visibility and access for growing teams wanting to connect with the Ethereum ecosystem.",
      perks: [
        "2 Full Sponsor Access Tickets",
        "Logo on Website & Partner Wall",
        "Social Media & Announcements",
      ],
      notIncluded: [
        "Logo on Stage",
        "Logo in all Video Content",
        "Speakers Aperitivo",
        "Booth",
        "Keynote",
      ],
    },
    {
      name: "Ecosystem",
      price: "€5K",
      color: "bg-white",
      isBlack: false,
      isYellow: false,
      tag: null,
      description: "Broad visibility across all event channels plus a dedicated networking stand.",
      perks: [
        "4 Full Sponsor Access Tickets",
        "Logo on Website & Partner Wall",
        "Social Media & Announcements",
        "Logo on Stage",
        "Logo in all Video Content",
        "Networking Stand",
      ],
      notIncluded: [
        "Speakers Aperitivo",
        "Track / Summit Booth",
        "Keynote",
      ],
    },
    {
      name: "Track",
      price: "€10K",
      color: "bg-primary",
      isBlack: false,
      isYellow: true,
      tag: "Popular",
      description: "Own a track. Full presence from stage to booth to curated speaker dinners.",
      perks: [
        "6 Full Sponsor Access Tickets",
        "Logo on Website & Partner Wall",
        "Social Media & Announcements",
        "Logo on Stage",
        "Logo in all Video Content",
        "Speakers Aperitivo",
        "Track Booth",
      ],
      notIncluded: [
        "Keynote",
      ],
    },
    {
      name: "Summit",
      price: "€20K",
      color: "bg-black",
      isBlack: true,
      isYellow: false,
      tag: "Limited",
      description: "Maximum exposure. Your brand on the main stage, wristbands, and a keynote slot.",
      perks: [
        "10 Full Sponsor Access Tickets",
        "Logo on Website & Partner Wall",
        "Social Media & Announcements",
        "Logo on Stage",
        "Logo in all Video Content",
        "Speakers Aperitivo",
        "Summit Booth",
        "Logo on Wristband",
        "Keynote",
      ],
      notIncluded: [],
    },
  ];

  const tiers = [
    { name: "Summit",      price: "20k", color: "bg-black",   textColor: "text-white", tickets: "10" },
    { name: "Track",       price: "10k", color: "bg-primary", textColor: "text-black", tickets: "6"  },
    { name: "Ecosystem",   price: "5k",  color: "bg-white",   textColor: "text-black", tickets: "4"  },
    { name: "Contributor", price: "3k",  color: "bg-white",   textColor: "text-black", tickets: "2"  },
  ];

  const deliverables = [
    { label: "Full Sponsor Access Tickets",    values: ["10", "6", "4", "2"] },
    { label: "Logo on Website & Partner-Wall", values: [true, true, true, true] },
    { label: "Social Media & Announcements",   values: [true, true, true, true] },
    { label: "Logo on Stage",                  values: [true, true, true, false] },
    { label: "Logo in all Video Content",      values: [true, true, true, false] },
    { label: "Networking Stand",               values: [false, false, true, false] },
    { label: "Speakers Aperitivo",             values: [true, true, false, false] },
    { label: "Track Booth",                    values: [false, true, false, false] },
    { label: "Summit Booth",                   values: [true, false, false, false] },
    { label: "Logo on wristband",              values: [true, false, false, false] },
    { label: "Keynote",                        values: [true, false, false, false] },
  ];

  return (
    <>
      {modalOpen && <SponsorModal onClose={() => setModalOpen(false)} />}

      <section className="py-24 px-4 bg-white">
        <div className="max-w-[1280px] mx-auto">

          {/* Tier Cards */}
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12 leading-none">
            SPONSORSHIP TIERS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0 border-4 border-black neo-shadow mb-24">
            {tierCards.map((tier, idx) => (
              <div
                key={tier.name}
                className={`relative flex flex-col border-black ${
                  idx < tierCards.length - 1 ? "border-b-4 xl:border-b-0 xl:border-r-4" : ""
                } ${tier.isBlack ? "bg-black text-white" : tier.isYellow ? "bg-primary text-black" : "bg-white text-black"}`}
              >
                {tier.tag && (
                  <div className={`absolute top-4 right-4 px-2 py-1 font-mono text-[11px] font-black uppercase tracking-widest border-2 ${
                    tier.isBlack ? "bg-primary text-black border-primary" : "bg-black text-white border-black"
                  }`}>
                    {tier.tag}
                  </div>
                )}
                <div className={`p-6 border-b-4 ${tier.isBlack ? "border-white/20" : "border-black"}`}>
                  <h3 className="text-[28px] font-black uppercase tracking-tighter leading-none mb-1">{tier.name}</h3>
                  <p className={`text-[13px] font-bold uppercase leading-snug ${tier.isBlack ? "text-white/60" : "text-black/60"}`}>
                    {tier.description}
                  </p>
                </div>
                <div className={`px-6 py-5 border-b-4 ${tier.isBlack ? "border-white/20" : "border-black"}`}>
                  <span className="text-[48px] font-black leading-none tracking-tighter">{tier.price}</span>
                  <span className={`font-mono text-[13px] font-black uppercase ml-1 ${tier.isBlack ? "text-white/40" : "text-black/40"}`}>/ EUR</span>
                </div>
                <div className="flex-1 p-6">
                  <ul className="flex flex-col gap-3">
                    {tier.perks.map((perk, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-5 h-5 flex items-center justify-center border-2 mt-0.5 ${
                          tier.isBlack ? "bg-primary border-primary" : "bg-black border-black"
                        }`}>
                          <Check className={`w-3 h-3 stroke-[4] ${tier.isBlack ? "text-black" : tier.isYellow ? "text-primary" : "text-white"}`} />
                        </div>
                        <span className={`font-bold text-[14px] uppercase leading-tight ${tier.isBlack ? "text-white/90" : "text-black"}`}>{perk}</span>
                      </li>
                    ))}
                    {tier.notIncluded.map((perk, i) => (
                      <li key={`no-${i}`} className="flex items-start gap-3 opacity-30">
                        <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center border-2 border-current mt-0.5">
                          <span className="w-3 h-0.5 bg-current" />
                        </div>
                        <span className="font-bold text-[14px] uppercase leading-tight line-through">{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`p-6 border-t-4 ${tier.isBlack ? "border-white/20" : "border-black"}`}>
                  <button
                    onClick={() => setModalOpen(true)}
                    className={`w-full py-4 px-6 font-mono text-[13px] font-black uppercase tracking-widest border-2 flex items-center justify-between group transition-all ${
                      tier.isBlack
                        ? "bg-primary text-black border-primary hover:bg-white"
                        : tier.isYellow
                        ? "bg-black text-white border-black hover:bg-white hover:text-black"
                        : "bg-primary text-black border-black hover:bg-black hover:text-white"
                    }`}
                  >
                    <span>Become a Sponsor</span>
                    <ArrowUpRight className="w-5 h-5 stroke-[3] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-16 leading-none">
            DELIVERABLES
          </h2>

          <div className="flex items-center gap-3 mb-4 md:hidden">
            <div className="flex items-center gap-2 bg-primary border-2 border-black px-4 py-2">
              <span className="text-xs font-black uppercase tracking-widest">Swipe to see full table</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>
          </div>

          <div className="overflow-x-auto border-4 border-black" style={{ WebkitOverflowScrolling: 'touch' }}>
            <table className="w-full border-collapse" style={{ minWidth: '650px' }}>
              <thead>
                <tr>
                  <th className="p-4 md:p-6 text-left border-b-4 border-black bg-white sticky left-0 z-10 min-w-[140px] md:min-w-[240px]"></th>
                  {tiers.map((tier) => (
                    <th key={tier.name} className={`p-4 md:p-6 text-center border-b-4 border-l-4 border-black ${tier.color} ${tier.textColor} min-w-[110px] md:min-w-[160px]`}>
                      <div className="flex flex-col items-center">
                        <span className="text-base md:text-2xl font-black uppercase tracking-tighter leading-none">{tier.name}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {deliverables.map((item, idx) => (
                  <tr key={idx} className="group hover:bg-primary/10">
                    <td className="p-3 md:p-6 font-bold uppercase tracking-tight border-b-4 border-black text-xs md:text-base bg-white sticky left-0 z-10 shadow-[4px_0_0_0_#000]">
                      {item.label}
                    </td>
                    {item.values.map((val, i) => (
                      <td key={i} className="p-3 md:p-6 text-center border-b-4 border-l-4 border-black">
                        {typeof val === 'boolean' ? (
                          val ? (
                            <div className="w-6 h-6 md:w-8 md:h-8 bg-black mx-auto flex items-center justify-center">
                              <Check className="w-3.5 h-3.5 md:w-5 md:h-5 text-primary stroke-[4]" />
                            </div>
                          ) : (
                            <span className="text-black/25 font-black text-xl leading-none">—</span>
                          )
                        ) : (
                          <span className="text-lg md:text-2xl font-black">{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td className="p-4 md:p-8 font-black uppercase tracking-tighter text-xl md:text-3xl bg-white sticky left-0 z-10 shadow-[4px_0_0_0_#000]">
                    PRICE (EUR)
                  </td>
                  {tiers.map((tier, i) => (
                    <td key={i} className={`p-4 md:p-8 text-center border-l-4 border-black ${tier.color}`}>
                      <span className={`text-3xl md:text-5xl font-black tracking-tighter ${tier.textColor}`}>{tier.price}</span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 p-6 md:p-12 border-4 border-black bg-primary neo-shadow">
            <div>
              <h3 className="text-4xl font-black uppercase tracking-tighter leading-none mb-4">Ready to build the future?</h3>
              <p className="text-xl font-bold uppercase">Limited slots available per tier. Secure your place at ETHis Summit.</p>
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="bg-black text-white px-12 py-6 text-2xl font-black uppercase tracking-widest hover:bg-white hover:text-black border-4 border-black transition-all hover:translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block text-center"
            >
              Become a Sponsor
            </button>
          </div>

        </div>
      </section>
    </>
  );
}
