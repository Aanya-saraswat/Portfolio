"use client";

import { useState } from "react";
import Image from "next/image";
import { certifications } from "@/lib/data";

export default function CertificateGallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <button
            key={cert.title}
            onClick={() => setActive(i)}
            className="tilt-card group text-left"
          >
            <div className="relative aspect-[4/3] overflow-hidden border border-line bg-paper-dim">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-ink/0 p-4 transition-colors duration-300 group-hover:bg-ink/40">
                <span className="translate-y-2 font-mono text-xs uppercase tracking-widest text-paper opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  Expand →
                </span>
              </div>
            </div>
            <p className="mt-3 font-display text-lg text-ink">{cert.title}</p>
            <p className="font-mono text-xs uppercase tracking-widest text-graphite-soft">
              {cert.issuer} · {cert.date}
            </p>
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-6"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute right-6 top-6 font-mono text-xs uppercase tracking-widest text-paper hover:text-brass"
            onClick={() => setActive(null)}
          >
            Close ✕
          </button>
          <div
            className="relative max-h-[80vh] w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-brass/40 bg-ink-soft">
              <Image
                src={certifications[active].image}
                alt={certifications[active].title}
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-4 font-display text-xl text-paper">
              {certifications[active].title}
            </p>
            <p className="font-mono text-xs uppercase tracking-widest text-brass-soft">
              {certifications[active].issuer} · {certifications[active].date}
            </p>
            <a
              href={certifications[active].file}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="mt-3 inline-block font-mono text-[11px] uppercase tracking-widest text-paper/60 underline-draw hover:text-brass"
            >
              View original PDF →
            </a>
          </div>
        </div>
      )}
    </>
  );
}
