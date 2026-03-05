import React from 'react';
import { Shield, Cpu, Building2, Globe, Landmark } from 'lucide-react';

export function Mission() {
  const themes = [
    {
      title: "Institutional RWAs",
      description: "On-chain settlement for treasuries, private credit, and equities ($100T+ TAM).",
      icon: <Landmark className="w-8 h-8" />
    },
    {
      title: "Physical Infrastructure",
      description: "DePIN-integrated infrastructure markets and coordination.",
      icon: <Cpu className="w-8 h-8" />
    },
    {
      title: "Trustware Operations",
      description: "Cryptographic verification to eliminate intermediary friction and operational overhead.",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Municipal Rails",
      description: "Self-sovereign identity (DID) and Sovereignty first, verifyable Cities for the Ai Era.",
      icon: <Building2 className="w-8 h-8" />
    },
    {
      title: "Defensive Acceleration (d/acc)",
      description: "Engineering for systemic resilience and privacy-first agency.",
      icon: <Globe className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-24 px-4 bg-white border-b-4 border-black">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 mb-20">
              <div className="lg:w-1/2">
                <div className="flex flex-col mb-8">
                  <div className="flex items-center flex-wrap">
                    <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none flex items-center gap-3 flex-wrap">
                      THE 
                      <svg 
                        viewBox="0 0 256 417" 
                        className="h-[40px] md:h-[64px] w-auto fill-current text-black" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z" />
                        <path d="M127.962 0L0 212.32l127.962 75.638V154.158z" fillOpacity="0.7" />
                        <path d="M127.961 312.187l-1.575 1.92V417l1.575-4.628L256 236.587z" />
                        <path d="M127.962 417V312.187L0 236.587z" fillOpacity="0.7" />
                        <path d="M127.961 287.958l127.96-75.637-127.96-58.162z" fillOpacity="0.5" />
                        <path d="M0 212.32l127.962 75.638V154.158z" fillOpacity="0.5" />
                      </svg>
                      <span className="text-primary font-display normal-case">ETHis</span>
                    </h2>
                  </div>
                  <div className="flex items-center gap-4">
                    <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                      MISSION
                    </h2>
                  </div>
                </div>
              <p className="text-2xl font-bold leading-tight uppercase tracking-tight">
              Ethereum has matured from a scrappy cypherpunk experiment to the primary settlement layer for the global physical economy.
            </p>
          </div>
          <div className="lg:w-1/2 flex items-end">
            <p className="text-xl font-medium border-l-4 border-black pl-8 italic">
              "ETHis accelerates the integration of Ethereum's trustware into real-world assets and industrial systems."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themes.map((theme, index) => (
            <div 
              key={index}
              className="group p-8 border-4 border-black bg-white neo-shadow hover:translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <div className="w-16 h-16 bg-primary border-4 border-black flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                {theme.icon}
              </div>
              <h3 className="text-2xl font-black uppercase mb-4 leading-none">
                {theme.title}
              </h3>
              <p className="text-lg font-bold">
                {theme.description}
              </p>
            </div>
          ))}
              <div className="p-8 border-4 border-black bg-black text-white flex flex-col justify-center items-center text-center neo-shadow">
                <div className="flex items-center gap-2 mb-3">
                <svg 
                  viewBox="0 0 256 417" 
                  className="h-[32px] w-auto fill-current text-primary" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z" />
                  <path d="M127.962 0L0 212.32l127.962 75.638V154.158z" fillOpacity="0.7" />
                  <path d="M127.961 312.187l-1.575 1.92V417l1.575-4.628L256 236.587z" />
                  <path d="M127.962 417V312.187L0 236.587z" fillOpacity="0.7" />
                  <path d="M127.961 287.958l127.96-75.637-127.96-58.162z" fillOpacity="0.5" />
                  <path d="M0 212.32l127.962 75.638V154.158z" fillOpacity="0.5" />
                </svg>
                <span className="font-display font-black text-4xl tracking-tighter text-primary">
                  ETHis
                </span>
              </div>
              <p className="text-lg font-bold tracking-tight leading-none uppercase">
                The Real World Ethereum Summit.
              </p>
            </div>
        </div>
      </div>
    </section>
  );
}
