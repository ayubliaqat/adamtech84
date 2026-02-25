import HomeHero from "@/components/home/HomeHero";
import TechMarquee from "@/components/home/TechMarquee";
import TheDualPath from "@/components/home/TheDualPath";
import ServiceCTA from "@/components/services/ServiceCTA"; // Re-use from earlier // Your updated stacked footer

export default function HomePage() {
  return (
    <main className="bg-background min-h-screen">
      <HomeHero />
      <TechMarquee />
      <TheDualPath />
      <div className="py-6 md:py-12"> {/* Space for fixed header */}
        <ServiceCTA />
      </div>
    </main>
  );
}