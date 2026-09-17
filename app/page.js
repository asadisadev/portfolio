import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import Skills from "@/components/home/Skills";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ServicesPreview from "@/components/home/ServicesPreview";
import Process from "@/components/home/Process";
import Experience from "@/components/home/Experience";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Skills />
      <FeaturedProjects />
      <ServicesPreview />
      <Process />
      <Experience />
      <FAQ />
      <CTA />
    </>
  );
}
