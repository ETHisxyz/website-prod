import React from 'react';
import { Factory, GraduationCap, Building, Server } from 'lucide-react';

const points = [
  {
    title: "Engineering Density",
    description: "The hub for industrial grade engineering and deep-tech. Home to global leaders like Siemens, BMW, and Infineon.",
    icon: <Factory className="w-8 h-8" />,
  },
  {
    title: "Technical Integration",
    description: "Academic stronghold. Strategic proximity to the Technical University of Munich (TUM) and Fraunhofer Institutes.",
    icon: <GraduationCap className="w-8 h-8" />,
  },
  {
    title: "Sovereign Infrastructure",
    description: "Regional leader in the 'Deutschland Stack', AI factories and sovereign computing power.",
    icon: <Server className="w-8 h-8" />,
  },
  {
    title: "The Venue",
    description: "Hosted at the Deutsches Museum. The Biggest Technical and Science Museum in the World. A historic site symbolizing the intersection of society and cutting-edge technology.",
    icon: <Building className="w-8 h-8" />,
  },
];


export function WhyMunich() {
  return (
    <section className="py-24 px-4 bg-white border-b-4 border-black">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-4 leading-none">
          WHY MUNICH? <br />
            <span className="bg-primary px-2">EUROPE&apos;S INDUSTRIAL HEARTLAND.</span>
        </h2>
        <p className="text-xl font-bold uppercase tracking-tight mb-16 text-black/70">
          Munich is at the heart of the global physical economy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {points.map((point, index) => (
            <div
              key={index}
              className="p-4 md:p-8 border-4 border-black bg-white neo-shadow flex gap-4 md:gap-6"
            >
              <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-black text-white border-4 border-black flex items-center justify-center">
                {point.icon}
              </div>
              <div className="min-w-0">
                <h3 className="text-xl md:text-2xl font-black uppercase mb-2 leading-none break-words">
                  {point.title}
                </h3>
                <p className="text-base md:text-lg font-bold leading-tight break-words text-black/80">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
