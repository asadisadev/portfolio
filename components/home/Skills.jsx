import { Section, SectionHeader } from "@/components/ui/Section";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <Section id="skills" className="border-t border-border">
      <SectionHeader
        eyebrow="Skills"
        title="Technologies I work with"
        description="A focused toolkit only technologies I can discuss and use confidently."
      />

      <StaggerContainer className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <StaggerItem key={group.title}>
            <div className="group h-full rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-brand/40 hover:bg-card">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold tracking-tight">
                  {group.title}
                </h3>
                <span className="text-xs text-muted-foreground">
                  {String(group.items.length).padStart(2, "0")}
                </span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground transition-colors group-hover:text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
