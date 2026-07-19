import { profile } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata = { title: "Contact · Aanya Saraswat" };

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 md:px-10 md:py-28">
      <RevealOnScroll>
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about the role."
          description="I am currently open to new graduate and internship opportunities in software engineering, backend systems, and applied machine learning. The fastest way to reach me is email."
        />
      </RevealOnScroll>

      <RevealOnScroll delay={100}>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          <a
            href={`mailto:${profile.email}`}
            className="group border border-line p-6 transition-colors hover:border-brass"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-graphite-soft">
              Email
            </p>
            <p className="mt-2 font-display text-xl text-ink group-hover:text-brass">
              {profile.email}
            </p>
          </a>

          <a
            href={profile.linkedin}
            className="group border border-line p-6 transition-colors hover:border-brass"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-graphite-soft">
              LinkedIn
            </p>
            <p className="mt-2 font-display text-xl text-ink group-hover:text-brass">
              Connect →
            </p>
          </a>

          <a
            href={profile.github}
            className="group border border-line p-6 transition-colors hover:border-brass"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-graphite-soft">
              GitHub
            </p>
            <p className="mt-2 font-display text-xl text-ink group-hover:text-brass">
              View code →
            </p>
          </a>

          <a
            href="/resume.pdf"
            className="group border border-line p-6 transition-colors hover:border-brass"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-graphite-soft">
              Résumé
            </p>
            <p className="mt-2 font-display text-xl text-ink group-hover:text-brass">
              Download PDF →
            </p>
          </a>
        </div>
      </RevealOnScroll>
    </section>
  );
}
