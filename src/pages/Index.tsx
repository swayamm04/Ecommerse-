import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import CategoryGrid from "@/components/CategoryGrid";
import DealsSection from "@/components/DealsSection";
import TrustSignals from "@/components/TrustSignals";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <main>
        <HeroBanner />
        <CategoryGrid />
        <DealsSection />
        <TrustSignals />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
