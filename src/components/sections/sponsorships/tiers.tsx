import React from 'react';
import { Check, Minus } from 'lucide-react';

export function SponsorshipTiers() {
      const tiers = [
      {
        name: "Summit",
        subtitle: "",
        limit: "",
        price: "20k",
        color: "bg-primary",
        tickets: "10"
      },
      {
        name: "Track",
        subtitle: "",
        limit: "",
        price: "10k",
        color: "bg-white",
        tickets: "6"
      },
      {
        name: "Ecosystem",
        subtitle: "",
        limit: "",
        price: "5k",
        color: "bg-white",
        tickets: "4"
      },
      {
        name: "Contributor",
        subtitle: "",
        limit: "",
        price: "3k",
        color: "bg-white",
        tickets: "2"
      }
      ];

        const deliverables = [
          { label: "Full Sponsor Access Tickets", values: ["10", "6", "4", "2"] },
          { label: "Logo on Website & Partner-Wall", values: [true, true, true, true] },
          { label: "Social Media & Announcements", values: [true, true, true, true] },
          { label: "Logo on Stage", values: [true, true, true, false] },
          { label: "Logo in all Video Content", values: [true, true, true, false] },
            { label: "Networking Stand", values: [false, false, true, false] },
            { label: "Speakers Aperitivo", values: [true, true, false, false] },
          { label: "Track Booth", values: [false, true, false, false] },
          { label: "Summit Booth", values: [true, false, false, false] },
          { label: "Logo on wristband", values: [true, false, false, false] },
          { label: "Keynote", values: [true, false, false, false] },
        ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-[1280px] mx-auto">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-16 leading-none">
          DELIVERABLES
        </h2>

        {/* Mobile scroll hint */}
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
                      <th key={tier.name} className={`p-4 md:p-6 text-center border-b-4 border-l-4 border-black ${tier.color} min-w-[110px] md:min-w-[160px]`}>
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
                            <Check className="w-5 h-5 md:w-8 md:h-8 mx-auto stroke-[4] text-black" />
                          ) : (
                            <Minus className="w-5 h-5 md:w-8 md:h-8 mx-auto stroke-[2] text-black/20" />
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
                    <td key={i} className="p-4 md:p-8 text-center border-l-4 border-black">
                      <span className="text-3xl md:text-5xl font-black tracking-tighter">{tier.price}</span>
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
            <a 
              href="https://tally.so/r/jaBZ66"
              className="bg-black text-white px-12 py-6 text-2xl font-black uppercase tracking-widest hover:bg-white hover:text-black border-4 border-black transition-all hover:translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block text-center"
            >
              Become a Sponsor
            </a>
        </div>
      </div>
    </section>
  );
}
