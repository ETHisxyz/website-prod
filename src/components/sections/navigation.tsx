"use client";

import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Sessions', href: '#sessions' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Agenda', href: '#agenda' },
    { name: 'Explore', href: '#explore' },
    { name: 'Sponsors', href: '#sponsors' },
  ];

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed bottom-8 right-8 z-[60] w-16 h-16 bg-primary border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
        aria-label="Open menu"
      >
        <Menu className="w-8 h-8 text-black stroke-[3]" />
      </button>

      {/* Overlay Menu */}
      <div className={`fixed inset-0 z-[100] bg-white transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="h-full flex flex-col border-8 border-black">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-8 border-b-8 border-black bg-accent">
            <span className="font-black text-3xl uppercase tracking-tighter">Menu</span>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-12 h-12 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center"
            >
              <X className="w-6 h-6 text-black stroke-[3]" />
            </button>
          </div>

          {/* Menu Links */}
          <nav className="flex-grow flex flex-col justify-center px-8 md:px-24">
            <ul className="flex flex-col gap-4">
              {links.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-[60px] md:text-[80px] font-black uppercase leading-none tracking-tighter text-black hover:text-primary transition-colors flex items-center gap-4 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity stroke-[6]" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Menu Footer */}
            <div className="p-8 border-t-8 border-black bg-secondary flex flex-col md:flex-row justify-between items-center gap-8">
              <p className="font-mono text-lg font-black uppercase text-black">ETHis 2026</p>
            <a 
              href="#" 
              className="btn-neo bg-white border-black text-black"
            >
              Get Tickets
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;