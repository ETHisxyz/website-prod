"use client";

import React, { useState, useEffect } from "react";
import { Ticket, X, Menu } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navLinks = [
    { name: "Sessions", href: "/#tracks" },
    { name: "Speakers", href: "/#speakers" },
    { name: "Partners", href: "/#sponsors" },
    { name: "FAQ", href: "/#faq" },
  ];

  return (
    <div className="relative z-50">
      <header
        className={`fixed top-0 left-0 w-full transition-all duration-300 h-[72px] flex items-center justify-center ${
          scrolled ? "bg-primary border-b-4 border-black" : "bg-white"
        }`}
      >
        <div className="w-full max-w-[1280px] px-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href="/"
              className="flex items-center gap-2 hover:translate-x-1 hover:-translate-y-1 transition-transform group"
            >
              <svg
                viewBox="0 0 256 417"
                className="h-[24px] w-auto fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z" />
                <path d="M127.962 0L0 212.32l127.962 75.638V154.158z" fillOpacity="0.7" />
                <path d="M127.961 312.187l-1.575 1.92V417l1.575-4.628L256 236.587z" />
                <path d="M127.962 417V312.187L0 236.587z" fillOpacity="0.7" />
                <path d="M127.961 287.958l127.96-75.637-127.96-58.162z" fillOpacity="0.5" />
                <path d="M0 212.32l127.962 75.638V154.158z" fillOpacity="0.5" />
              </svg>
              <span className="font-display font-black text-[32px] tracking-tighter antialiased text-black">
                ETHis
              </span>
            </a>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center h-full">
            <ul className="flex items-center gap-4 h-full">
              {navLinks.map((link) => (
                <li key={link.name} className="h-full">
                  <a
                    href={link.href}
                    className="flex items-center px-4 h-[72px] font-mono text-[14px] font-black uppercase tracking-wider text-black hover:bg-primary/20 transition-colors relative group"
                  >
                    <span className="block group-hover:underline decoration-4">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center h-full gap-3">
            {/* Register CTA */}
            <a
              href="/tickets#tickets"
              className="group flex items-center gap-1.5 px-3 h-[36px] font-mono text-[12px] font-black uppercase tracking-wider text-black bg-primary border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
                <span>Get Tickets</span>
              <Ticket className="w-3.5 h-3.5 stroke-[3]" />
            </a>

            {/* Mobile burger */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 border-2 border-black bg-white focus:outline-none"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5 stroke-[3]" />
              ) : (
                <Menu className="w-5 h-5 stroke-[3]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white flex flex-col" style={{ top: 72 }}>
          <nav className="flex flex-col border-t-4 border-black">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between px-6 py-5 font-mono text-[16px] font-black uppercase tracking-widest text-black border-b-4 border-black hover:bg-primary transition-colors"
              >
                <span>{link.name}</span>
                <span className="text-lg">↗</span>
              </a>
            ))}
          </nav>
          <div className="p-6">
            <a
              href="/tickets#tickets"
              onClick={() => setMobileOpen(false)}
              className="w-full flex items-center justify-between px-6 py-4 font-mono text-[14px] font-black uppercase tracking-widest text-black bg-primary border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <span>Get Your Ticket</span>
              <Ticket className="w-5 h-5 stroke-[3]" />
            </a>
          </div>
        </div>
      )}

      {/* Spacer */}
      <div className="h-[72px]"></div>
    </div>
  );
};

export default Navbar;
