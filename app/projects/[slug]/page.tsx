import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return { title: project ? `${project.title} — Aanya Saraswat` : "Project" };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-20 md:px-10 md:py-28">
      <RevealOnScroll>
        <Link
          href="/projects"
          className="font-mono text-xs uppercase tracking-widest text-brass underline-draw"
        >
          ← All projects
        </Link>

        <p className="mt-8 font-mono text-xs uppercase tracking-widest text-graphite-soft">
          {project.year}
        </p>
        <h1 className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
          {project.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-graphite-soft">
          {project.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-sm border border-line px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-graphite-soft"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-4">
          <a
            href={project.github}
            className="font-mono text-xs uppercase tracking-widest text-ink underline-draw"
          >
            Source →
          </a>
          {project.demo && (
            <a
              href={project.demo}
              className="font-mono text-xs uppercase tracking-widest text-ink underline-draw"
            >
              Live Demo →
            </a>
          )}
        </div>
      </RevealOnScroll>

      <div className="mt-16 space-y-12 border-t border-line pt-12">
        <RevealOnScroll>
          <h2 className="font-mono text-xs uppercase tracking-widest text-brass">
            Problem
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-graphite-soft">
            {project.problem}
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <h2 className="font-mono text-xs uppercase tracking-widest text-brass">
            Approach
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-graphite-soft">
            {project.approach}
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <h2 className="font-mono text-xs uppercase tracking-widest text-brass">
            Outcome
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-graphite-soft">
            {project.outcome}
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <h2 className="font-mono text-xs uppercase tracking-widest text-brass">
            Highlights
          </h2>
          <ul className="mt-4 space-y-3">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex gap-3 text-graphite-soft leading-relaxed">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-trace" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </div>
    </article>
  );
}
