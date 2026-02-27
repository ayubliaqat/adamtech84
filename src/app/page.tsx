import HomeHero from "@/components/home/HomeHero";
import TechMarquee from "@/components/home/TechMarquee";
import TheDualPath from "@/components/home/TheDualPath";
import EngineeringDNA from "@/components/home/EngineeringDNA";
import ServiceCTA from "@/components/services/ServiceCTA";

export default function HomePage() {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      {/* H1 is inside HomeHero (Crucial for SEO) */}
      <HomeHero />

      {/* Decorative but SEO-friendly Marquee */}
      <TechMarquee />

      {/* SECTION 01: Engineering Identity */}
      <section
        className="section-container"
        aria-label="Engineering DNA and Core Values"
      >
        <EngineeringDNA />
      </section>

      {/* SECTION 02: Educational & Professional Pathways */}
      <section
        className="section-container"
        aria-label="Training and Professional Programs"
      >
        <TheDualPath />
      </section>

      {/* SECTION 03: Final Conversion (CTA) */}
      <section
        className="section-container"
        aria-label="Get Started with AdamTech"
      >
        <ServiceCTA />
      </section>
    </main>
  );
}
