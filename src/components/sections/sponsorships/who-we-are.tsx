import React from 'react';

export function WhoWeAre() {
  return (
    <section className="py-24 px-4 bg-primary border-b-4 border-black">
      <div className="max-w-[1280px] mx-auto">
          <div className="border-4 border-black bg-white p-6 md:p-12 neo-shadow">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
              WHO WE ARE:<br />
              <span className="bg-black text-white px-2">THE ETHIS ASSOCIATION</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-6">
                <p className="text-xl md:text-2xl font-bold leading-tight uppercase">
                  A collective of builders and founders dedicated to the convergence of Ethereum technology and physical-world systems.
                </p>
                <p className="text-lg md:text-xl font-medium">
                  We believe that the next phase in Ethereum's adoption curve lies in its ability to anchor real-world assets, 
                  verify physical infrastructure, and provide a neutral layer for global coordination.
                </p>
              </div>
              <div className="space-y-6 md:border-l-4 border-black md:pl-8">
              <p className="text-xl font-medium">
                ETHis bridges the gap between decentralized protocols and the real economy. Our annual Summit coordinates the builders and operators necessary to foster a more sovereign, resilient future.
              </p>
              <div className="pt-4">
                <button className="bg-black text-white px-8 py-4 text-xl font-black uppercase tracking-widest hover:bg-white hover:text-black border-4 border-black transition-colors neo-shadow">
                  Join the Association
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
