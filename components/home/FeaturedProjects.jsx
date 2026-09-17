import { Section, SectionHeader } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Reveal from "@/components/animations/Reveal";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <Section id="projects" className="border-t border-border">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeader
          eyebrow="Selected Work"
          title="A selection of applications and systems I've built."
        />
        <Reveal delay={0.15}>
          <Button href="/projects" variant="outline">
            All Projects
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
