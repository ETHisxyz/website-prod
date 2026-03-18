import React from 'react';
import Image from 'next/image';

/**
 * SurveyFooter component - Pixel-perfect clone of the GitHub Universe 2025
 * feedback/survey section based on user instructions and design system.
 */
export default function SurveyFooter() {
  const assets = {
    copilot: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68ea0bb2-589b-4a71-9c75-5bebfc51b135-githubuniverse-com/assets/images/_copilot_4fcd14b6-22.webp",
    duck: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68ea0bb2-589b-4a71-9c75-5bebfc51b135-githubuniverse-com/assets/images/_duck_176191c5-23.webp"
  };

  return (
    <section className="w-full bg-white border-t border-brand-gray-border overflow-hidden">
      {/* Top Survey CTA Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-b border-brand-gray-border">
        {/* Left: Green Dot Grid Pattern */}
        <div className="bg-[#008000] aspect-square md:aspect-auto min-h-[320px] relative overflow-hidden flex items-center justify-center p-12">
          <div className="grid grid-cols-4 grid-rows-3 gap-4 w-full h-full max-w-[400px] max-h-[300px]">
            {[...Array(12)].map((_, i) => (
              <div 
                key={i} 
                className={`bg-[#00a000] w-full h-full ${
                  [3, 5, 11].includes(i) ? 'rounded-full' : 'rounded-xl'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right: Text and CTA */}
        <div className="flex flex-col justify-between p-8 md:p-12 border-l-0 md:border-l border-brand-gray-border">
          <div className="flex justify-between items-start mb-12">
            <span className="font-mono text-[11px] uppercase tracking-widest text-brand-black">Take</span>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] uppercase tracking-widest text-brand-black">Take the survey</span>
              <div className="w-2 h-2 bg-[#1f883d]" />
            </div>
          </div>

          <div className="max-w-[440px] mb-12">
            <h2 className="text-[24px] md:text-[28px] font-bold leading-[1.2] text-brand-black">
              We want to hear from you! Tell us what you loved—and how we can improve for next year.
            </h2>
          </div>

          <a 
            href="#" 
            className="flex items-center justify-between px-6 py-5 bg-brand-gray-light border border-brand-gray-border rounded-lg group hover:bg-[#ebf0f4] transition-colors duration-200"
          >
            <span className="font-mono text-[12px] font-bold uppercase tracking-wider text-brand-black">
              Take the survey
            </span>
            <svg 
              className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" 
              viewBox="0 0 16 16" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.33331 12.6667L12.6666 3.33334M12.6666 3.33334H5.33331M12.6666 3.33334V10.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom Character Graphic */}
      <div className="relative w-full h-[400px] md:h-[500px] bg-sky-50 overflow-hidden">
        {/* Abstract shapes and shadows background simulation */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#dcf0fb] via-[#e8f5ff] to-[#f0ebff]" />
        
        <div className="relative h-full container mx-auto flex items-end justify-center">
          {/* Duck Character (Left) */}
          <div className="absolute left-[5%] md:left-[10%] bottom-[-50px] w-[50%] h-full">
            <Image
              src={assets.duck}
              alt="GitHub Universe Duck Mascot"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
          
          {/* Copilot Robot Character (Right) */}
          <div className="absolute right-[5%] md:right-[10%] bottom-[-80px] w-[45%] h-full">
            <Image
              src={assets.copilot}
              alt="GitHub Copilot Robot"
              fill
              className="object-contain object-bottom scale-110"
              priority
            />
          </div>

          {/* Decorative Butterfly-like visual blur at center bottom */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-[#56F389] opacity-20 blur-[100px] rounded-full" />
        </div>
      </div>
    </section>
  );
}