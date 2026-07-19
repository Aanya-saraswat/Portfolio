export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <span className="inline-block rounded-full border border-trace/40 bg-trace/10 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-trace">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl leading-tight text-ink md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-graphite-soft">
          {description}
        </p>
      )}
    </div>
  );
}
