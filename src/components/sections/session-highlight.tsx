"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, ArrowUpRight, ChevronRight } from "lucide-react";

interface Session {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
  poster: string;
}

const sessions: Session[] = [
  {
    id: "opening-keynote",
    title: "Opening Keynote",
    duration: "1:00:06 MIN",
    thumbnail: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68ea0bb2-589b-4a71-9c75-5bebfc51b135-githubuniverse-com/assets/images/video-1-2.webp",
    poster: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68ea0bb2-589b-4a71-9c75-5bebfc51b135-githubuniverse-com/assets/images/video-1-poster-1.webp",
  },
  {
    id: "day-2-keynote",
    title: "Day 2 Keynote",
    duration: "40:34 MIN",
    thumbnail: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68ea0bb2-589b-4a71-9c75-5bebfc51b135-githubuniverse-com/assets/images/video-2-3.webp",
    poster: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68ea0bb2-589b-4a71-9c75-5bebfc51b135-githubuniverse-com/assets/images/video-2-3.webp",
  },
  {
    id: "metrics-to-impact",
    title: "From metrics to impact: Turn GitHub Copilot data into business value",
    duration: "25:07 MIN",
    thumbnail: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68ea0bb2-589b-4a71-9c75-5bebfc51b135-githubuniverse-com/assets/images/video-3-4.webp",
    poster: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68ea0bb2-589b-4a71-9c75-5bebfc51b135-githubuniverse-com/assets/images/video-3-4.webp",
  },
  {
    id: "build-apps-agents",
    title: "Build apps & agents that scale with VS Code, GitHub Copilot, and Agent Framework",
    duration: "31:11 MIN",
    thumbnail: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68ea0bb2-589b-4a71-9c75-5bebfc51b135-githubuniverse-com/assets/images/video-4-5.webp",
    poster: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/68ea0bb2-589b-4a71-9c75-5bebfc51b135-githubuniverse-com/assets/images/video-4-5.webp",
  },
];

export default function SessionHighlight() {
  const [activeSession, setActiveSession] = useState<Session>(sessions[0]);

  return (
    <section className="bg-white border-t border-[#d0d7de]">
      <div className="max-w-[1440px] mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#d0d7de]">
            <div className="p-8 md:p-12 lg:p-16 border-r border-[#d0d7de]">
               <div className="flex items-center gap-2 mb-8">
                <span className="font-mono text-[12px] tracking-widest text-[#57606a]">2026</span>
              </div>
            <h2 className="text-[64px] md:text-[72px] font-bold leading-[1.1] tracking-tight text-black max-w-[500px]">
              Browse this year’s sessions
            </h2>
          </div>
          <div className="p-8 md:p-12 lg:p-16 flex items-start justify-between">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[12px] tracking-widest text-[#57606a]">HIGHLIGHTS</span>
              <div className="w-2 h-2 bg-[#1f883d]"></div>
            </div>
          </div>
        </div>

        {/* Video Browser Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Main Video Display */}
          <div className="lg:col-span-8 p-8 md:p-12 border-r border-[#d0d7de]">
            <div className="relative aspect-video w-full bg-black group cursor-pointer overflow-hidden rounded-[4px]">
              <Image
                src={activeSession.poster}
                alt={activeSession.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 transition-transform duration-300 group-hover:scale-110">
                  <Play className="text-white fill-white ml-1" size={32} />
                </div>
              </div>
            </div>
            <div className="mt-8 flex items-center justify-between">
              <h3 className="text-[32px] font-semibold text-black leading-tight">
                {activeSession.title}
              </h3>
              <button className="flex items-center gap-2 group">
                <span className="font-mono text-[12px] font-bold tracking-widest">NEXT</span>
                <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Sidebar Playlist */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="flex-grow border-b border-[#d0d7de]">
              {sessions.map((session) => (
                <button
                  key={session.id}
                  onClick={() => setActiveSession(session)}
                  className={`w-full flex items-start gap-4 p-6 border-b border-[#d0d7de] transition-colors text-left hover:bg-[#f6f8fa] ${
                    activeSession.id === session.id ? "bg-[#f6f8fa] border-l-4 border-l-[#1f883d]" : "border-l-4 border-l-transparent"
                  }`}
                >
                  <div className="relative w-24 h-14 flex-shrink-0 bg-black overflow-hidden rounded-[2px]">
                    <Image
                      src={session.thumbnail}
                      alt={session.title}
                      fill
                      className="object-cover opacity-80"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="text-white fill-white size-4" />
                    </div>
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-black leading-snug line-clamp-2 mb-1">
                      {session.title}
                    </p>
                    <p className="font-mono text-[10px] text-[#57606a] tracking-wider uppercase">
                      {session.duration}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Footer Action */}
            <div className="p-6">
              <a
                href="#"
                className="flex items-center justify-center w-full py-6 px-4 bg-[#f6f8fa] border border-[#d0d7de] rounded-[6px] group transition-all hover:border-[#1f883d]"
              >
                <span className="font-mono text-[12px] font-bold tracking-widest mr-2 uppercase">
                  See all sessions
                </span>
                <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}