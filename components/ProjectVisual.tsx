import { projects } from "@/lib/data";

const accentMap: Record<string, string> = {
  "copd-prediction-ml": "#5b8def",
  investwallet: "#b8925a",
  "mock-interview-webapp": "#8c9bc9",
};

const iconMap: Record<string, string> = {
  "copd-prediction-ml": "🫁",
  investwallet: "📈",
  "mock-interview-webapp": "🎤",
};

export default function ProjectVisual({
  project,
  className = "",
}: {
  project: (typeof projects)[number];
  className?: string;
}) {
  const accent = accentMap[project.slug] ?? "#b8925a";
  const icon = iconMap[project.slug] ?? "◆";

  return (
    <div
      className={`relative overflow-hidden rounded-md border border-line ${className}`}
      style={{
        background: "linear-gradient(155deg, #0a0e1a 0%, #131a2c 55%, #0a0e1a 100%)",
      }}
    >
      {/* browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="ml-3 font-mono text-[10px] uppercase tracking-widest text-white/30">
          {project.slug}.dev
        </span>
      </div>

      <div className="relative flex aspect-[16/10] flex-col items-center justify-center gap-4 p-8">
        <span className="text-6xl" style={{ filter: "drop-shadow(0 0 24px rgba(0,0,0,0.4))" }}>
          {icon}
        </span>
        <div className="flex flex-wrap justify-center gap-2">
          {project.stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-sm border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-white/70"
              style={{ borderColor: `${accent}55` }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* decorative signal bars */}
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-25 blur-2xl"
          style={{ background: accent }}
        />
        <div
          className="pointer-events-none absolute -bottom-14 -left-10 h-40 w-40 rounded-full opacity-15 blur-2xl"
          style={{ background: accent }}
        />
      </div>
    </div>
  );
}
