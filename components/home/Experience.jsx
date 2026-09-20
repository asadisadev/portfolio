import { Section, SectionHeader } from "@/components/ui/Section";
import Reveal from "@/components/animations/Reveal";
import { experience, education, certifications } from "@/data/experience";
import { Briefcase, GraduationCap, Award } from "lucide-react";

export default function Experience() {
  return (
    <Section id="experience" className="border-t border-border">
      <SectionHeader
        eyebrow="Experience"
        title="Where I've worked and studied"
      />

      <div className="mt-14 grid gap-12 lg:grid-cols-3">
        {/* Experience */}
        <Reveal className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
            <Briefcase className="h-3.5 w-3.5" /> Work
          </div>
          {experience.map((job) => (
            <div
              key={job.role + job.company}
              className="rounded-2xl border border-border bg-card/50 p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold tracking-tight">
                  {job.role}
                </h3>
                <span className="text-xs text-muted-foreground">
                  {job.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-brand/90">{job.company}</p>
              <ul className="mt-4 space-y-2">
                {job.points.map((p) => (
                  <li
                    key={p}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>

        {/* Education + Certs */}
        <div className="space-y-10">
          <Reveal delay={0.1}>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
              <GraduationCap className="h-3.5 w-3.5" /> Education
            </div>
            <div className="mt-4 space-y-3">
              {education.map((e) => (
                <div
                  key={e.title}
                  className="rounded-2xl border border-border bg-card/50 p-5"
                >
                  <h3 className="text-sm font-semibold">{e.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {e.institution} · {e.period}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
              <Award className="h-3.5 w-3.5" /> Certifications
            </div>
            <div className="mt-4 space-y-3">
              {certifications.map((c) => (
                <div
                  key={c.name}
                  className="rounded-2xl border border-border bg-card/50 p-5"
                >
                  <h3 className="text-sm font-semibold">{c.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {c.provider}
                    {c.period}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
