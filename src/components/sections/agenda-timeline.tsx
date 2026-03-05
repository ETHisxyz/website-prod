import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface AgendaItem {
  time?: string;
  title: string;
  description: string;
}

interface DaySchedule {
  date: string;
  dayLabel: string;
  events: AgendaItem[];
}

const agendaData: DaySchedule[] = [
  {
    date: "July 1",
    dayLabel: "Day 00",
    events: [
      {
        time: "8:00 AM - 5:00 PM",
        title: "Invite-only special programming",
        description: "If you're on the list, we’ll be in touch soon!"
      }
    ]
  },
  {
    date: "July 2",
    dayLabel: "Day 01",
    events: [
      {
        time: "8:00 AM",
        title: "Doors open at Munich Center",
        description: "Pick up your badge, breakfast, and your favorite morning beverage."
      },
      {
        time: "9:00 AM - 5:30 PM",
        title: "Sessions, demos, and surprises",
        description: "Keynote, sessions, demos & donuts, interactive experiences, The Shop, and more."
      },
      {
        time: "5:30 PM",
        title: "Optional evening events",
        description: "Join ETHis and our partners at a selection of evening events."
      }
    ]
  },
  {
    date: "July 3",
    dayLabel: "Day 02",
    events: [
      {
        time: "8:30 AM",
        title: "Doors open at Munich Center",
        description: "Grab breakfast, your favorite drink, and reconnect with friends you made on day 1."
      },
      {
        time: "10:00 AM - 5:00 PM",
        title: "Sessions, demos, and surprises",
        description: "Keynote, sessions, demos & donuts, interactive experiences, The Shop, and more."
      },
      {
        time: "5:00 PM",
        title: "Universe sessions end",
        description: "It’s not “goodbye” but “see you next year!”"
      }
    ]
  },
  {
    date: "July 4",
    dayLabel: "Day 03",
    events: [
      {
        time: "8:00 AM - 5:00 PM",
        title: "Ethereum Certification testing",
        description: "Sign up to take an on-site Ethereum certification exam, included with your in-person pass."
      }
    ]
  }
];

const AgendaTimeline = () => {
  return (
    <section className="w-full bg-white border-t border-brand-gray-border">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row">
        {/* Left Column - Heading */}
        <div className="w-full md:w-[300px] lg:w-[430px] p-8 md:p-12 lg:p-16 flex flex-col border-r border-brand-gray-border">
          <h2 className="text-[64px] md:text-[72px] font-bold leading-[1.1] mb-12">
            Agenda
          </h2>
          
          <div className="mt-auto">
            <a 
              href="https://reg.githubuniverse.com/flow/github/universe25/attendee-portal/page/sessioncatalog"
              className="flex items-center justify-between w-full px-5 py-4 bg-[#f6f8fa] border border-[#d0d7de] rounded-lg group hover:border-[#1f883d] transition-colors"
            >
              <span className="font-mono text-[12px] uppercase tracking-wider font-semibold">
                SEE FULL AGENDA
              </span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Right Column - Timeline Grid */}
        <div className="flex-1 flex flex-col">
          {agendaData.map((day, idx) => (
            <div 
              key={day.dayLabel} 
              className={`flex flex-col md:flex-row border-b border-brand-gray-border last:border-b-0 min-h-[220px]`}
            >
              {/* Day Identifier */}
              <div className="w-full md:w-[280px] p-8 md:p-10 border-b md:border-b-0 md:border-r border-brand-gray-border">
                <h3 className="text-[20px] font-semibold text-black">
                  {day.date}: {day.dayLabel}
                </h3>
              </div>

              {/* Day Events */}
              <div className="flex-1 p-8 md:p-10 space-y-12">
                {day.events.map((event, eventIdx) => (
                  <div key={eventIdx} className="flex flex-col space-y-2 max-w-[600px]">
                    {event.time && (
                      <span className="font-mono text-[12px] uppercase tracking-widest text-muted-foreground font-medium">
                        {event.time}
                      </span>
                    )}
                    <h4 className="text-[24px] font-semibold leading-snug">
                      {event.title}
                    </h4>
                    <p className="text-[16px] text-[#57606a] leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgendaTimeline;