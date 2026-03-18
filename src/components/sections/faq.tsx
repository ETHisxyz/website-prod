"use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "WHAT IS ETHis?",
    answer: "ETHis is the Real World Ethereum Summit, coordinating builders and operators to foster a more sovereign, resilient future. We bridge the gap between protocol and the real economy, focusing on the $100T+ RWA frontier."
  },
  {
    question: "WHEN AND WHERE IS THE SUMMIT?",
    answer: "The main summit takes place on 2-3 July 2026. Detailed venue information and the full agenda will be announced soon."
  },
  {
    question: "HOW CAN I GET INVOLVED?",
    answer: "You can participate as an attendee, apply to join our Operations squad as a volunteer, or become a sponsor. Check the 'Get Involved' section below for current openings."
  },
  {
    question: "IS THERE A CALL FOR SPEAKERS?",
    answer: "Yes, we will be opening speaker applications soon. Follow our updates to be the first to know when the call for proposals goes live."
  },
  {
    question: "HOW DO I BECOME A SPONSOR?",
    answer: "We offer several tiers including Summit, Track, Ecosystem, and Contributor. Use the 'Sponsor ETHis' button in the sponsorship section to get in touch with our team."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white py-12 md:py-20 border-t-4 border-black">
      <div className="max-w-[1280px] mx-auto px-8 md:px-12">
        <div className="mb-12 md:mb-16">
          <h2 className="text-[48px] md:text-[80px] font-black leading-none uppercase text-black tracking-tighter">
            FAQ<span className="text-accent">S</span>
          </h2>
          <p className="text-[18px] md:text-[22px] font-bold text-black mt-4 max-w-2xl leading-tight">
            EVERYTHING YOU NEED TO KNOW ABOUT THE REAL WORLD ETHEREUM SUMMIT.
          </p>
        </div>

        <div className="grid gap-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border-4 border-black neo-shadow bg-white overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-muted transition-colors cursor-pointer group"
              >
                  <span className="text-[20px] md:text-[24px] font-black uppercase text-black group-hover:translate-x-1 transition-transform flex items-center gap-2">
                    {faq.question === "WHAT IS ETHis?" ? (
                      <>
                        WHAT IS
                        <span className="flex items-center gap-2 ml-1">
                          <svg 
                            viewBox="0 0 256 417" 
                            className="h-[24px] md:h-[28px] w-auto fill-current text-black" 
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z" />
                            <path d="M127.962 0L0 212.32l127.962 75.638V154.158z" fillOpacity="0.7" />
                            <path d="M127.961 312.187l-1.575 1.92V417l1.575-4.628L256 236.587z" />
                            <path d="M127.962 417V312.187L0 236.587z" fillOpacity="0.7" />
                            <path d="M127.961 287.958l127.96-75.637-127.96-58.162z" fillOpacity="0.5" />
                            <path d="M0 212.32l127.962 75.638V154.158z" fillOpacity="0.5" />
                          </svg>
                          <span className="font-display normal-case tracking-tighter">ETHis</span>
                        </span>
                        ?
                      </>
                    ) : faq.question}
                  </span>
                <div className="flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <div className="bg-black p-2 border-2 border-black">
                      <Minus className="w-6 h-6 text-white" />
                    </div>
                  ) : (
                    <div className="bg-accent p-2 border-2 border-black">
                      <Plus className="w-6 h-6 text-black" />
                    </div>
                  )}
                </div>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="p-6 md:p-8 pt-0 border-t-4 border-black bg-muted/30">
                  <p className="text-[18px] md:text-[20px] font-medium text-black leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
