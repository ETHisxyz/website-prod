"use client";

import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const tracks = [
  {
    number: "01",
    title: "Real World Productive Assets",
    tag: "RWAs",
    color: "bg-primary",
    textColor: "text-black",
    body: "Ethereum is the ideal home for trillions in global productive assets. From real estate and agriculture to financial instruments, the network transforms static value into programmable cash flow. By moving these assets on-chain, we reduce operational friction and eliminate the \"middleman tax\" of expensive, legacy intermediaries.",
    stat: "$20B+",
    statLabel: "Already on-chain",
  },
  {
    number: "02",
    title: "ZK & Privacy",
    tag: "TRUSTWARE",
    color: "bg-black",
    textColor: "text-white",
    body: "Software-based trust is the new standard. ZK-proofs enable selective disclosure. Verify residency, age, or accreditation without surrendering data. This is the Trustware stack: reducing operational friction while providing the defensive privacy required for institutional and individual agency.",
    stat: "ZK",
    statLabel: "Selective disclosure",
  },
  {
    number: "03",
    title: "DePIN & Hardware",
    tag: "DEPIN",
    color: "bg-white",
    textColor: "text-black",
    body: "Software is no longer enough. DePIN is scaling to build resilient, peer-to-peer energy markets and municipal coordination rails. This track imagines a decentralized built environment: Design global, manufacture local, settle on Ethereum.",
    stat: "P2P",
    statLabel: "Physical infrastructure",
  },
  {
    number: "04",
    title: "DeFi & Stablecoins",
    tag: "STABLECOINS",
    color: "bg-primary",
    textColor: "text-black",
    body: "Stablecoins are the foundation of the new economy. With institutional treasuries leveraging stables for T+0 settlement and 24/7 liquidity, the legacy banking stack is being upgraded. Day-to-day finance is being rebuilt as a transparent, high-velocity on-chain utility.",
    stat: "T+0",
    statLabel: "Instant settlement",
  },
  {
    number: "05",
    title: "AI & xRisk",
    tag: "D/ACC",
    color: "bg-black",
    textColor: "text-white",
    body: "As AI scales, systemic risks increase exponentially. This track applies Defensive Acceleration (d/acc), using Ethereum to ensure AI models are transparent, accountable, and privacy-preserving. We prioritize technologies that tip the scales toward resilience and human agency over centralized black boxes.",
    stat: "d/acc",
    statLabel: "Defensive acceleration",
  },
  {
    number: "06",
    title: "Governance & DAO",
    tag: "COORDINATION",
    color: "bg-white",
    textColor: "text-black",
    body: "The coordination layer for physical resources and the digital commons. In the AI era, collective on-chain decision-making is the most efficient way to manage decentralized infrastructure and maintain protocol integrity. We implement governance and DAOs to improve high-stakes decision making and shared resource management both IRL and URL.",
    stat: "IRL+URL",
    statLabel: "On-chain coordination",
  },
];

const TracksSection = () => {
  const [active, setActive] = useState(0);
  const activeTrack = tracks[active];

  return (
      <section id="tracks" className="bg-white border-t-4 border-black mt-16">
      {/* Header strip */}
      <div className="grid grid-cols-2 border-b-4 border-black">
        <div className="p-4 bg-primary border-r-4 border-black">
          <span className="font-mono text-[13px] font-black uppercase tracking-widest">ETHis 2026 // Munich</span>
        </div>
        <div className="p-4 flex items-center gap-2">
          <span className="font-mono text-[13px] font-black uppercase tracking-widest">6 Tracks</span>
          <div className="w-2.5 h-2.5 bg-black ml-1" />
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto">
        {/* Title row */}
        <div className="px-8 md:px-16 pt-12 pb-8 border-b-4 border-black flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="text-[52px] md:text-[80px] font-black leading-[0.85] tracking-[-0.03em] uppercase">
            THE<br />TRACKS.
          </h2>
          <p className="max-w-xs font-mono text-[13px] uppercase tracking-wider text-black/60 font-bold md:pb-3">
            Six critical fronts where Ethereum meets the real world. Select a track to explore.
          </p>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 md:h-[520px]">
          {/* Track list */}
          <div className="md:col-span-5 border-r-0 md:border-r-4 border-black flex flex-col">
            {tracks.map((track, i) => (
              <button
                key={i}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`
                  group w-full text-left flex items-center justify-between px-8 py-5 border-b-4 border-black transition-all duration-150 flex-1
                  ${active === i ? 'bg-primary' : 'bg-white hover:bg-black hover:text-white'}
                `}
              >
                <div className="flex items-center gap-5">
                  <span className={`font-mono text-[11px] font-black tracking-widest ${active === i ? 'text-black/50' : 'text-black/30 group-hover:text-white/40'}`}>
                    {track.number}
                  </span>
                  <span className={`text-[15px] md:text-[17px] font-black uppercase tracking-tight ${active === i ? 'text-black' : 'text-black group-hover:text-white'}`}>
                    {track.title}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`hidden sm:block font-mono text-[10px] font-black tracking-widest px-2 py-1 border-2 ${
                    active === i
                      ? 'border-black text-black'
                      : 'border-black/30 text-black/40 group-hover:border-white/40 group-hover:text-white/50'
                  }`}>
                    {track.tag}
                  </span>
                  <ArrowUpRight
                    size={16}
                    strokeWidth={3}
                    className={active === i ? 'text-black' : 'text-black/30 group-hover:text-white'}
                  />
                </div>
              </button>
            ))}
          </div>

            {/* Detail panel */}
            <div className={`md:col-span-7 flex flex-col h-full ${activeTrack.color}`}>
              <div className={`flex items-start justify-between px-10 pt-10 pb-6 border-b-4 flex-shrink-0 ${activeTrack.color === 'bg-black' ? 'border-white' : 'border-black'} ${activeTrack.textColor}`}>
                <div>
                  <p className="font-mono text-[11px] font-black tracking-widest opacity-50 uppercase mb-2">{activeTrack.tag}</p>
                  <h3 className="text-[38px] md:text-[52px] font-black uppercase leading-[0.9] tracking-tight">
                    {activeTrack.title}
                  </h3>
                </div>
                <span className="font-mono text-[72px] md:text-[96px] font-black leading-none opacity-10 select-none">
                  {activeTrack.number}
                </span>
              </div>

              <div className={`px-10 py-8 flex-grow overflow-hidden ${activeTrack.textColor}`}>
                <p className={`text-[15px] md:text-[16px] font-bold leading-relaxed tracking-wide uppercase ${
                  activeTrack.textColor === 'text-white' ? 'text-white/80' : 'text-black/70'
                }`}>
                  {activeTrack.body}
                </p>
              </div>

              <div className={`flex items-center gap-0 border-t-4 flex-shrink-0 ${activeTrack.color === 'bg-black' ? 'border-white' : 'border-black'} mt-auto`}>
                <div className={`px-10 py-5 border-r-4 ${activeTrack.color === 'bg-black' ? 'border-white' : 'border-black'} ${activeTrack.textColor}`}>
                <p className="text-[32px] font-black tracking-tight leading-none">{activeTrack.stat}</p>
                <p className={`font-mono text-[10px] font-black tracking-widest uppercase mt-1 ${
                  activeTrack.textColor === 'text-white' ? 'text-white/50' : 'text-black/50'
                }`}>{activeTrack.statLabel}</p>
              </div>
              <div className="px-10 py-5 flex-grow">
                <a
                  href="/tickets"
                  className={`inline-flex items-center gap-2 font-mono text-[12px] font-black uppercase tracking-widest px-5 py-3 border-4 border-black shadow-[4px_4px_0px_0px_#000] transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1 ${
                    activeTrack.color === 'bg-black' ? 'bg-primary text-black' : 'bg-black text-white'
                  }`}
                >
                  Get Tickets <ArrowUpRight size={14} strokeWidth={3} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TracksSection;
