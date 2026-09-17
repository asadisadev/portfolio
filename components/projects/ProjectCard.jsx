"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/50 transition-colors hover:border-brand/40"
    >
      <Link
        href={`/projects/${project.slug}`}
        className="flex flex-1 flex-col focus-ring rounded-2xl"
      >
        {/* Visual */}
        <div
          className={cn(
            "relative aspect-[16/10] overflow-hidden border-b border-border bg-gradient-to-br",
            project.accent || "from-muted to-background",
          )}
        >
          <div className="absolute inset-0 grid place-items-center">
            <span className="text-4xl font-semibold tracking-tight text-foreground/25 transition-transform duration-500 group-hover:scale-110">
              {project.title}
            </span>
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
          <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/70 backdrop-blur transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-6">
          <div className="flex flex-wrap gap-1.5">
            {project.categories.map((cat) => (
              <Badge key={cat} variant="brand">
                {cat}
              </Badge>
            ))}
          </div>

          <h3 className="mt-4 text-lg font-semibold tracking-tight">
            {project.title}
          </h3>
          <p className="mt-1 text-xs uppercase tracking-widest text-brand/80">
            {project.tagline}
          </p>
          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5 pt-1">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-muted px-2 py-0.5 text-[11px] text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-foreground">
            View Case Study
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
