"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { ArrowLeft, ArrowUpRight, X } from "lucide-react";

const TIERS = {
  student:   { name: "Student Pass",   price: 39  },
  full:      { name: "Full Pass",       price: 139 },
  executive: { name: "Executive Pass",  price: 399 },
};

type TierId = keyof typeof TIERS;

function CheckoutContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const tierId = (searchParams.get("tier") ?? "full") as TierId;
  const wixTicketId = searchParams.get("wixTicketId");
  const tier = TIERS[tierId] ?? TIERS.full;

  const [form, setForm] = useState({ firstName: "", lastName: "", org: "", email: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const inputClass = (field: string) =>
    `w-full border-4 px-4 py-3 font-bold text-[15px] bg-white focus:outline-none focus:border-black transition-colors ${
      errors[field] ? "border-red-500" : "border-black"
    }`;

  function validate() {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (!form.email.trim() || !form.email.includes("@")) e.email = "Valid email required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) setShowModal(true);
  }

  async function handleProceed() {
    if (!wixTicketId) {
      setApiError("No ticket definition linked. Please go back and select a ticket.");
      return;
    }
    setLoading(true);
    setApiError("");
    try {
      const res = await fetch("/api/wix-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ticketDefinitionId: wixTicketId,
          quantity: 1,
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.checkoutUrl) {
        setApiError(data.error ?? "Checkout failed. Please try again.");
        setLoading(false);
        setShowModal(false);
        return;
      }
      window.location.href = data.checkoutUrl;
    } catch {
      setApiError("Network error. Please try again.");
      setLoading(false);
      setShowModal(false);
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <section className="bg-black text-white border-b-4 border-black px-6 md:px-12 py-8">
        <div className="max-w-[1280px] mx-auto">
          <button
            onClick={() => router.push("/tickets")}
            className="flex items-center gap-2 font-mono text-[13px] font-black uppercase tracking-widest text-white/60 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4 stroke-[3]" />
            Back to Tickets
          </button>
        </div>
      </section>

      <div className="max-w-[760px] mx-auto px-6 md:px-12 py-16">
        {/* Ticket summary strip */}
        <div className="border-4 border-black bg-primary px-6 py-4 flex items-center justify-between mb-10 neo-shadow">
          <div>
            <p className="font-mono text-[11px] font-black uppercase tracking-widest text-black/50 mb-0.5">Selected ticket</p>
            <p className="font-black text-[22px] uppercase tracking-tighter leading-none">{tier.name}</p>
          </div>
          <p className="font-black text-[40px] tracking-tighter leading-none">€{tier.price}</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="border-4 border-black neo-shadow bg-white">
          <div className="p-8 md:p-10 border-b-4 border-black">
            <h2 className="text-[36px] md:text-[48px] font-black uppercase tracking-tighter leading-none mb-1">
              Your Details
            </h2>
            <p className="font-mono text-[13px] font-black uppercase tracking-widest text-black/40">
              Ticket will be sent to this email
            </p>
          </div>

          <div className="p-8 md:p-10 flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block font-mono text-[12px] font-black uppercase tracking-widest mb-2">
                  First Name *
                </label>
                <input
                  className={inputClass("firstName")}
                  value={form.firstName}
                  onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                  placeholder="Vitalik"
                />
                {errors.firstName && <p className="text-red-500 font-bold text-[12px] mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <label className="block font-mono text-[12px] font-black uppercase tracking-widest mb-2">
                  Last Name *
                </label>
                <input
                  className={inputClass("lastName")}
                  value={form.lastName}
                  onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                  placeholder="Buterin"
                />
                {errors.lastName && <p className="text-red-500 font-bold text-[12px] mt-1">{errors.lastName}</p>}
              </div>
            </div>

            <div>
              <label className="block font-mono text-[12px] font-black uppercase tracking-widest mb-2">
                Organisation
              </label>
              <input
                className={inputClass("org")}
                value={form.org}
                onChange={(e) => setForm({ ...form, org: e.target.value })}
                placeholder="Ethereum Foundation"
              />
            </div>

            <div>
              <label className="block font-mono text-[12px] font-black uppercase tracking-widest mb-2">
                Email Address *
              </label>
              <input
                type="email"
                className={inputClass("email")}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="vitalik@ethereum.org"
              />
              {errors.email && <p className="text-red-500 font-bold text-[12px] mt-1">{errors.email}</p>}
            </div>

            {apiError && (
              <p className="text-red-500 font-bold text-[13px] uppercase border-2 border-red-500 px-4 py-3">
                {apiError}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-5 px-6 bg-black text-primary font-mono text-[14px] font-black uppercase tracking-widest border-4 border-black hover:bg-primary hover:text-black transition-all flex items-center justify-between group mt-2"
            >
              <span>Continue to Payment</span>
              <ArrowUpRight className="w-5 h-5 stroke-[3] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </form>
      </div>

      {/* Confirmation modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="w-full max-w-lg border-4 border-black neo-shadow bg-white">
            {/* Modal header */}
            <div className="flex items-center justify-between p-6 border-b-4 border-black bg-black text-white">
              <div>
                <p className="font-mono text-[11px] font-black uppercase tracking-widest text-white/50 mb-1">
                  Almost there
                </p>
                <h3 className="text-[24px] font-black uppercase tracking-tighter leading-none">
                  Complete Payment
                </h3>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="w-10 h-10 border-2 border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5 stroke-[3]" />
              </button>
            </div>

            {/* Modal body */}
            <div className="p-8 flex flex-col gap-6">
              <div className="border-4 border-black bg-primary px-5 py-4 flex items-center justify-between">
                <span className="font-black text-[18px] uppercase tracking-tight">{tier.name}</span>
                <span className="font-black text-[32px] tracking-tighter leading-none">€{tier.price}</span>
              </div>

              <p className="font-bold text-[15px] uppercase leading-snug text-black/70">
                  You&apos;ll be taken to <span className="text-black">1e9.community</span> to securely complete your
                purchase. Your ticket will be emailed to{" "}
                <span className="text-black">{form.email}</span> once payment is confirmed.
              </p>
              <p className="font-bold text-[13px] uppercase leading-snug text-black/50 border-l-4 border-black pl-4">
                For non German speakers please ensure browser translation is enabled.
              </p>

              <div className="flex flex-col gap-3">
                <button
                  onClick={handleProceed}
                  disabled={loading}
                  className="w-full py-5 px-6 bg-black text-primary font-mono text-[14px] font-black uppercase tracking-widest border-4 border-black hover:bg-primary hover:text-black transition-all flex items-center justify-between group disabled:opacity-60 disabled:cursor-wait"
                >
                  <span>{loading ? "Redirecting…" : "Proceed to 1e9 Payment"}</span>
                  <ArrowUpRight className="w-5 h-5 stroke-[3] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="w-full py-4 px-6 font-mono text-[13px] font-black uppercase tracking-widest border-4 border-black bg-white hover:bg-muted transition-colors"
                >
                  Go Back
                </button>
              </div>

              <p className="font-bold text-[13px] uppercase leading-snug text-black/50 text-center">
                Any questions?{" "}
                <a
                  href="https://t.me/+exMrAvqqJGRlZTI8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black underline underline-offset-2 hover:text-primary transition-colors"
                >
                  Reach out on Telegram
                </a>
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense>
      <CheckoutContent />
    </Suspense>
  );
}
