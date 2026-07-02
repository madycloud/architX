import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageWrap, Reveal, LetterReveal, ClipReveal } from "@/components/site/motion";
import { PROJECTS } from "@/data/content";

export default function Projects() {
  return (
    <PageWrap testId="projects-page">
      <section className="px-6 md:px-12 lg:px-24 pt-32 md:pt-44 pb-16">
        <Reveal delay={0.1}>
          <p className="overline-label mb-6">Selected work</p>
        </Reveal>
        <LetterReveal
          text="Spaces crafted with warmth and clarity"
          className="font-serif-display text-5xl sm:text-6xl lg:text-8xl font-medium tracking-tight leading-[0.95] max-w-5xl"
          delay={0.2}
        />
        <Reveal delay={0.5} className="max-w-2xl mt-10">
          <p className="text-base leading-relaxed text-[#5C5A56]">
            A selection of residences and interiors delivered across Gokak and Belagavi — each one shaped by its site,
            its brief and the people who live there.
          </p>
        </Reveal>
      </section>

      <section data-testid="projects-grid" className="px-6 md:px-12 lg:px-24 pb-24 lg:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.15} className={i % 2 === 1 ? "md:mt-24" : ""}>
              <div data-testid={`project-card-${p.slug}`} className="group">
                <ClipReveal>
                  <div className="img-zoom-wrap">
                    <img src={p.image} alt={p.title} className="w-full h-[50vh] md:h-[65vh] object-cover" loading="lazy" />
                  </div>
                </ClipReveal>
                <div className="mt-6 flex items-start justify-between border-b border-[#DCD9D3] pb-6">
                  <div>
                    <h3 className="font-serif-display text-3xl font-medium group-hover:italic transition-all">{p.title}</h3>
                    <p className="mt-2 text-sm text-[#5C5A56]">{p.desc}</p>
                    <p className="mt-3 text-xs uppercase tracking-[0.2em] font-bold text-[#9A968F]">{p.location}</p>
                  </div>
                  <span className="font-serif-display text-2xl text-[#9A968F] shrink-0 ml-6">{p.year}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 pb-24 lg:pb-32 text-center">
        <Reveal>
          <h2 className="font-serif-display text-4xl lg:text-6xl font-medium tracking-tight leading-none">
            Your project could be next
          </h2>
          <Link
            to="/contact"
            data-testid="projects-cta"
            className="mt-10 inline-flex items-center gap-3 bg-[#111111] text-[#F8F7F5] px-8 py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#333333] transition-colors"
          >
            Start your project <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>
    </PageWrap>
  );
}
