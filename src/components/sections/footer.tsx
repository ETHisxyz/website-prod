import React from 'react';
import { Twitter, Youtube, Linkedin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-[1280px] mx-auto p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16">
            {/* Logo and Brand */}
                <div className="col-span-1 md:col-span-1">
                  <div className="flex items-center gap-2 mb-6">
                    <svg 
                      viewBox="0 0 256 417" 
                      className="h-[32px] w-auto fill-current text-black" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z" />
                      <path d="M127.962 0L0 212.32l127.962 75.638V154.158z" fillOpacity="0.7" />
                      <path d="M127.961 312.187l-1.575 1.92V417l1.575-4.628L256 236.587z" />
                      <path d="M127.962 417V312.187L0 236.587z" fillOpacity="0.7" />
                      <path d="M127.961 287.958l127.96-75.637-127.96-58.162z" fillOpacity="0.5" />
                      <path d="M0 212.32l127.962 75.638V154.158z" fillOpacity="0.5" />
                    </svg>
                    <span className="font-black text-4xl tracking-tighter text-black">ETHis</span>
                  </div>
                  <p className="text-black font-bold uppercase leading-tight max-w-[200px] bg-secondary p-4 border-4 border-black neo-shadow">
                    The real world Ethereum summit.
                  </p>
              </div>


          {/* Nav Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 col-span-1 md:col-span-3 gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="font-mono text-[14px] font-black uppercase tracking-widest text-black bg-accent px-2 border-2 border-black inline-block self-start">Events</h4>
                <ul className="flex flex-col gap-2">
                      <li><a href="#" className="font-bold hover:underline decoration-primary decoration-4 uppercase text-black">Sessions</a></li>
                      <li><a href="#" className="font-bold hover:underline decoration-primary decoration-4 uppercase text-black">Speakers</a></li>
                      <li><a href="#" className="font-bold hover:underline decoration-primary decoration-4 uppercase text-black">Agenda</a></li>
                      <li><a href="/#sponsors" className="font-bold hover:underline decoration-primary decoration-4 uppercase text-black">Partners</a></li>
                </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-mono text-[14px] font-black uppercase tracking-widest text-black bg-primary px-2 border-2 border-black inline-block self-start">Organization</h4>
              <ul className="flex flex-col gap-2">
                <li><a href="#" className="font-bold hover:underline decoration-secondary decoration-4 uppercase text-black">About Us</a></li>
                  <li><a href="#" className="font-bold hover:underline decoration-secondary decoration-4 uppercase text-black">Volunteer</a></li>
                <li><a href="#" className="font-bold hover:underline decoration-secondary decoration-4 uppercase text-black">Privacy</a></li>
                <li><a href="#" className="font-bold hover:underline decoration-secondary decoration-4 uppercase text-black">Terms</a></li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-mono text-[14px] font-black uppercase tracking-widest text-black bg-secondary px-2 border-2 border-black inline-block self-start">Social</h4>
                <div className="flex gap-4">
                  <a href="https://x.com/ethisnetwork" target="_blank" rel="noopener noreferrer" className="p-3 border-4 border-black bg-white neo-shadow hover:translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                    <Twitter size={24} strokeWidth={3} className="text-black" />
                  </a>

                <a href="#" className="p-3 border-4 border-black bg-white neo-shadow hover:translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <Youtube size={24} strokeWidth={3} className="text-black" />
                </a>
                <a href="#" className="p-3 border-4 border-black bg-white neo-shadow hover:translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <Linkedin size={24} strokeWidth={3} className="text-black" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
          <div className="pt-12 border-t-4 border-black flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-6 font-mono text-[12px] font-black uppercase tracking-widest text-black">
              <span className="normal-case">© 2026 ETHis</span>
              <a href="#" className="hover:underline decoration-accent decoration-2">Privacy Policy</a>
              <a href="#" className="hover:underline decoration-accent decoration-2">Terms of Service</a>
            </div>

          
            <div className="flex items-center gap-4">
               <span className="font-mono text-[14px] font-black uppercase text-black">Powered by</span>
               <div className="bg-white border-4 border-black p-2 neo-shadow">
                  <Linkedin size={20} strokeWidth={3} className="text-black" />
               </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
