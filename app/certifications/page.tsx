import { recognitions } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import CertificateGallery from "@/components/CertificateGallery";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata = { title: "Certifications · Aanya Saraswat" };

export default function CertificationsPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
      <RevealOnScroll>
        <SectionHeading
          eyebrow="Certifications"
          title="Verified, not just claimed."
          description="Click any certificate to view it in full, or open the original PDF."
        />
      </RevealOnScroll>

      <div className="mt-14">
        <RevealOnScroll>
          <CertificateGallery />
        </RevealOnScroll>
      </div>

      {recognitions.length > 0 && (
        <div className="mt-16 border-t border-line pt-10">
          <RevealOnScroll>
            <p className="font-mono text-xs uppercase tracking-widest text-brass">
              Other Recognitions
            </p>
            <ul className="mt-5 space-y-3">
              {recognitions.map((r) => (
                <li
                  key={r.title}
                  className="flex items-baseline justify-between border-b border-line pb-3"
                >
                  <span className="font-display text-lg text-ink">
                    {r.title}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest text-graphite-soft">
                    {r.date}
                  </span>
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>
      )}
    </section>
  );
}
