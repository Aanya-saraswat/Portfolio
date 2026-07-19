import Link from "next/link";
import { profile, stats } from "@/lib/data";
import SkillTicker from "@/components/SkillTicker";
import SectionHeading from "@/components/SectionHeading";
import RotatingShowcase from "@/components/RotatingShowcase";
import RevealOnScroll from "@/components/RevealOnScroll";
import Typewriter from "@/components/Typewriter";
import RobotWave from "@/components/RobotWave";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="grain relative overflow-hidden border-b border-line">
        <div className="starfield" />
        <div className="glow-orb glow-orb-brass -left-24 -top-24 h-80 w-80" />
        <div className="glow-orb glow-orb-trace right-0 top-10 h-96 w-96" />

        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-20 md:px-10 md:pb-28 md:pt-28">
          <RevealOnScroll>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brass">
              {profile.location} · Available for new grad / intern roles
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={80}>
            <p className="mt-5 font-mono text-lg text-trace sm:text-xl">
              I'm a{" "}
              <Typewriter
                words={profile.roles}
                className="font-semibold text-trace"
              />
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={90}>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-[1] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-8xl">
              {profile.name}
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <p className="mt-6 max-w-3xl font-display text-3xl font-medium leading-[1.15] tracking-tight text-graphite-soft sm:text-4xl">
              {profile.tagline}
            </p>
            <p className="mt-4 font-display text-xl italic text-brass sm:text-2xl">
              {profile.taglineAccent}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-graphite-soft">
              {profile.heroSub}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={300}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="border border-ink bg-ink px-6 py-3 font-mono text-xs uppercase tracking-widest text-paper transition-colors hover:bg-brass hover:border-brass"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="border border-ink px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:border-brass hover:text-brass"
              >
                Get in Touch
              </Link>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={420}>
            <div className="mt-14">
              <RobotWave message={profile.robotGreeting} />
            </div>
          </RevealOnScroll>
        </div>

        {/* Stats strip */}
        <div className="border-t border-line bg-paper-dim">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-10 md:grid-cols-4 md:px-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl text-ink md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-graphite-soft">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skill ticker: signature element */}
      <SkillTicker />

      {/* Selected work: rotating showcase */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <RevealOnScroll>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Selected Work"
              title="Three systems, three different kinds of hard problems."
            />
            <Link
              href="/projects"
              className="font-mono text-xs uppercase tracking-widest text-brass underline-draw"
            >
              All projects →
            </Link>
          </div>
        </RevealOnScroll>

        <div className="mt-14">
          <RevealOnScroll>
            <RotatingShowcase />
          </RevealOnScroll>
        </div>
      </section>

      {/* About preview / IBM callout */}
      <section className="border-y border-line bg-paper-dim py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid gap-12 md:grid-cols-2 md:gap-20">
            <RevealOnScroll>
              <SectionHeading
                eyebrow="Currently"
                title="Inside enterprise observability at IBM."
              />
              <p className="mt-6 max-w-md leading-relaxed text-graphite-soft">
                As a Customer Success Engineering Intern, I work with IBM
                Concert on application observability, dependency mapping, and
                operational health across hybrid cloud environments, while
                building fluency in Docker, Kubernetes, and Red Hat OpenShift.
              </p>
              <Link
                href="/experience"
                className="mt-6 inline-block font-mono text-xs uppercase tracking-widest text-brass underline-draw"
              >
                Full experience →
              </Link>
            </RevealOnScroll>

            <RevealOnScroll delay={150}>
              <SectionHeading
                eyebrow="Foundation"
                title="Electronics & Communication Engineering, Thapar Institute."
              />
              <p className="mt-6 max-w-md leading-relaxed text-graphite-soft">
                A 9.01 CGPA and a habit of understanding systems from the
                signal up, the same instinct I now bring to backend
                architecture and applied ML.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-block font-mono text-xs uppercase tracking-widest text-brass underline-draw"
              >
                More about me →
              </Link>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
