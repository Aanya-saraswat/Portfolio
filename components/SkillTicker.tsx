import { skills } from "@/lib/data";
import { skillIcons } from "@/lib/skillIcons";

export default function SkillTicker() {
  const doubled = [...skills, ...skills];

  return (
    <div className="relative overflow-hidden border-y border-line bg-paper-dim py-10">
      <div className="trace-track gap-5">
        {doubled.map((skill, i) => (
          <div
            key={`${skill}-${i}`}
            className="tilt-card flex w-32 shrink-0 flex-col items-center justify-center gap-3 rounded-xl border border-line bg-paper px-5 py-6 text-center transition-colors hover:border-trace"
          >
            <span className="text-3xl">{skillIcons[skill] ?? "◆"}</span>
            <span className="font-mono text-[11px] uppercase leading-tight tracking-wide text-graphite-soft">
              {skill}
            </span>
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-paper-dim to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-paper-dim to-transparent" />
    </div>
  );
}
