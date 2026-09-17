import { Download, Eye, Github, Linkedin, Mail } from "lucide-react";
import { Section } from "@/components/ui/Section";
import Reveal from "@/components/animations/Reveal";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";
import { experience, education, certifications } from "@/data/experience";
import { skillGroups } from "@/data/skills";

export const metadata = {
  title: "Resume",
  description: "View or download my resume.",
};

export default function ResumePage() {
  return (
    <Section className="!pt-16">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Resume
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {site.name}
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">{site.role}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={site.resumeUrl} variant="brand" download>
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
            <Button href={site.resumeUrl} variant="outline" target="_blank">
              <Eye className="h-4 w-4" />
              View in Browser
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Mail className="h-3.5 w-3.5" /> {site.email}
            </span>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-foreground"
            >
              <Github className="h-3.5 w-3.5" /> GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-foreground"
            >
              <Linkedin className="h-3.5 w-3.5" /> LinkedIn
            </a>
          </div>
        </Reveal>

        {/* Resume preview (structured) */}
        <div className="mt-14 space-y-10 rounded-3xl border border-border bg-card/40 p-6 sm:p-10">
          <Reveal>
            <h2 className="text-xs uppercase tracking-widest text-muted-foreground">
              Experience
            </h2>
            <div className="mt-5 space-y-6">
              {experience.map((job) => (
                <div key={job.role}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-base font-semibold">{job.role}</h3>
                    <span className="text-xs text-muted-foreground">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-sm text-brand/90">{job.company}</p>
                  <ul className="mt-3 space-y-2">
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
            </div>
          </Reveal>

          <Reveal>
            <h2 className="text-xs uppercase tracking-widest text-muted-foreground">
              Skills
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <p className="text-sm font-semibold">{group.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {group.items.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h2 className="text-xs uppercase tracking-widest text-muted-foreground">
              Education & Certifications
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {education.map((e) => (
                <div key={e.title}>
                  <p className="text-sm font-semibold">{e.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {e.institution} · {e.period}
                  </p>
                </div>
              ))}
              {certifications.map((c) => (
                <div key={c.name}>
                  <p className="text-sm font-semibold">{c.name}</p>
                  <p className="text-xs text-muted-foreground">{c.provider}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-8 text-center text-xs text-muted-foreground">
          To replace this with your real PDF, place your file at{" "}
          <code className="rounded bg-muted px-1.5 py-0.5">
            public/resume/resume.pdf
          </code>
          .
        </Reveal>
      </div>
    </Section>
  );
}
