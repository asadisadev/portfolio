import { Section, SectionHeader } from "@/components/ui/Section";
import Reveal from "@/components/animations/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";
import { Code2, Cpu, Server, Database, Brain } from "lucide-react";

const facts = [
  { icon: Code2, label: "Full Stack Development" },
  { icon: Brain, label: "AI / LLM Applications" },
  { icon: Server, label: "Backend Development" },
  { icon: Database, label: "Database Integration" },
  { icon: Cpu, label: "Machine Learning" },
];

export default function AboutPreview() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <SectionHeader
          eyebrow="About Me"
          title="I build products end to end — from interface to infrastructure."
        />

        <Reveal delay={0.1} className="space-y-6">
          <p className="text-base leading-relaxed text-muted-foreground">
            I&apos;m a Full Stack Developer focused on building modern web
            applications and AI-powered products. I work across frontend,
            backend, databases and API integrations, with a growing focus on
            AI/LLM applications.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            My approach is pragmatic: pick the right tools, keep the system
            simple, and ship something that actually works in production.
          </p>
        </Reveal>
      </div>

      <StaggerContainer className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {facts.map((fact) => (
          <StaggerItem key={fact.label}>
            <div className="group flex h-full items-center gap-3 rounded-2xl border border-border bg-card/50 p-4 transition-colors hover:bg-accent">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-muted text-brand">
                <fact.icon className="h-4 w-4" />
              </span>
              <span className="text-sm font-medium">{fact.label}</span>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
