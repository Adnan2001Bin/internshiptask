import Card from "@/components/CardSection";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import RecentWork from "@/components/RecentWork";
import ServiceSection from "@/components/ServiceSection";


export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Card />
      <ServiceSection />
      <RecentWork />
      <Featured />
      <Footer />
    </div>

  );
}
