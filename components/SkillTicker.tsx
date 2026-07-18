import { skills } from "@/lib/data";

export default function SkillTicker() {
  const doubled = [...skills, ...skills];

  return (
    <div className="relative overflow-hidden border-y border-line-dark bg-ink py-8">
      {/* trace line */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-trace/30" />

      <div className="trace-track">
        {doubled.map((skill, i) => (
          <div key={`${skill}-${i}`} className="relative flex items-center px-5">
            <span className="relative z-10 whitespace-nowrap rounded-sm border border-trace/40 bg-ink px-4 py-2 font-mono text-xs uppercase tracking-widest text-paper/80 transition-colors hover:border-brass hover:text-brass">
              {skill}
            </span>
            <span className="mx-2 h-1.5 w-1.5 rounded-full bg-trace/50" />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent" />
    </div>
  );
}
