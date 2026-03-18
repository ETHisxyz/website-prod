import React from 'react';
import { ArrowUpRight } from 'lucide-react';

/**
 * NextYearTeaser Component
 * 
 * Clones the high-contrast black section for GitHub Universe 2026.
 * Features a split grid layout with massive typography and a lime-green CTA.
 */
const NextYearTeaser: React.FC = () => {
  return (
    <section className="bg-black text-white overflow-hidden border-t border-[#D0D7DE]">
      <div className="mx-auto max-w-[1440px] grid grid-cols-1 md:grid-cols-2">
        {/* Left Column: Heading */}
        <div className="relative p-8 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-[#30363d] flex flex-col justify-between min-h-[400px]">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#8b949e]">
              See you next year
            </span>
          </div>
          
            <h2 className="text-[42px] md:text-[56px] lg:text-[64px] font-bold leading-[1.05] tracking-tight mt-auto">
              Join us next year<br />
                on 2-3 July, 2026
            </h2>
        </div>

        {/* Right Column: Location & CTA */}
        <div className="flex flex-col">
          {/* Top part: Location details */}
          <div className="p-8 md:p-12 lg:p-16 border-b border-[#30363d] flex-grow relative">
            <div className="flex justify-between items-start">
                <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#8b949e]">
                  Munich • 2026
                </div>
              <div className="w-3 h-3 bg-[#1f883d]"></div>
            </div>
          </div>

          {/* Bottom part: CTA Button */}
          <div className="p-6 md:p-12 lg:p-12 bg-black">
            <a 
              href="#" 
              className="group relative flex items-center justify-between w-full bg-[#56f389] hover:bg-[#4ade80] transition-colors duration-200 rounded-md py-4 px-6 md:py-5 md:px-8 text-black"
            >
              <span className="font-mono text-sm font-bold tracking-[0.1em] uppercase">
                Get Notified
              </span>
              <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextYearTeaser;