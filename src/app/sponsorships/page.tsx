import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { Mission } from "@/components/sections/sponsorships/mission";
import { WhoWeAre } from "@/components/sections/sponsorships/who-we-are";
import { WhyMunich } from "@/components/sections/sponsorships/why-munich";
import { Audience } from "@/components/sections/sponsorships/audience";
import { SponsorshipTiers } from "@/components/sections/sponsorships/tiers";

export const metadata = {
  title: "Sponsorships | ETHis Summit",
  description: "Join the ETHis Summit as a sponsor and help build the future of Ethereum and the physical economy.",
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
                    Bridge the gap between protocol and real economy. Access the $100T+ RWA frontier.
                  </p>
              </div>
              <a 
                href="https://tally.so/r/jaBZ66"
                className="bg-primary text-black px-12 py-6 text-2xl font-black uppercase tracking-widest hover:bg-white border-4 border-black transition-all hover:translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block text-center neo-shadow"
              >
                Become a Sponsor
              </a>
            </div>
        </div>

        {/* Section 1: Mission */}
        <Mission />

        {/* Section 2: Who We Are */}
        <WhoWeAre />

        {/* Section 3: Why Munich */}
        <WhyMunich />

        {/* Section 4: Audience */}
        <Audience />

        {/* Section 5: Deliverables */}
        <SponsorshipTiers />
      </main>
      <Footer />
    </div>
  );
}
