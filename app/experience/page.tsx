import { experience, leadership } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Timeline from "@/components/Timeline";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata = { title: "Experience — Aanya Saraswat" };

export default function ExperiencePage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-28">
      <RevealOnScroll>
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked, and what I was trusted with."
        />
      </RevealOnScroll>

      <div className="mt-14">
        <RevealOnScroll>
          <Timeline entries={experience} />
        </RevealOnScroll>
      </div>

      <div className="mt-20">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Leadership"
            title="Outside the job title."
          />
        </RevealOnScroll>
        <div className="mt-10">
          <RevealOnScroll>
            <Timeline entries={leadership} />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
