"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projectCategories } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { cn } from "@/lib/utils";

export default function ProjectsExplorer({ projects }) {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.categories.includes(active));
  }, [active, projects]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-12 flex flex-wrap gap-2"
      >
        {projectCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              "relative rounded-full border px-4 py-2 text-sm transition-colors focus-ring",
              active === cat
                ? "border-brand/40 bg-brand/10 text-brand"
                : "border-border bg-card/50 text-muted-foreground hover:text-foreground",
            )}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      <motion.div
        layout
        className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-sm text-muted-foreground">
          No projects in this category yet.
        </p>
      )}
    </>
  );
}
