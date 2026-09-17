import { ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/animations/Reveal";

export default function CTA() {
  return (
    <section className="border-t border-border">
      <div className="container section">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card/50 px-6 py-16 text-center sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-[320px] w-[620px] -translate-x-1/2 rounded-full bg-brand/15 blur-[110px]" />
            <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />

            <div className="relative mx-auto max-w-2xl">
              <p className="eyebrow justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                Let&apos;s build something
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">
                Have a project in mind?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground text-balance">
                Tell me about your idea, budget and timeline. I&apos;ll get back
                to you with next steps.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <Button href="/contact" variant="brand" size="lg">
                  Start a Project
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
                <Button href="/projects" variant="outline" size="lg">
                  View My Work
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
