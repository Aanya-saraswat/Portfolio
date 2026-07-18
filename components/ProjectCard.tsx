import Link from "next/link";
import { projects } from "@/lib/data";

export default function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="tilt-card group block border-t border-line px-4 py-10 first:border-t-0 md:py-12"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-baseline md:justify-between md:gap-10">
        <span className="font-mono text-xs text-graphite-soft/60">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="flex-1">
          <h3 className="font-display text-2xl text-ink transition-colors group-hover:text-brass md:text-3xl">
            {project.title}
          </h3>
          <p className="mt-3 max-w-2xl text-graphite-soft leading-relaxed">
            {project.summary}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-sm border border-line px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-graphite-soft"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <span className="font-mono text-xs uppercase tracking-widest text-brass opacity-0 transition-opacity group-hover:opacity-100">
          View →
        </span>
      </div>
    </Link>
  );
}
