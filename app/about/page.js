import { Section, SectionHeader } from "@/components/ui/Section";
import Reveal from "@/components/animations/Reveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/Stagger";
import Button from "@/components/ui/Button";
import { ArrowUpRight, Download } from "lucide-react";
import { skillGroups } from "@/data/skills";
import { experience, education, certifications } from "@/data/experience";
import { site } from "@/data/site";

export const metadata = {
  title: "About",
  description: "About Asad — Software Engineer Enthusiast.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="!pt-16">
        <SectionHeader
          eyebrow="About"
          title="Full Stack Developer building web apps and AI-powered products."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="space-y-5">
            <p className="text-base leading-relaxed text-muted-foreground">
              I&apos;m {site.name}, a Full Stack Developer focused on building
              modern web applications and AI-powered products. I work across
              frontend, backend, databases and API integrations, with a growing
              focus on AI/LLM applications.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              I care about clean architecture, fast interfaces and shipping
              software that actually works in production. Whether it&apos;s a
              landing page, a full-stack system or an AI feature, I focus on
              clarity and reliability.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Outside of client work, I build side projects to explore new
              technologies — from data pipelines to machine learning models.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button href="/contact" variant="brand">
                Start a Project
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              <Button href={site.resumeUrl} variant="outline" download>
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4 rounded-3xl border border-border bg-card/50 p-6">
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground">
                Quick Facts
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between gap-4">
                  <span className="text-muted-foreground">Role</span>
                  <span className="font-medium">{site.role}</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span className="text-muted-foreground">Location</span>
                  <span className="font-medium">{site.location}</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span className="text-muted-foreground">Focus</span>
                  <span className="font-medium">Web · AI · Backend</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span className="text-muted-foreground">Status</span>
                  <span className="font-medium text-brand">
                    {site.availability}
                  </span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-border">
        <SectionHeader eyebrow="Skills" title="Technologies I work with" />
        <StaggerContainer className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <StaggerItem key={group.title}>
              <div className="h-full rounded-2xl border border-border bg-card/50 p-6">
                <h3 className="text-sm font-semibold">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground"
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

      <Section className="border-t border-border">
        <SectionHeader eyebrow="Background" title="Experience & education" />
        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          <Reveal className="lg:col-span-2 space-y-4">
            {experience.map((job) => (
              <div
                key={job.role}
                className="rounded-2xl border border-border bg-card/50 p-6"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold">{job.role}</h3>
                  <span className="text-xs text-muted-foreground">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-brand/90">{job.company}</p>
                <ul className="mt-4 space-y-2">
                  {job.points.map((p) => (
                    <li
                      key={p}
                      className="flex gap-3 text-sm text-muted-foreground"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-border bg-card/50 p-6">
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground">
                  Education
                </h3>
                <div className="mt-4 space-y-4">
                  {education.map((e) => (
                    <div key={e.title}>
                      <p className="text-sm font-semibold">{e.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {e.institution} · {e.period}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-2xl border border-border bg-card/50 p-6">
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground">
                  Certifications
                </h3>
                <div className="mt-4 space-y-4">
                  {certifications.map((c) => (
                    <div key={c.name}>
                      <p className="text-sm font-semibold">{c.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {c.provider}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
