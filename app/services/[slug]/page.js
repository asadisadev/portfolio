import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { services, getServiceBySlug } from "@/data/services";
import { Section } from "@/components/ui/Section";
import Reveal from "@/components/animations/Reveal";
import Button from "@/components/ui/Button";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service not found" };
  return { title: service.title, description: service.description };
}

const process = [
  "Discovery & requirements",
  "Planning & scope",
  "Design & UI",
  "Development",
  "Testing & review",
  "Deployment & handover",
];

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <Section className="!pt-16">
      <Reveal>
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground focus-ring rounded-md"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          All Services
        </Link>
      </Reveal>

      <div className="mt-8 grid gap-16 lg:grid-cols-[2fr_1fr]">
        <div>
          <Reveal delay={0.05}>
            <p className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Service
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {service.description}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-14">
            <h2 className="text-xs uppercase tracking-widest text-muted-foreground">
              What You Get
            </h2>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {service.features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2.5 rounded-xl border border-border bg-card/50 px-4 py-3 text-sm"
                >
                  <Check className="h-3.5 w-3.5 shrink-0 text-brand" />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15} className="mt-14">
            <h2 className="text-xs uppercase tracking-widest text-muted-foreground">
              Development Process
            </h2>
            <ol className="mt-5 grid gap-2 sm:grid-cols-2">
              {process.map((step, i) => (
                <li
                  key={step}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card/50 px-4 py-3 text-sm"
                >
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-muted text-[11px] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <Reveal delay={0.05}>
            <div className="rounded-2xl border border-border bg-card/50 p-6">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Starting from
              </p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-brand">
                {service.startingPrice}
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Final quote depends on scope, features and timeline.
              </p>
              <Button href="/contact" variant="brand" className="mt-6 w-full">
                Start Your Project
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-card/50 p-6">
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground">
                Technology
              </h3>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {service.technologies.map((t) => (
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
        </aside>
      </div>
    </Section>
  );
}
