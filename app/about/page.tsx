import { about, education, profile } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata = { title: "About — Aanya Saraswat" };

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-28">
      <RevealOnScroll>
        <SectionHeading eyebrow="About" title="Signal, circuit, system, code." />
      </RevealOnScroll>

      <div className="mt-12 space-y-6 text-lg leading-relaxed text-graphite-soft">
        <RevealOnScroll>
          <p className="font-display text-2xl leading-snug text-ink">
            {about.intro}
          </p>
        </RevealOnScroll>
        {about.body.map((para, i) => (
          <RevealOnScroll key={i} delay={i * 80}>
            <p>{para}</p>
          </RevealOnScroll>
        ))}
        <RevealOnScroll delay={240}>
          <p className="border-l-2 border-brass pl-6 text-ink">
            {about.closing}
          </p>
        </RevealOnScroll>
      </div>

      <RevealOnScroll delay={320}>
        <div className="mt-16 border-t border-line pt-10">
          <p className="font-mono text-xs uppercase tracking-widest text-brass">
            Education
          </p>
          <h3 className="mt-3 font-display text-2xl text-ink">
            {education.school}
          </h3>
          <p className="mt-1 text-graphite-soft">
            {education.degree} · {education.location}
          </p>
          <p className="mt-1 font-mono text-sm text-graphite-soft">
            {education.period} · CGPA {education.cgpa}
          </p>
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={380}>
        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="border border-ink px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:border-brass hover:text-brass"
          >
            Email Me
          </a>
          <a
            href="/resume.pdf"
            className="border border-ink bg-ink px-6 py-3 font-mono text-xs uppercase tracking-widest text-paper transition-colors hover:bg-brass hover:border-brass"
          >
            Download Résumé
          </a>
        </div>
      </RevealOnScroll>
    </section>
  );
}
