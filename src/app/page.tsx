import Navbar from "@/components/sections/navbar";
import HeroSection from "@/components/sections/hero";
import RecapVisual from "@/components/sections/recap-visual";
import NextYearPromo from "@/components/sections/next-year-promo";
import FestivalDerZukunft from "@/components/sections/festival-der-zukunft";
import TracksSection from "@/components/sections/tracks";
import SessionsSection from "@/components/sections/sessions";
import FestivalPartners from "@/components/sections/festival-partners";
import ExploreSection from "@/components/sections/explore-cards";
import Speakers from "@/components/sections/speakers";
import Sponsors from "@/components/sections/sponsors";
import FAQ from "@/components/sections/faq";
import SurveyCTA from "@/components/sections/survey-cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
        <main>
            <HeroSection />
            <FestivalDerZukunft />
            <RecapVisual />
            <FestivalPartners />
            <NextYearPromo />
            <TracksSection />
            <SessionsSection />
            <ExploreSection />
          <Speakers />
          <Sponsors />
          <FAQ />
          <SurveyCTA />
      </main>
      <Footer />
    </div>
  );
}
