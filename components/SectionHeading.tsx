export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p
        className={`font-mono text-xs uppercase tracking-[0.2em] ${
          light ? "text-brass-soft" : "text-brass"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-display text-3xl leading-tight md:text-4xl ${
          light ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-paper/70" : "text-graphite-soft"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
