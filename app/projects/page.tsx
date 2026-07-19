import { projects } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata = { title: "Projects · Aanya Saraswat" };

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
      <RevealOnScroll>
        <SectionHeading
          eyebrow="Projects"
          title="Built end to end · model, backend, and interface."
          description="Each project below started as a real problem I wanted solved, not a tutorial. Click through for architecture, decisions, and outcomes."
        />
      </RevealOnScroll>

      <div className="mt-14">
        {projects.map((project, i) => (
          <RevealOnScroll key={project.slug} delay={i * 80}>
            <ProjectCard project={project} index={i} />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
