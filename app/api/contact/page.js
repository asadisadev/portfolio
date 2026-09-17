import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { Section } from "@/components/ui/Section";
import Reveal from "@/components/animations/Reveal";
import ContactForm from "@/components/contact/ContactForm";
import { site } from "@/data/site";

export const metadata = {
  title: "Contact",
  description: "Start a project or get in touch.",
};

export default function ContactPage() {
  return (
    <Section className="!pt-16">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Start a Project
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Let&apos;s build something together.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Share your idea, budget and timeline. The more detail you give,
              the more accurate my response will be.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 space-y-3">
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card/50 p-4 text-sm transition-colors hover:bg-accent focus-ring"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-muted text-brand">
                <Mail className="h-4 w-4" />
              </span>
              <span>
                <span className="block text-xs text-muted-foreground">
                  Email
                </span>
                {site.email}
              </span>
            </a>

            <div className="flex items-center gap-3 rounded-2xl border border-border bg-card/50 p-4 text-sm">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-muted text-brand">
                <MapPin className="h-4 w-4" />
              </span>
              <span>
                <span className="block text-xs text-muted-foreground">
                  Location
                </span>
                {site.location}
              </span>
            </div>

            <div className="flex gap-3">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card/50 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-ring"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card/50 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-ring"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="rounded-3xl border border-border bg-card/40 p-6 sm:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
