import React from 'react';

export function Audience() {
  const segments = [
    {
      label: "Enterprise and Corporate",
      percentage: "62.6%",
      description: "Decision-makers from global industrial groups and asset managers.",
      color: "bg-primary"
    },
    {
      label: "Startups & VC",
      percentage: "8.7%",
      description: "Early-stage founders and capital allocators in deep tech and AI.",
      color: "bg-white"
    },
    {
      label: "Research & Academia",
      percentage: "6.6%",
      description: "Technical talent and researchers from TUM, Fraunhofer, and MPG.",
      color: "bg-white"
    },
    {
      label: "Retail & Private",
      percentage: "20.0%",
      description: "Individual participants and ecosystem observers.",
      color: "bg-white"
    }
  ];

  return (
    <section className="py-24 px-4 bg-black text-white border-b-4 border-black">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-16">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-none">
            THE <span className="text-primary">FESTIVAL OF THE FUTURE</span> AUDIENCE.
          </h2>
          <p className="text-2xl font-bold uppercase tracking-tight">
            Running since 2019, the festival attracts nearly 3000 participants each year.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            {segments.map((segment, index) => (
              <div key={index} className="group">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xl font-black uppercase tracking-tight leading-none">{segment.label}</span>
                  <span className="text-4xl font-black text-primary leading-none">{segment.percentage}</span>
                </div>
                <div className="h-4 border-2 border-white bg-white/10 overflow-hidden">
                  <div 
                    className={`h-full ${segment.color} transition-all duration-1000`} 
                    style={{ width: segment.percentage }}
                  />
                </div>
                <p className="mt-2 text-sm font-bold uppercase opacity-60">
                  {segment.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-center">
            <div className="p-12 border-4 border-primary bg-primary text-black neo-shadow-white">
              <p className="text-3xl font-black uppercase leading-tight mb-6">
                ETHis breaks out of the crypto bubble and into the real economy.
              </p>
              <p className="text-xl font-bold uppercase">
                Sponsors gain direct access to a high-density environment of professional allocators and protocol builders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
