import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { Mission } from "@/components/sections/sponsorships/mission";
import { WhoWeAre } from "@/components/sections/sponsorships/who-we-are";
import { CoreTeam } from "@/components/sections/sponsorships/core-team";
import { Ecosystem } from "@/components/sections/sponsorships/ecosystem";
import { Viridis } from "@/components/sections/sponsorships/viridis";
import { WhyMunich } from "@/components/sections/sponsorships/why-munich";
import { Audience } from "@/components/sections/sponsorships/audience";
import FestivalDerZukunft from "@/components/sections/festival-der-zukunft";
import TracksSection from "@/components/sections/tracks";
import { SponsorshipTiers } from "@/components/sections/sponsorships/tiers";
import { SponsorCTAButton } from "@/components/sections/sponsorships/sponsor-cta-button";

export const metadata = {
  title: "Sponsorships | ETHis Summit",
  description: "Join the ETHis Summit as a sponsor and bridge the gap between protocol and real economy.",
};

export default function SponsorshipsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <div className="bg-black text-white py-24 px-4 border-b-4 border-black">
            <div className="max-w-[1280px] mx-auto">
                <h1 className="text-[40px] sm:text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                  ETHEREUM IS <span className="text-primary">PHYSICAL.</span>
                </h1>
              <div className="max-w-3xl mb-12">
                  <p className="text-lg md:text-2xl lg:text-3xl font-bold uppercase tracking-tight leading-tight">
                    Bridge the gap between protocol and real world.
                  </p>
              </div>
              <SponsorCTAButton className="bg-primary text-black px-12 py-6 text-2xl font-black uppercase tracking-widest hover:bg-white border-4 border-black transition-all hover:translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block text-center neo-shadow" />
            </div>
        </div>

        {/* Section 1: Mission */}
        <Mission />

        {/* Section 2: Who We Are */}
        <WhoWeAre />

        {/* Section 3: Core Team */}
        <CoreTeam />

        {/* Section 4: Ecosystem / Stakeholders */}
        <Ecosystem />

        {/* Section 4b: Viridis Innovation Park */}
        <Viridis />

        {/* Section 5: Why Munich */}
        <WhyMunich />

        {/* Section 5b: Festival der Zukunft */}
        <FestivalDerZukunft />

        {/* Section 6: Audience */}
        <Audience />

        {/* Section 7: Tracks */}
        <TracksSection />

        {/* Section 8: Sponsorship Tiers */}
        <SponsorshipTiers />
      </main>
      <Footer />
    </div>
  );
}
