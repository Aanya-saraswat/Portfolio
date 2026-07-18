type Entry = {
  role: string;
  org: string;
  location?: string;
  period: string;
  points: string[];
};

export default function Timeline({ entries }: { entries: Entry[] }) {
  return (
    <div className="relative border-l border-line pl-8">
      {entries.map((entry, i) => (
        <div key={i} className="relative pb-12 last:pb-0">
          <span className="absolute -left-[calc(2rem+3.5px)] top-1.5 h-2 w-2 rounded-full bg-brass" />
          <p className="font-mono text-xs uppercase tracking-widest text-graphite-soft/70">
            {entry.period}
          </p>
          <h3 className="mt-2 font-display text-xl text-ink md:text-2xl">
            {entry.role}
          </h3>
          <p className="mt-1 text-sm text-brass">
            {entry.org}
            {entry.location ? ` · ${entry.location}` : ""}
          </p>
          <ul className="mt-4 space-y-2">
            {entry.points.map((point, j) => (
              <li key={j} className="flex gap-3 text-graphite-soft leading-relaxed">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-trace" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
