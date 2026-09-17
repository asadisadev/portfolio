import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github, CircleDot } from "lucide-react";
import { projects, getProjectBySlug } from "@/data/projects";
import { Section } from "@/components/ui/Section";
import Reveal from "@/components/animations/Reveal";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const sections = [
    { label: "Problem", value: project.problem },
    { label: "Solution", value: project.solution },
  ];

  return (
    <Section className="!pt-16">
      <Reveal>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground focus-ring rounded-md"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          All Projects
        </Link>
      </Reveal>

      {/* Hero */}
      <Reveal delay={0.05} className="mt-8">
        <div className="flex flex-wrap gap-1.5">
          {project.categories.map((c) => (
            <Badge key={c} variant="brand">
              {c}
            </Badge>
          ))}
        </div>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-2 text-sm uppercase tracking-widest text-brand/80">
          {project.tagline}
        </p>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground text-balance">
          {project.description}
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          {project.liveDemo && (
            <Button href={project.liveDemo} variant="brand">
              Live Demo
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          )}
          {project.github && (
            <Button href={project.github} variant="outline">
              <Github className="h-4 w-4" />
              GitHub
            </Button>
          )}
        </div>
      </Reveal>

      {/* Visual */}
      <Reveal delay={0.1} className="mt-12">
        <div
          className={cn(
            "relative aspect-[16/8] overflow-hidden rounded-3xl border border-border bg-gradient-to-br",
            project.accent || "from-muted to-background",
          )}
        >
          <div className="absolute inset-0 grid place-items-center">
            <span className="text-5xl font-semibold tracking-tight text-foreground/20 sm:text-7xl">
              {project.title}
            </span>
          </div>
        </div>
      </Reveal>

      {/* Overview grid */}
      <div className="mt-16 grid gap-12 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-12">
          {sections.map((s) => (
            <Reveal key={s.label}>
              <h2 className="text-xs uppercase tracking-widest text-muted-foreground">
                {s.label}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {s.value}
              </p>
            </Reveal>
          ))}

          <Reveal>
            <h2 className="text-xs uppercase tracking-widest text-muted-foreground">
              Key Features
            </h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {project.features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2.5 rounded-xl border border-border bg-card/50 px-4 py-3 text-sm"
                >
                  <CircleDot className="h-3.5 w-3.5 shrink-0 text-brand" />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <h2 className="text-xs uppercase tracking-widest text-muted-foreground">
              Architecture
            </h2>
            <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-card/50 p-6">
              <ol className="space-y-0">
                {project.architecture.map((step, i) => (
                  <li key={step} className="flex items-center gap-4">
                    <div className="flex flex-col items-center">
                      <span className="grid h-7 w-7 place-items-center rounded-full border border-border bg-background text-[11px] text-muted-foreground">
                        {i + 1}
                      </span>
                      {i < project.architecture.length - 1 && (
                        <span className="h-6 w-px bg-border" />
                      )}
                    </div>
                    <span className="pb-6 text-sm text-foreground/90">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <Reveal delay={0.05}>
            <div className="rounded-2xl border border-border bg-card/50 p-6">
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground">
                Technology
              </h3>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-card/50 p-6">
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground">
                Status
              </h3>
              <p className="mt-3 flex items-center gap-2 text-sm">
                <span className="h-2 w-2 rounded-full bg-brand" />
                {project.status}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <Button href="/contact" variant="brand" className="w-full">
              Start a Similar Project
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </aside>
      </div>
    </Section>
  );
}
