import Navbar from "@/components/sections/navbar";
import HeroSection from "@/components/sections/hero";
import RecapVisual from "@/components/sections/recap-visual";
import Agenda from "@/components/sections/agenda";
import NextYearPromo from "@/components/sections/next-year-promo";
import SessionsSection from "@/components/sections/sessions";
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
          <RecapVisual />
          <NextYearPromo />
          <SessionsSection />
          <ExploreSection />
          <Agenda />
          <Speakers />
          <Sponsors />
          <FAQ />
          <SurveyCTA />
      </main>
      <Footer />
    </div>
  );
}
