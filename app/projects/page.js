import { Section, SectionHeader } from "@/components/ui/Section";
import ProjectsExplorer from "@/components/projects/ProjectsExplorer";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects",
  description:
    "A selection of web applications, AI products, data systems and machine learning projects.",
};

export default function ProjectsPage() {
  return (
    <Section className="!pt-16">
      <SectionHeader
        eyebrow="Portfolio"
        title="Selected Work"
        description="A selection of applications and systems I've built."
      />
      <ProjectsExplorer projects={projects} />
    </Section>
  );
}
