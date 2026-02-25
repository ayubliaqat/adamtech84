import ServiceHero from "@/components/services/ServiceHero";
import ServiceConsultancy from "@/components/services/ServiceConsultancy";
import ServiceTraining from "@/components/services/ServiceTraining";
import ServiceCTA from "@/components/services/ServiceCTA";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="pt-4 md:pt-4"> {/* Space for fixed header */}
        <ServiceHero />
        <ServiceConsultancy />
        <ServiceTraining />
        <ServiceCTA />
      </div>
    </main>
  );
}