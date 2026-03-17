"use client";

import React from "react";
import Image from "next/image";

type Partner = { name: string; url: string; logo: string | null; darkLogo?: boolean };

const partners: Partner[] = [
  { name: "1E9 Denkfabrik", url: "https://1e9.community", logo: "https://logo.clearbit.com/1e9.community" },
  { name: "Deutsches Museum", url: "https://www.deutsches-museum.de", logo: "https://logo.clearbit.com/deutsches-museum.de" },
  { name: "Forum der Zukunft", url: "https://www.forum-der-zukunft.de", logo: null },
  { name: "BMW Group", url: "https://www.bmwgroup.com", logo: "https://logo.clearbit.com/bmwgroup.com" },
  { name: "Siemens", url: "https://www.siemens.com", logo: "https://logo.clearbit.com/siemens.com" },
  { name: "Siemens Energy", url: "https://www.siemens-energy.com", logo: "https://logo.clearbit.com/siemens-energy.com" },
  { name: "Infineon", url: "https://www.infineon.com", logo: "https://logo.clearbit.com/infineon.com" },
  { name: "Intel", url: "https://www.intel.com", logo: "https://logo.clearbit.com/intel.com" },
  { name: "BlackRock", url: "https://www.blackrock.com", logo: "https://logo.clearbit.com/blackrock.com" },
  { name: "JPMorgan", url: "https://www.jpmorgan.com", logo: "https://logo.clearbit.com/jpmorgan.com" },
  { name: "Wissenschaftsjahr 2026 (BMBF)", url: "https://www.bmbf.de", logo: "https://logo.clearbit.com/bmbf.de" },
  { name: "City of Munich", url: "https://www.muenchen.de", logo: "https://logo.clearbit.com/muenchen.de" },
  { name: "UnternehmerTUM", url: "https://www.unternehmertum.de", logo: "https://logo.clearbit.com/unternehmertum.de" },
  { name: "TUM Venture Labs", url: "https://www.tum-venture-labs.de", logo: "https://logo.clearbit.com/tum-venture-labs.de" },
  { name: "ESA", url: "https://www.esa.int", logo: "https://logo.clearbit.com/esa.int" },
  { name: "Filmfest München", url: "https://www.filmfest-muenchen.de", logo: "https://logo.clearbit.com/filmfest-muenchen.de" },
  { name: "XR HUB Bavaria", url: "https://xrhub-bavaria.de", logo: "https://logo.clearbit.com/xrhub-bavaria.de" },
  { name: "Residenztheater", url: "https://www.residenztheater.de", logo: "https://logo.clearbit.com/residenztheater.de" },
  { name: "FFF Bayern", url: "https://www.fff-bayern.de", logo: "https://logo.clearbit.com/fff-bayern.de" },
  { name: "Anita Keijzer Foundation", url: "https://www.anitakeijzerfoundation.org", logo: null },
  { name: "Süddeutsche Zeitung", url: "https://www.sueddeutsche.de", logo: "https://logo.clearbit.com/sueddeutsche.de" },
  { name: "Bayerischer Rundfunk (BR)", url: "https://www.br.de", logo: "https://logo.clearbit.com/br.de" },
  { name: "World Fund", url: "https://world.fund", logo: "https://logo.clearbit.com/world.fund" },
  { name: "Pale Blue Dot", url: "https://www.paleblue.vc", logo: "https://logo.clearbit.com/paleblue.vc" },
  { name: "BMW Foundation Herbert Quandt", url: "https://www.bmw-foundation.org", logo: "https://logo.clearbit.com/bmw-foundation.org" },
  { name: "FUTURE FORUM by BMW Welt", url: "https://www.bmw-welt.com", logo: "https://logo.clearbit.com/bmw-welt.com" },
];

function PartnerLogo({ logo, name, darkLogo }: { logo: string | null; name: string; darkLogo?: boolean }) {
  const [failed, setFailed] = React.useState(false);
  if (!logo || failed) return null;
  return (
    <span className={darkLogo ? "inline-flex items-center justify-center rounded-sm bg-black px-1" : ""}>
      <Image
        src={logo}
        alt={name}
        width={20}
        height={20}
        className="w-5 h-5 object-contain flex-shrink-0"
        onError={() => setFailed(true)}
        unoptimized
      />
    </span>
  );
}

export default function FestivalPartners() {
  return (
    <section className="bg-white border-t-4 border-black w-full p-8 md:p-12">
      <h3
        className="font-black uppercase tracking-tighter text-black mb-2"
        style={{ fontSize: "clamp(28px, 3vw, 40px)" }}
      >
        Festival Partners
      </h3>
      <div className="h-[4px] w-24 bg-[#ffde03] mb-8"></div>
      <div className="flex flex-wrap gap-3">
        {partners.map((partner) => (
          <a
            key={partner.name}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border-2 border-black bg-white shadow-[3px_3px_0px_0px_#000] hover:bg-[#ffde03] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
          >
            <PartnerLogo logo={partner.logo} name={partner.name} darkLogo={partner.darkLogo} />
            <span className="font-mono font-black text-[12px] uppercase tracking-wider text-black whitespace-nowrap">
              {partner.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
