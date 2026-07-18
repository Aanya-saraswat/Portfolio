"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { projects } from "@/lib/data";

const accents = ["#b8925a", "#4c7a6d", "#8c9bc9"];

export default function RotatingShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % projects.length);
    }, 4200);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div
      className="grid gap-10 md:grid-cols-2 md:items-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Rotating visual mockup */}
      <div className="relative aspect-[4/3] w-full">
        {projects.map((project, i) => {
          const accent = accents[i % accents.length];
          const isActive = i === active;
          return (
            <div
              key={project.slug}
              className="carousel-slide absolute inset-0 overflow-hidden rounded-md border border-line-dark"
              style={{
                opacity: isActive ? 1 : 0,
                transform: isActive ? "scale(1)" : "scale(0.97)",
                zIndex: isActive ? 10 : 0,
                background:
                  "linear-gradient(155deg, #0b1220 0%, #141b2b 60%, #0b1220 100%)",
              }}
            >
              {/* fake browser chrome */}
              <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="ml-3 font-mono text-[10px] uppercase tracking-widest text-white/30">
                  {project.slug}.dev
                </span>
              </div>

              <div className="flex h-full flex-col justify-between p-8">
                <div>
                  <p
                    className="font-mono text-[11px] uppercase tracking-[0.2em]"
                    style={{ color: accent }}
                  >
                    Featured Build {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-2xl text-paper md:text-3xl">
                    {project.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-sm border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-white/70"
                      style={{ borderColor: `${accent}55` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* decorative signal bars */}
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-20 blur-2xl"
                style={{ background: accent }}
              />
            </div>
          );
        })}
      </div>

      {/* Copy + controls */}
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-brass">
          Rotating through the work
        </p>
        <h3 className="mt-3 font-display text-3xl leading-tight text-ink md:text-4xl">
          {projects[active].title}
        </h3>
        <p className="mt-4 max-w-md text-graphite-soft leading-relaxed">
          {projects[active].summary}
        </p>

        <div className="mt-6 flex items-center gap-3">
          {projects.map((p, i) => (
            <button
              key={p.slug}
              onClick={() => setActive(i)}
              aria-label={`Show ${p.title}`}
              className="group flex items-center gap-2"
            >
              <span
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: i === active ? "28px" : "8px",
                  background: i === active ? "var(--brass)" : "var(--line)",
                }}
              />
            </button>
          ))}
        </div>

        <Link
          href={`/projects/${projects[active].slug}`}
          className="mt-8 inline-block font-mono text-xs uppercase tracking-widest text-ink underline-draw"
        >
          Read the full breakdown →
        </Link>
      </div>
    </div>
  );
}
