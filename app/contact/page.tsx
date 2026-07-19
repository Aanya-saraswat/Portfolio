import { profile } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact · Aanya Saraswat" };

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
      <RevealOnScroll>
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about the role."
          description="I am currently open to new graduate and internship opportunities in software engineering, backend systems, and applied machine learning."
        />
      </RevealOnScroll>

      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        <RevealOnScroll>
          <div className="space-y-6">
            <div className="border border-line bg-paper-dim p-8">
              <p className="font-display text-xl text-ink">Contact information</p>
              <div className="mt-6 space-y-5">
                <a href={`mailto:${profile.email}`} className="group flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-trace/40 bg-trace/10 text-trace">
                    ✉
                  </span>
                  <span>
                    <span className="block font-mono text-[11px] uppercase tracking-widest text-graphite-soft">
                      Email
                    </span>
                    <span className="block text-ink group-hover:text-brass">
                      {profile.email}
                    </span>
                  </span>
                </a>

                <a href="/resume.pdf" className="group flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-trace/40 bg-trace/10 text-trace">
                    ⬇
                  </span>
                  <span>
                    <span className="block font-mono text-[11px] uppercase tracking-widest text-graphite-soft">
                      Résumé
                    </span>
                    <span className="block text-ink group-hover:text-brass">
                      Download PDF
                    </span>
                  </span>
                </a>

                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-trace/40 bg-trace/10 text-trace">
                    📍
                  </span>
                  <span>
                    <span className="block font-mono text-[11px] uppercase tracking-widest text-graphite-soft">
                      Based in
                    </span>
                    <span className="block text-ink">{profile.location}</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="border border-line bg-paper-dim p-8">
              <p className="font-display text-xl text-ink">Connect with me</p>
              <div className="mt-5 flex gap-3">
                <a
                  href={profile.github}
                  className="flex h-11 w-11 items-center justify-center border border-line text-ink transition-colors hover:border-brass hover:text-brass"
                  aria-label="GitHub"
                >
                  GH
                </a>
                <a
                  href={profile.linkedin}
                  className="flex h-11 w-11 items-center justify-center border border-line text-ink transition-colors hover:border-brass hover:text-brass"
                  aria-label="LinkedIn"
                >
                  in
                </a>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={120}>
          <ContactForm />
        </RevealOnScroll>
      </div>
    </section>
  );
}
