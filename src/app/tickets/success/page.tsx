"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { Check, ArrowUpRight } from "lucide-react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("orderNumber") ?? searchParams.get("orderId");
  const eventId = searchParams.get("eventId");

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="bg-black text-white border-b-4 border-black px-6 md:px-12 py-8">
        <div className="max-w-[1280px] mx-auto">
          <p className="font-mono text-[13px] font-black uppercase tracking-widest text-white/40">
            ETHis Summit 2026
          </p>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-2xl mx-auto border-4 border-black neo-shadow">

          {/* Green header */}
          <div className="bg-[#ffde03] border-b-4 border-black p-8 md:p-12 flex items-center gap-6">
            <div className="w-16 h-16 flex-shrink-0 border-4 border-black bg-black flex items-center justify-center">
              <Check className="w-8 h-8 text-[#ffde03] stroke-[4]" />
            </div>
            <div>
              <p className="font-mono text-[12px] font-black uppercase tracking-widest mb-1">Payment Confirmed</p>
              <h1 className="text-[36px] md:text-[48px] font-black uppercase tracking-tighter leading-none">
                You&apos;re In.
              </h1>
            </div>
          </div>

          {/* Body */}
          <div className="p-8 md:p-12 bg-white">
            <p className="font-bold text-[16px] uppercase text-black/70 leading-relaxed mb-8">
              Your ticket is confirmed. Check your email for your ticket and receipt.
            </p>

            {(orderNumber || eventId) && (
              <div className="border-4 border-black p-6 bg-muted/30 mb-8 flex flex-col gap-3">
                {orderNumber && (
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[12px] font-black uppercase tracking-widest text-black/40">Order Number</span>
                    <span className="font-black text-[16px] uppercase">{orderNumber}</span>
                  </div>
                )}
                {eventId && (
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[12px] font-black uppercase tracking-widest text-black/40">Event ID</span>
                    <span className="font-black text-[14px] uppercase text-black/60">{eventId}</span>
                  </div>
                )}
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[12px] font-black uppercase tracking-widest text-black/40">Date</span>
                  <span className="font-black text-[14px] uppercase">2–3 July 2026</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[12px] font-black uppercase tracking-widest text-black/40">Venue</span>
                  <span className="font-black text-[14px] uppercase">Munich, Germany</span>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/"
                className="flex-1 py-4 px-6 border-4 border-black bg-black text-[#ffde03] font-mono text-[13px] font-black uppercase tracking-widest hover:bg-[#ffde03] hover:text-black transition-all flex items-center justify-between group"
              >
                <span>Back to Home</span>
                <ArrowUpRight className="w-4 h-4 stroke-[3] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              <Link
                href="/tickets"
                className="flex-1 py-4 px-6 border-4 border-black bg-white font-mono text-[13px] font-black uppercase tracking-widest hover:bg-muted transition-colors flex items-center justify-center"
              >
                Buy More Tickets
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense>
      <SuccessContent />
    </Suspense>
  );
}
