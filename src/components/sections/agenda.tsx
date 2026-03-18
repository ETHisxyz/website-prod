import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Agenda = () => {
  const tracks = [
    {
      id: 1,
      title: "Track 1: REAL-WORLD ASSETS",
      description: "Over $20B in assets have already moved on-chain. From treasury bills to private credit, we are moving past the pilot phase into the $100T+ global settlement layer. Meet the leaders building the programmable economy.",
    },
    {
      id: 2,
      title: "Track 2: DECENTRALIZED IDENTITY",
        description: "Explore how to leverage ZK-proofs to enable selective disclosure. Prove your attributes, age, residency, or status, without surrendering your data.",
    },
    {
      id: 3,
      title: "Track 3: DePIN & ATOMS",
      description: "Software is no longer enough. We are scaling Decentralized Physical Infrastructure (DePIN) to build resilient energy grids and community-owned hardware. Design global, manufacture local, settle on Ethereum.",
    },
    {
      id: 4,
      title: "Track 4: STABLECOINS & POLICY",
      description: "With MiCA operational, stablecoins are the new B2B funding rail. Explore how institutional treasuries utilize Euro-stables for 24/7 liquidity and T+0 settlement. Day to Day banking is being rebuilt on-chain.",
    },
    {
      id: 5,
      title: "Track 5: DECENTRALIZED AI",
      description: "Explore how ZK-proofs and TEEs can help ensure AI models are transparent, accountable, and privacy-preserving. Defensive acceleration in practice.",
    },
      {
        id: 6,
        title: "Track 6: GOVERNANCE",
        description: "Collective on chain decision making takes on a whole new relevance in the Ai era. Explore how decentralized governance can help manages physical resources and protects the digital commons.",
      },
  ];

  return (
    <section id="tracks" className="w-full bg-white">
      <div className="max-w-[1280px] mx-auto p-8 md:p-12">
        {/* Title Section */}
        <div className="px-8 py-12 bg-primary border-4 border-black neo-shadow mb-8">
          <h2 className="text-[48px] md:text-[64px] font-black tracking-[-0.02em] leading-none mb-0 uppercase text-black">
            Tracks
          </h2>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
          {/* Sidebar CTA */}
          <div className="p-8 md:p-10 flex flex-col justify-start bg-muted border-4 border-black neo-shadow h-fit">
              <div className="p-8 border-4 border-black bg-white flex items-center justify-between group">
                <span className="font-mono text-[14px] font-black tracking-wider text-black">
                  Full Schedule <br />
                  (Coming Soon)
                </span>
                <ArrowUpRight className="w-6 h-6 text-black stroke-[3]" />
              </div>
          </div>

          {/* Timeline / Tracks */}
          <div className="bg-white flex flex-col gap-8">
            {tracks.map((track) => (
              <div
                key={track.id}
                className="flex flex-col border-4 border-black neo-shadow overflow-hidden"
              >
                {/* Track Heading (Yellow Box) */}
                <div className="w-full p-6 bg-primary border-b-4 border-black">
                  <h3 className="text-[20px] md:text-[24px] font-black tracking-tight text-black uppercase">
                    {track.title}
                  </h3>
                </div>

                  {/* Track Details (White Box) */}
                  <div className="flex-1 bg-white p-8 md:p-10 group hover:bg-muted transition-colors relative">
                    <p className="text-[20px] md:text-[24px] text-black font-black leading-tight">
                      {track.description}
                    </p>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
