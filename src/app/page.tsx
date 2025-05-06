import Card from "@/components/CardSection";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";


export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Card />
      <ServiceSection />
    </div>

  );
}
