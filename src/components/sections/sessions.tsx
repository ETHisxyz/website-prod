import React from 'react';
import Image from 'next/image';
import { Play, ChevronRight } from 'lucide-react';

const SessionsSection = () => {
    const sessions = [
      {
        id: 1,
        title: "Defensive acceleration & regulating AI - Vitalik Buterin",
        duration: "1:40:00 MIN",
        thumbnail: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/68ea0bb2-589b-4a71-9c75-5bebfc51b135/image-1771356199779.png",
        link: "https://www.youtube.com/watch?v=ommevJs80MQ&t=240s",
        isActive: true,
      },
      {
        id: 2,
        title: "Building Real-World Infrastructure",
        duration: "30:00 MIN",
        thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=800&auto=format&fit=crop",
        link: "#",
        isActive: false,
      },
      {
        id: 3,
        title: "Decentralized Energy Grids on ETH",
        duration: "25:00 MIN",
        thumbnail: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop",
        link: "#",
        isActive: false,
      },
      {
        id: 4,
        title: "Privacy in the Physical World",
        duration: "35:00 MIN",
        thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
        link: "#",
        isActive: false,
      },
    ];

  return (
    <section id="sessions" className="bg-white border-t-4 border-black">
      <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-12 border-b-4 border-black">
              <div className="col-span-5 p-4 bg-primary border-r-4 border-black">
                <span className="font-mono text-[14px] text-black font-black uppercase tracking-wider">Munich 2026</span>
              </div>
            <div className="col-span-7 p-4 flex items-center gap-2 bg-muted">
              <span className="font-mono text-[14px] text-black font-black uppercase tracking-wider">Curated Sessions</span>
              <div className="w-3 h-3 bg-black"></div>
            </div>
          </div>

          <div className="p-10 md:p-16 bg-white">
            <h2 className="text-[48px] md:text-[64px] font-black leading-[0.9] tracking-[-0.03em] max-w-lg text-black uppercase">
              Explore <br />
              Themes
            </h2>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-8 p-10 md:p-12 bg-muted">
            <a
              href={sessions[0].link}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative aspect-video w-full border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden group cursor-pointer bg-black"
            >
              <Image
                src={sessions[0].thumbnail}
                alt="Main Session"
                fill
                className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[84px] h-[84px] bg-primary border-4 border-black flex items-center justify-center transform transition-transform group-hover:scale-110 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Play className="fill-black text-black translate-x-1 stroke-[3]" size={32} />
                </div>
              </div>
            </a>
              <div className="mt-8 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
                  <h3 className="text-2xl md:text-4xl font-black tracking-tight text-black uppercase underline decoration-primary decoration-8 underline-offset-4">{sessions[0].title}</h3>
                  <a
                    href={sessions[0].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 flex items-center gap-2 font-mono text-[14px] font-black uppercase tracking-wider text-black hover:bg-primary px-4 py-2 border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] self-start sm:self-auto"
                  >
                    Watch <ChevronRight size={18} strokeWidth={4} />
                  </a>
                </div>
            </div>

            <div className="md:col-span-4 flex flex-col bg-white">
              <div className="flex-grow">
                {sessions.map((session) => (
                  <a
                    key={session.id}
                    href={session.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex gap-4 p-6 cursor-pointer transition-colors hover:bg-primary/20 group ${session.isActive ? 'bg-primary' : ''}`}
                  >
                  <div className="relative w-[100px] h-[56px] flex-shrink-0 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden bg-black">
                    <Image
                      src={session.thumbnail}
                      alt={session.title}
                      fill
                      className="object-cover opacity-80"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="fill-white text-white stroke-[3]" size={14} />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-[14px] font-black leading-tight line-clamp-2 mb-1 group-hover:underline uppercase text-black">
                      {session.title}
                    </h4>
                    <span className="text-[11px] font-mono font-black text-black/60 uppercase tracking-wider">
                      {session.duration}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SessionsSection;
