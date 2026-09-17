"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";
import { techStack } from "@/data/skills";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* background */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-brand/10 blur-[120px] animate-pulse-slow" />

      <div className="container relative flex min-h-[calc(100vh-4rem)] flex-col justify-center py-20 md:py-28">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              {site.availability}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-7 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m {site.name}.
            <br />
            <span className="text-muted-foreground">{site.role}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground text-balance sm:text-lg"
          >
            {site.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button href="/projects" size="lg">
              View My Work
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              <Sparkles className="h-4 w-4" />
              Start a Project
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex items-center gap-2 text-xs text-muted-foreground"
          >
            <MapPin className="h-3.5 w-3.5" />
            {site.location}
          </motion.div>
        </motion.div>

        {/* Tech marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="relative mt-16 border-y border-border py-5"
        >
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <div className="flex shrink-0 animate-marquee gap-10 pr-10">
              {[...techStack, ...techStack].map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className="whitespace-nowrap text-sm font-medium text-muted-foreground/80"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div
              aria-hidden
              className="flex shrink-0 animate-marquee gap-10 pr-10"
            >
              {[...techStack, ...techStack].map((tech, i) => (
                <span
                  key={`dup-${tech}-${i}`}
                  className="whitespace-nowrap text-sm font-medium text-muted-foreground/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
