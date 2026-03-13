import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { TallyFormButton } from '@/components/tally-form-button';

const SurveyCTA = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[1280px] mx-auto p-8 md:p-12">
        <div className="bg-accent border-4 border-black neo-shadow p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 group">
                <div className="max-w-2xl text-center md:text-left">
                  <h2 className="text-[40px] md:text-[56px] font-black leading-none mb-6 uppercase text-black tracking-tight group-hover:translate-x-1 transition-transform">
                    GET <br />
                    <span className="text-white drop-shadow-[4px_4px_0px_#000]">INVOLVED</span>
                  </h2>
                  <p className="text-[18px] md:text-[20px] font-bold text-black leading-tight">
                      APPLICATIONS FOR OUR VOLUNTEER SQUAD NOW OPEN
                  </p>

                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <TallyFormButton
                    formId="A7JrXB"
                    className="btn-neo bg-black text-white min-w-[240px] flex items-center justify-center border-4 border-black hover:bg-white hover:text-black transition-colors"
                  >
                    <span className="font-mono text-[16px] font-black tracking-[0.1em]">Apply Now</span>
                    <ArrowUpRight className="ml-4 w-6 h-6" />
                  </TallyFormButton>
                </div>
        </div>
      </div>
    </section>
  );
};

export default SurveyCTA;
