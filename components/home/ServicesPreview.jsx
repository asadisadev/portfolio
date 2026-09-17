import { Section, SectionHeader } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Reveal from "@/components/animations/Reveal";
import ServiceCard from "@/components/services/ServiceCard";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";

export default function ServicesPreview() {
  return (
    <Section id="services" className="border-t border-border">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeader
          eyebrow="Services"
          title="I help businesses and individuals turn ideas into functional digital products."
        />
        <Reveal delay={0.15}>
          <Button href="/services" variant="outline">
            All Services
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.slice(0, 3).map((service, i) => (
          <ServiceCard key={service.slug} service={service} index={i} />
        ))}
      </div>
    </Section>
  );
}
