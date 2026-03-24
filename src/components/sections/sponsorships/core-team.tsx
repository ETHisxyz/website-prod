"use client";

import React from "react";
import Image from "next/image";
import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Una Wang",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/68ea0bb2-589b-4a71-9c75-5bebfc51b135/image-1772713535061.png?width=800&height=800&resize=contain",
    linkedin: "https://www.linkedin.com/in/una-w-36b56b22/",
  },
  {
    name: "Donny Lewis",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/68ea0bb2-589b-4a71-9c75-5bebfc51b135/image-1772713756335.png?width=800&height=800&resize=contain",
    linkedin: "https://www.linkedin.com/in/donny-lewis-77b71a13/",
  },
  {
    name: "Kris Millar",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/68ea0bb2-589b-4a71-9c75-5bebfc51b135/image-1772713940332.png?width=800&height=800&resize=contain",
    linkedin: "https://www.linkedin.com/in/kris-millar-42b192235/",
  },
  {
    name: "Raphael Spannocchi",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/68ea0bb2-589b-4a71-9c75-5bebfc51b135/image-1772713922777.png?width=800&height=800&resize=contain",
    linkedin: "https://www.linkedin.com/in/raphael-spannocchi/",
  },
  {
    name: "Josef Z. Koehl",
    image: "/josef-koehl.png",
    linkedin: "https://www.linkedin.com/in/josef5/",
  },
  {
    name: "Dr. Daniel Kliche",
    image: "/daniel-kliche.png",
    linkedin: "https://www.linkedin.com/in/dr-daniel-kliche-2147a49/",
  },
  {
    name: "Anton Hiller",
    image: "/anton-hiller.jpg",
    linkedin: "https://www.linkedin.com/in/anton-hiller-86b03754/",
  },
];

export function CoreTeam() {
  return (
    <section className="py-24 px-4 bg-white border-b-4 border-black">
      <div className="max-w-[1280px] mx-auto">
        <div className="border-4 border-black neo-shadow">
          <div className="bg-black px-8 py-5 border-b-4 border-black">
            <span className="font-mono text-[13px] text-[#ffde03] font-black uppercase tracking-widest">
              The People Behind ETHis
            </span>
          </div>
          <div className="bg-[#f3f4f6] px-8 py-10">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-12">
              COORDINATION TEAM
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-0 border-t-4 border-l-4 border-black">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="border-r-4 border-b-4 border-black bg-white flex flex-col"
                >
                  <div className="aspect-square w-full overflow-hidden border-b-4 border-black relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover"
                      style={{ objectPosition: (member as { objectPosition?: string }).objectPosition ?? "center top" }}
                    />
                  </div>
                  <div className="p-4 flex flex-col gap-2 flex-1">
                    <p className="font-black uppercase text-[11px] leading-tight tracking-tight">
                      {member.name}
                    </p>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-black underline hover:text-[#ffde03] hover:bg-black px-1 transition-colors w-fit whitespace-nowrap"
                      >
                        <Linkedin size={11} strokeWidth={2.5} />
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
