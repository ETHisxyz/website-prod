"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';

function SponsorModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white border-4 border-black neo-shadow flex flex-col"
        style={{ maxHeight: "90vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b-4 border-black bg-primary flex-shrink-0">
          <span className="font-mono text-[12px] font-black uppercase tracking-widest">
            Become a Sponsor
          </span>
          <button
            onClick={onClose}
            className="w-9 h-9 border-2 border-black bg-white flex items-center justify-center hover:bg-black hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4 stroke-[3]" />
          </button>
        </div>
        <div className="flex-1 overflow-hidden">
          <iframe
            src="https://tally.so/embed/jaBZ66?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            className="w-full h-full"
            style={{ minHeight: "500px", border: "none" }}
            title="Become a Sponsor"
            allow="fullscreen"
          />
        </div>
      </div>
    </div>
  );
}

export function SponsorCTAButton({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && <SponsorModal onClose={() => setOpen(false)} />}
      <button
        onClick={() => setOpen(true)}
        className={className}
      >
        Become a Sponsor
      </button>
    </>
  );
}
