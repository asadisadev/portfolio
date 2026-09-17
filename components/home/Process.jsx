import { Section, SectionHeader } from "@/components/ui/Section";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";

const steps = [
  {
    n: "01",
    title: "Discovery",
    desc: "Understand the idea, requirements, users and goals.",
  },
  {
    n: "02",
    title: "Planning",
    desc: "Define features, technology, architecture and timeline.",
  },
  { n: "03", title: "Design", desc: "Create UI, UX and responsive layouts." },
  {
    n: "04",
    title: "Development",
    desc: "Build frontend, backend, database, APIs and integrations.",
  },
  {
    n: "05",
    title: "Testing",
    desc: "Check functionality, responsiveness, performance and bugs.",
  },
  {
    n: "06",
    title: "Deployment",
    desc: "Deploy the application and hand over the final project.",
  },
];

export default function Process() {
  return (
    <Section id="process" className="border-t border-border">
      <SectionHeader
        eyebrow="Process"
        title="How I work"
        description="A clear, milestone-based process that keeps projects predictable."
      />

      <StaggerContainer className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step) => (
          <StaggerItem key={step.n}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-brand/40">
              <span className="text-4xl font-semibold tracking-tight text-muted-foreground/25 transition-colors group-hover:text-brand/40">
                {step.n}
              </span>
              <h3 className="mt-4 text-base font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.desc}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
