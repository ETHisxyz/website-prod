"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { Ticket, Check, ArrowUpRight, Users, Zap, Crown, X } from "lucide-react";

const tickets = [
  {
    id: "virtual",
    wixTicketId: null,
    name: "Virtual",
    price: 0,
    earlyPrice: 0,
    icon: Zap,
    color: "bg-white",
    tag: null,
    description: "Watch all sessions live and access recordings post-event. No travel required.",
    perks: [
        "Livestream all ETHis tracks and sessions",
      "Recordings access",
    ],
    notIncluded: [
      "2-Day ETHis Summit access",
      "2-Day Festival of Future access",
      "Networking lounge",
    ],
    cta: "Register Free",
    ctaHref: "https://tally.so/r/D4VGDN",
    free: true,
  },
  {
    id: "student",
    wixTicketId: "20c7a9ae-9d5c-41ed-8dd4-02edb6b5f96f",
    name: "Student",
    price: 39,
    earlyPrice: 39,
    icon: Users,
    color: "bg-white",
    tag: null,
    description: "For students and academic researchers. Proof of enrollment required at check-in.",
    perks: [
      "2-Day ETHis Summit access",
      "2-Day Festival of Future access",
      "All tracks & sessions",
      "Recordings access",
      "Networking app access",
    ],
    notIncluded: [
      "Networking lounge",
    ],
    cta: "Get Student Ticket",
    ctaHref: "#",
    free: false,
  },
  {
    id: "full",
    wixTicketId: "8a9024f1-ad5c-4f6b-8270-21a0f0a5ce1a",
    name: "Full Pass",
    price: 139,
    earlyPrice: 139,
    icon: Ticket,
    color: "bg-primary",
    tag: "Most Popular",
    description: "Full access to both days. All tracks, sessions, and the networking app included.",
    perks: [
      "2-Day ETHis Summit access",
      "2-Day Festival of Future access",
      "All tracks & sessions",
      "Recordings access",
      "Networking app access",
    ],
    notIncluded: [
      "Networking lounge",
    ],
    cta: "Get Full Pass",
    ctaHref: "#",
    free: false,
  },
  {
    id: "executive",
    wixTicketId: "e154942f-1f3f-4d4d-82d6-c41029dde98d",
    name: "Executive",
    price: 399,
    earlyPrice: 399,
    icon: Crown,
    color: "bg-black",
    tag: "Limited",
    description: "The complete ETHis experience. Including exclusive access to the networking lounge.",
    perks: [
      "2-Day ETHis Summit access",
      "2-Day Festival of Future access",
      "All tracks & sessions",
      "Recordings access",
      "Networking app access",
      "Networking lounge",
    ],
    notIncluded: [],
    cta: "Get Executive Pass",
    ctaHref: "#",
    free: false,
  },
];

const faqs = [
  {
    q: "WHEN DO EARLY BIRD PRICES END?",
    a: "Early bird pricing closes 1 April 2026 or when the allocation is sold out — whichever comes first. Secure your spot early.",
  },
  {
    q: "HOW DO I REGISTER FOR THE VIRTUAL TICKET?",
    a: "Click 'Register Free' on the Virtual tier — you'll be taken to a short registration form. You'll receive livestream links before the event.",
  },
  {
    q: "HOW DO STUDENT TICKETS WORK?",
    a: "Purchase a Student ticket and bring valid proof of enrollment (student ID or university letter) to check-in at the event.",
  },
  {
    q: "CAN I GET A REFUND?",
    a: "Tickets are transferable but non-refundable after 1 May 2026. Contact us at hello@ethis.network for transfer requests.",
  },
  {
    q: "WHAT IS THE NETWORKING LOUNGE?",
    a: "The Executive Networking Lounge is a curated space for senior decision-makers, founders, and investors — exclusive to Executive Pass holders.",
  },
];

export default function TicketsPage() {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [showVirtualModal, setShowVirtualModal] = useState(false);
  const [virtualForm, setVirtualForm] = useState({ firstName: "", lastName: "", email: "" });
  const [virtualSubmitted, setVirtualSubmitted] = useState(false);

    function handleTicketCTA(tier: typeof tickets[0], e: React.MouseEvent) {
      e.stopPropagation();
      if (tier.free) {
        setShowVirtualModal(true);
      } else {
        const params = new URLSearchParams({ tier: tier.id });
        if (tier.wixTicketId) params.set("wixTicketId", tier.wixTicketId);
        router.push(`/tickets/checkout?${params.toString()}`);
      }
    }

  function handleVirtualSubmit(e: React.FormEvent) {
    e.preventDefault();
    setVirtualSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Virtual Registration Modal */}
      {showVirtualModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="w-full max-w-lg border-4 border-black neo-shadow bg-white">
            <div className="flex items-center justify-between p-6 border-b-4 border-black bg-black text-white">
              <div>
                <p className="font-mono text-[11px] font-black uppercase tracking-widest text-white/50 mb-1">Free Access</p>
                <h3 className="text-[24px] font-black uppercase tracking-tighter leading-none">Register for Virtual</h3>
              </div>
              <button
                onClick={() => { setShowVirtualModal(false); setVirtualSubmitted(false); }}
                className="w-10 h-10 border-2 border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5 stroke-[3]" />
              </button>
            </div>
            {virtualSubmitted ? (
              <div className="p-10 flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 bg-black border-4 border-black flex items-center justify-center">
                  <Check className="w-8 h-8 text-primary stroke-[4]" />
                </div>
                  <h4 className="text-[28px] font-black uppercase tracking-tighter">You&apos;re registered!</h4>
                <p className="font-bold uppercase text-black/60 leading-snug max-w-sm">
                  Livestream links will be sent to <span className="text-black">{virtualForm.email}</span> before the event. See you on 2–3 July 2026.
                </p>
                <button
                  onClick={() => { setShowVirtualModal(false); setVirtualSubmitted(false); }}
                  className="mt-2 px-8 py-4 bg-primary border-4 border-black font-mono text-[13px] font-black uppercase tracking-widest hover:bg-black hover:text-primary transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleVirtualSubmit} className="p-8 flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[11px] font-black uppercase tracking-widest mb-2">First Name *</label>
                    <input
                      required
                      className="w-full border-4 border-black px-4 py-3 font-bold text-[15px] focus:outline-none"
                      value={virtualForm.firstName}
                      onChange={(e) => setVirtualForm({ ...virtualForm, firstName: e.target.value })}
                      placeholder="Vitalik"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[11px] font-black uppercase tracking-widest mb-2">Last Name *</label>
                    <input
                      required
                      className="w-full border-4 border-black px-4 py-3 font-bold text-[15px] focus:outline-none"
                      value={virtualForm.lastName}
                      onChange={(e) => setVirtualForm({ ...virtualForm, lastName: e.target.value })}
                      placeholder="Buterin"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-mono text-[11px] font-black uppercase tracking-widest mb-2">Email Address *</label>
                  <input
                    required
                    type="email"
                    className="w-full border-4 border-black px-4 py-3 font-bold text-[15px] focus:outline-none"
                    value={virtualForm.email}
                    onChange={(e) => setVirtualForm({ ...virtualForm, email: e.target.value })}
                    placeholder="you@example.com"
                  />
                </div>
                <p className="font-mono text-[11px] font-black uppercase tracking-widest text-black/40">
                  Livestream link sent before the event. No payment required.
                </p>
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-black text-primary font-mono text-[14px] font-black uppercase tracking-widest border-4 border-black hover:bg-primary hover:text-black transition-all flex items-center justify-between group mt-2"
                >
                  <span>Register for Free</span>
                  <ArrowUpRight className="w-5 h-5 stroke-[3] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="bg-black text-white border-b-4 border-black">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <div>
              <div className="inline-block bg-primary text-black font-mono text-[13px] font-black uppercase tracking-widest px-3 py-1 border-2 border-black mb-6">
                2–3 July 2026 · Munich
              </div>
              <h1 className="text-[56px] md:text-[96px] font-black uppercase tracking-tighter leading-[0.88] mb-6">
                GET YOUR<br />
                <span className="text-primary">TICKET.</span>
              </h1>
              <p className="text-[18px] md:text-[22px] font-bold uppercase leading-tight text-white/80 max-w-lg">
                Join the first summit dedicated to Ethereum in the physical world. Where digital protocol meets real economy.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:items-end">
              <div className="border-4 border-white/20 p-6 max-w-sm w-full">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-[12px] font-black uppercase tracking-widest text-white/60">4 Ticket Tiers</span>
                </div>
                <p className="font-bold text-white/70 text-[14px] uppercase leading-snug">
                  From free virtual access to full executive immersion — find the tier that fits your goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker tape */}
      <div className="bg-primary border-b-4 border-black overflow-hidden py-3">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4">
              {[
                "Real World Assets", "Decentralized Identity", "DePIN & Atoms",
                "Stablecoins & Policy", "Decentralized AI", "Governance",
                "Trustware", "Hardware Oracles", "Bits to Atoms",
                "Verifiable Cities", "On-Chain Coordination", "Real World Ethereum"
              ].map((item, index) => (
                <React.Fragment key={index}>
                  <span className="text-[18px] md:text-[22px] font-black text-black tracking-tighter uppercase">
                    {item}
                  </span>
                    <span className="text-[18px] md:text-[22px] font-black text-black/30">{"//"}</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Ticket Cards */}
      <section id="tickets" className="bg-white py-20 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-12">
            <h2 className="text-[48px] md:text-[72px] font-black uppercase tracking-tighter leading-none mb-4">
              Choose Your Tier
            </h2>
            <p className="font-mono text-[14px] font-black uppercase tracking-widest text-black/50">
              All in-person tiers include full 2-day access · Munich · 2–3 July 2026
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0 border-4 border-black neo-shadow">
            {tickets.map((tier, idx) => {
              const isBlack = tier.id === "executive";
              const isYellow = tier.id === "full";
              const isSelected = selectedTier === tier.id;

              return (
                <div
                  key={tier.id}
                  onClick={() => setSelectedTier(isSelected ? null : tier.id)}
                  className={`relative flex flex-col cursor-pointer transition-all border-black ${
                    idx < tickets.length - 1 ? "border-b-4 xl:border-b-0 xl:border-r-4" : ""
                  } ${
                    isBlack ? "bg-black text-white" :
                    isYellow ? "bg-primary text-black" :
                    "bg-white text-black"
                  } ${isSelected ? "ring-4 ring-inset ring-black" : ""}`}
                >
                  {tier.tag && (
                    <div className={`absolute top-4 right-4 px-2 py-1 font-mono text-[11px] font-black uppercase tracking-widest border-2 ${
                      isBlack ? "bg-primary text-black border-primary" :
                      isYellow ? "bg-black text-white border-black" :
                      "bg-black text-white border-black"
                    }`}>
                      {tier.tag}
                    </div>
                  )}

                  {/* Header */}
                  <div className={`p-6 border-b-4 ${isBlack ? "border-white/20" : "border-black"}`}>
                    <div className={`w-10 h-10 flex items-center justify-center border-2 mb-4 ${
                      isBlack ? "border-white/40 bg-white/10" :
                      "border-black bg-black"
                    }`}>
                      <tier.icon className={`w-5 h-5 stroke-[3] ${isYellow ? "text-primary" : "text-white"}`} />
                    </div>
                    <h3 className="text-[28px] font-black uppercase tracking-tighter leading-none mb-1">
                      {tier.name}
                    </h3>
                    <p className={`text-[13px] font-bold uppercase leading-snug ${isBlack ? "text-white/60" : "text-black/60"}`}>
                      {tier.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className={`px-6 py-5 border-b-4 ${isBlack ? "border-white/20" : "border-black"}`}>
                    {tier.free ? (
                      <div className="flex items-end gap-1">
                        <span className="text-[48px] font-black leading-none tracking-tighter">FREE</span>
                      </div>
                    ) : (
                      <div className="flex items-end gap-1">
                        <span className="text-[48px] font-black leading-none tracking-tighter">
                          €{tier.price}
                        </span>
                        <span className={`font-mono text-[13px] font-black uppercase mb-2 ${isBlack ? "text-white/40" : "text-black/40"}`}>/ person</span>
                      </div>
                    )}
                  </div>

                  {/* Perks */}
                  <div className="flex-1 p-6">
                    <ul className="flex flex-col gap-3">
                      {tier.perks.map((perk, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className={`flex-shrink-0 w-5 h-5 flex items-center justify-center border-2 mt-0.5 ${
                            isBlack ? "bg-primary border-primary" : "bg-black border-black"
                          }`}>
                            <Check className={`w-3 h-3 stroke-[4] ${isBlack ? "text-black" : isYellow ? "text-primary" : "text-white"}`} />
                          </div>
                          <span className={`font-bold text-[14px] uppercase leading-tight ${isBlack ? "text-white/90" : "text-black"}`}>
                            {perk}
                          </span>
                        </li>
                      ))}
                      {tier.notIncluded.map((perk, i) => (
                        <li key={`no-${i}`} className="flex items-start gap-3 opacity-30">
                          <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center border-2 border-current mt-0.5">
                            <span className="w-3 h-0.5 bg-current" />
                          </div>
                          <span className="font-bold text-[14px] uppercase leading-tight line-through">
                            {perk}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                    {/* CTA */}
                    <div className={`p-6 border-t-4 ${isBlack ? "border-white/20" : "border-black"}`}>
                      <button
                        onClick={(e) => handleTicketCTA(tier, e)}
                        className={`w-full py-4 px-6 font-mono text-[13px] font-black uppercase tracking-widest border-2 flex items-center justify-between group transition-all cursor-pointer ${
                          isBlack
                            ? "bg-primary text-black border-primary hover:bg-white"
                            : isYellow
                            ? "bg-black text-white border-black hover:bg-white hover:text-black"
                            : "bg-primary text-black border-black hover:bg-black hover:text-white"
                        }`}
                      >
                        <span>{tier.cta}</span>
                        <ArrowUpRight className="w-5 h-5 stroke-[3] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </button>
                    </div>
                </div>
              );
            })}
          </div>

          {/* Group / Sponsor CTA */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-0 border-4 border-black neo-shadow">
            <div className="p-8 md:p-10 bg-black text-white border-b-4 md:border-b-0 md:border-r-4 border-black flex flex-col justify-between gap-6">
              <div>
                <div className="inline-block bg-primary text-black font-mono text-[11px] font-black uppercase tracking-widest px-2 py-1 border-2 border-primary mb-4">
                  Group Bookings
                </div>
                <h3 className="text-[28px] md:text-[36px] font-black uppercase tracking-tighter leading-none mb-3">
                  Bringing a team?
                </h3>
                <p className="font-bold uppercase text-white/70 leading-tight">
                  Groups of 3+ receive a 15% discount. Contact us for a custom invoice.
                </p>
              </div>
              <a
                href="mailto:hello@ethis.network"
                className="inline-flex items-center justify-between bg-white text-black px-6 py-4 font-mono text-[13px] font-black uppercase tracking-widest border-2 border-white hover:bg-primary transition-all group"
              >
                <span>Contact for Group Rates</span>
                <ArrowUpRight className="w-5 h-5 stroke-[3] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
            <div className="p-8 md:p-10 bg-primary flex flex-col justify-between gap-6">
              <div>
                <div className="inline-block bg-black text-white font-mono text-[11px] font-black uppercase tracking-widest px-2 py-1 border-2 border-black mb-4">
                  Sponsor Packages
                </div>
                <h3 className="text-[28px] md:text-[36px] font-black uppercase tracking-tighter leading-none mb-3">
                  Represent your brand.
                </h3>
                <p className="font-bold uppercase text-black/70 leading-tight">
                  Sponsorship tiers include ticket allocations, stage presence, and year-round visibility.
                </p>
              </div>
                <a
                  href="https://tally.so/r/jaBZ66"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between bg-black text-white px-6 py-4 font-mono text-[13px] font-black uppercase tracking-widest border-2 border-black hover:bg-white hover:text-black transition-all group"
                >
                  <span>Become a Sponsor</span>
                  <ArrowUpRight className="w-5 h-5 stroke-[3] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
            </div>
          </div>
        </div>
      </section>

      {/* Event Info Strip */}
      <section className="bg-black border-t-4 border-b-4 border-black py-16 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-4 border-white/10">
            {[
              { label: "Date", value: "2–3 July 2026", sub: "Two full summit days" },
              { label: "Location", value: "Munich, Germany", sub: "Venue announced soon" },
              { label: "Format", value: "In-Person & Virtual", sub: "Livestream included" },
            ].map((item, i) => (
              <div key={i} className={`p-8 md:p-10 text-white ${i < 2 ? "border-b-4 sm:border-b-0 sm:border-r-4 border-white/10" : ""}`}>
                <p className="font-mono text-[12px] font-black uppercase tracking-widest text-white/40 mb-2">{item.label}</p>
                <p className="text-[24px] md:text-[32px] font-black uppercase tracking-tighter leading-none text-primary mb-1">{item.value}</p>
                <p className="font-bold uppercase text-white/50 text-[13px]">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included comparison */}
      <section className="bg-white py-20 px-6 md:px-12 border-b-4 border-black">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-[40px] md:text-[64px] font-black uppercase tracking-tighter leading-none mb-12">
              What&apos;s Included
          </h2>
          <div className="overflow-x-auto border-4 border-black neo-shadow">
            <table className="w-full border-collapse" style={{ minWidth: "560px" }}>
              <thead>
                <tr className="border-b-4 border-black">
                  <th className="p-4 md:p-6 text-left bg-white sticky left-0 z-10 min-w-[200px]"></th>
                  {tickets.map((t) => (
                    <th key={t.id} className={`p-4 md:p-6 text-center border-l-4 border-black min-w-[120px] ${
                      t.id === "executive" ? "bg-black text-white" :
                      t.id === "full" ? "bg-primary text-black" :
                      "bg-white text-black"
                    }`}>
              <span className="font-black uppercase text-[16px] md:text-[20px] tracking-tighter">{t.name}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "2-Day ETHis Summit Access",        vals: [false, true, true, true] },
                  { label: "2-Day Festival of Future Access",  vals: [false, true, true, true] },
                  { label: "All Tracks & Sessions",            vals: [true,  true, true, true] },
                  { label: "Recordings Access",                vals: [true,  true, true, true] },
                    { label: "Networking App",                   vals: [false, true, true, true] },
                  { label: "Networking Lounge",                vals: [false, false, false, true] },
                ].map((row, i) => (
                  <tr key={i} className="border-b-4 border-black hover:bg-primary/5">
                    <td className="p-4 md:p-5 font-bold uppercase text-[13px] tracking-tight bg-white sticky left-0 z-10 shadow-[4px_0_0_0_#000]">
                      {row.label}
                    </td>
                    {row.vals.map((v, j) => (
                      <td key={j} className="p-4 md:p-5 text-center border-l-4 border-black">
                        {v ? (
                          <div className="flex justify-center">
                            <div className="w-6 h-6 bg-black flex items-center justify-center">
                              <Check className="w-4 h-4 text-primary stroke-[4]" />
                            </div>
                          </div>
                        ) : (
                          <span className="block w-4 h-0.5 bg-black/15 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td className="p-5 md:p-6 font-black uppercase text-[18px] md:text-[22px] tracking-tighter bg-white sticky left-0 z-10 shadow-[4px_0_0_0_#000]">
                    Price
                  </td>
                  {tickets.map((t) => (
                    <td key={t.id} className={`p-5 md:p-6 text-center border-l-4 border-black ${
                      t.id === "executive" ? "bg-black" : t.id === "full" ? "bg-primary" : ""
                    }`}>
                      <span className={`font-black text-[22px] md:text-[32px] tracking-tighter ${t.id === "executive" ? "text-primary" : "text-black"}`}>
                        {t.free ? "FREE" : `€${t.price}`}
                      </span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 px-6 md:px-12 border-b-4 border-black">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-[40px] md:text-[64px] font-black uppercase tracking-tighter leading-none mb-12">
            FAQ<span className="text-primary">S</span>
          </h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-4 border-black neo-shadow bg-white overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-muted transition-colors cursor-pointer group"
                >
                  <span className="text-[18px] md:text-[22px] font-black uppercase text-black group-hover:translate-x-1 transition-transform">
                    {faq.q}
                  </span>
                  <div className={`flex-shrink-0 ml-4 p-2 border-2 border-black ${openFaq === i ? "bg-black" : "bg-primary"}`}>
                    {openFaq === i ? (
                      <span className="block w-5 h-0.5 bg-white" />
                    ) : (
                      <span className="relative block w-5 h-5">
                        <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 bg-black" />
                        <span className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-black" />
                      </span>
                    )}
                  </div>
                </button>
                <div className={`transition-all duration-300 ${openFaq === i ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}>
                  <div className="p-6 md:p-8 pt-0 border-t-4 border-black bg-muted/30">
                    <p className="text-[17px] md:text-[19px] font-medium text-black leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary border-b-4 border-black py-20 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-[40px] md:text-[64px] font-black uppercase tracking-tighter leading-none mb-4">
              Ready to join?
            </h2>
            <p className="font-bold uppercase text-[18px] leading-tight max-w-xl">
              Be part of the first summit where Ethereum meets the physical world. Munich. July 2026.
            </p>
          </div>
          <div className="flex flex-col gap-4 min-w-fit">
            <a
                href="#tickets"
                className="inline-flex items-center gap-3 bg-black text-white px-8 py-5 font-mono text-[14px] font-black uppercase tracking-widest border-4 border-black hover:bg-white hover:text-black transition-all hover:translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group"
            >
              <Ticket className="w-5 h-5 stroke-[3]" />
              <span>Get Your Ticket</span>
              <ArrowUpRight className="w-5 h-5 stroke-[3] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a
              href="https://tally.so/r/D4VGDN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-black px-8 py-4 font-mono text-[13px] font-black uppercase tracking-widest border-4 border-black hover:bg-black hover:text-white transition-all"
            >
              Apply to Speak
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
