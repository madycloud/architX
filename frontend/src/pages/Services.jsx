import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageWrap, Reveal, LetterReveal, ClipReveal, Marquee } from "@/components/site/motion";
import { SERVICES } from "@/data/content";

export default function Services() {
  return (
    <PageWrap testId="services-page">
      <section className="px-6 md:px-12 lg:px-24 pt-32 md:pt-44 pb-16">
        <Reveal delay={0.1}>
          <p className="overline-label mb-6">What we do</p>
        </Reveal>
        <LetterReveal
          text="Concept to completion"
          className="font-serif-display text-5xl sm:text-6xl lg:text-8xl font-medium tracking-tight leading-[0.95] max-w-5xl"
          delay={0.2}
        />
        <Reveal delay={0.5} className="max-w-2xl mt-10">
          <p className="text-base leading-relaxed text-[#5C5A56]">
            Six integrated disciplines under one roof — so your project moves seamlessly from the first consultation
            to the final handover, with one team accountable at every stage.
          </p>
        </Reveal>
      </section>

      <section className="py-12 border-y border-[#DCD9D3]">
        <Marquee items={["Planning", "Interiors", "Construction", "3D Walkthrough", "ACP", "Turnkey"]} />
      </section>

      <section data-testid="services-list" className="px-6 md:px-12 lg:px-24 py-24 lg:py-32 space-y-28 lg:space-y-40">
        {SERVICES.map((s, i) => (
          <div
            key={s.slug}
            data-testid={`service-block-${s.slug}`}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${i % 2 === 1 ? "" : ""}`}
          >
            <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <ClipReveal>
                <div className="img-zoom-wrap">
                  <img src={s.image} alt={s.title} className="w-full h-[45vh] lg:h-[60vh] object-cover" loading="lazy" />
                </div>
              </ClipReveal>
            </div>
            <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : "lg:col-start-8"}`}>
              <Reveal>
                <p className="text-xs font-bold text-[#9A968F] mb-4">0{i + 1}</p>
                <p className="overline-label mb-3">{s.tag}</p>
                <h2 className="font-serif-display text-4xl lg:text-6xl font-medium tracking-tight leading-none">{s.title}</h2>
                <p className="mt-6 text-base leading-relaxed text-[#5C5A56]">{s.desc}</p>
                <Link
                  to="/contact"
                  data-testid={`service-cta-${s.slug}`}
                  className="mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-bold link-sweep"
                >
                  Enquire about {s.title} <ArrowRight size={14} />
                </Link>
              </Reveal>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-[#111111] text-[#F8F7F5] px-6 md:px-12 lg:px-24 py-24 lg:py-32 text-center">
        <Reveal>
          <h2 className="font-serif-display text-4xl lg:text-6xl font-medium tracking-tight leading-tight max-w-3xl mx-auto">
            Not sure which service fits? <span className="italic">Let's talk.</span>
          </h2>
          <Link
            to="/contact"
            data-testid="services-cta"
            className="mt-10 inline-flex items-center gap-3 border border-[#F8F7F5] px-8 py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#F8F7F5] hover:text-[#111111] transition-colors"
          >
            Free consultation <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>
    </PageWrap>
  );
}
