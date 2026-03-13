import React from 'react';

const visionPoints = [
  {
    title: "Real-World Integration",
    description: "Moving beyond digital speculation to anchor $100T+ in physical assets and industrial hardware.",
  },
  {
    title: "Municipal Rails",
    description: "Utilizing Ethereum as the sovereign layer for coordination, energy, and civil tech.",
  },
  {
    title: "Defensive Acceleration (d/acc)",
    description: "Engineering for resilience. We prioritize technologies that favor privacy, agency, and decentralized defense.",
  },
  {
    title: "Innovation",
    description: 'ETHis is a frontier for hardtech, a "Cosmolocalist" hub where global builders meet local fabrication.',
  },
];

export function WhoWeAre() {
  return (
    <section className="py-24 px-4 bg-primary border-b-4 border-black">
      <div className="max-w-[1280px] mx-auto">
        <div className="border-4 border-black bg-white p-6 md:p-12 neo-shadow">
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
            WHO WE ARE:<br />
            <span className="bg-black text-white px-2">THE ETHIS ASSOCIATION</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
            <div className="space-y-6">
              <p className="text-xl md:text-2xl font-bold leading-tight uppercase">
                We are a collective of builders and founders dedicated to the convergence of Ethereum and physical-world systems.
              </p>
            </div>
            <div className="space-y-6 md:border-l-4 border-black md:pl-8">
              <p className="text-lg font-bold leading-snug">
                The physical world holds massive untapped potential for Ethereum adoption. Ethereum is a performant and scalable world computer that does not compromise on robustness, sustainability and decentralization. We can leverage this to empower local production, fabrication, and manufacturing.
              </p>
            </div>
          </div>

          {/* OUR VISION */}
          <div>
            <p className="font-mono text-[12px] font-black uppercase tracking-widest text-black/50 mb-6">OUR VISION</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {visionPoints.map((point, i) => (
                <div key={i} className="p-6 border-4 border-black neo-shadow">
                  <h3 className="text-lg font-black uppercase tracking-tight mb-2">{point.title}</h3>
                  <p className="text-base font-bold text-black/70">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
