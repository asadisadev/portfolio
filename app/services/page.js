import { Section, SectionHeader } from "@/components/ui/Section";
import ServiceCard from "@/components/services/ServiceCard";
import { services } from "@/data/services";
import Reveal from "@/components/animations/Reveal";
import Button from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Services",
  description:
    "Website development, full-stack applications, AI integrations and backend/API development.",
};

export default function ServicesPage() {
  return (
    <>
      <Section className="!pt-16">
        <SectionHeader
          eyebrow="Services"
          title="I help businesses and individuals turn ideas into functional digital products."
          description="Choose a service below, or reach out with a custom requirement."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </Section>

      <Section className="border-t border-border !py-20">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-border bg-card/50 p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Not sure which service fits?
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Describe your project and I&apos;ll recommend the right
                approach.
              </p>
            </div>
            <Button href="/contact" variant="brand" size="lg">
              Start a Project
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
