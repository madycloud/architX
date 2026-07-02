import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageWrap, Reveal, LetterReveal, ParallaxImage, ClipReveal, Marquee } from "@/components/site/motion";
import { IMAGES, FOUNDERS, STATS } from "@/data/content";

export default function About() {
  return (
    <PageWrap testId="about-page">
      <section className="px-6 md:px-12 lg:px-24 pt-32 md:pt-44 pb-16">
        <Reveal delay={0.1}>
          <p className="overline-label mb-6">About ArchtiX</p>
        </Reveal>
        <LetterReveal
          text="A deliberately personal practice"
          className="font-serif-display text-5xl sm:text-6xl lg:text-8xl font-medium tracking-tight leading-[0.95] max-w-5xl"
          delay={0.2}
        />
        <Reveal delay={0.5} className="max-w-2xl mt-10">
          <p className="text-base leading-relaxed text-[#5C5A56]">
            ArchtiX is an architecture and interior design studio based in Gokak, founded by brothers
            Ar. Akshay Varadai and Er. Ashish Varadai. The founders lead every project from brief to handover, so the
            thinking that shapes the first sketch carries all the way through to the last detail on site.
          </p>
        </Reveal>
      </section>

      <section className="px-6 md:px-12 lg:px-24">
        <ClipReveal>
          <ParallaxImage src={IMAGES.about} alt="ArchtiX on site" className="h-[50vh] md:h-[75vh]" />
        </ClipReveal>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-24 lg:py-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 border-t border-[#DCD9D3] pt-12">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className="text-center md:text-left">
              <p className="font-serif-display text-5xl lg:text-6xl font-medium">{s.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] font-bold text-[#5C5A56]">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-12 border-y border-[#DCD9D3]">
        <Marquee items={["Architecture", "Interiors", "Construction", "Turnkey"]} />
      </section>

      {/* Founders */}
      <section data-testid="founders-section" className="px-6 md:px-12 lg:px-24 py-24 lg:py-32">
        <Reveal>
          <p className="overline-label mb-4">The founders</p>
          <h2 className="font-serif-display text-4xl lg:text-6xl font-medium tracking-tight leading-none mb-16">
            Two brothers, one vision
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {FOUNDERS.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.15} data-testid={`founder-card-${i}`}>
              <div className="img-zoom-wrap">
                <img src={f.image} alt={f.name} className="w-full h-[55vh] md:h-[65vh] object-cover" loading="lazy" />
              </div>
              <h3 className="mt-8 font-serif-display text-3xl font-medium">{f.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] font-bold text-[#9A968F]">{f.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-[#5C5A56] max-w-md">{f.bio}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#EAE7E1] px-6 md:px-12 lg:px-24 py-24 lg:py-32">
        <Reveal>
          <h2 className="font-serif-display text-3xl lg:text-5xl font-medium leading-snug max-w-4xl">
            What the work is built on — three principles that run through every project we take on.
          </h2>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { t: "Considered", d: "We ask the right questions before drawing a single line — the site, your budget, and the way you live." },
            { t: "Crafted", d: "Materials, light and proportion composed with care, executed with engineering precision on site." },
            { t: "Lasting", d: "Homes designed to feel calm and timeless — refined, functional and made to last for generations." },
          ].map((v, i) => (
            <Reveal key={v.t} delay={i * 0.12}>
              <p className="text-xs font-bold text-[#9A968F] mb-4">0{i + 1}</p>
              <h3 className="font-serif-display text-3xl font-medium mb-4">{v.t}</h3>
              <p className="text-sm leading-relaxed text-[#5C5A56]">{v.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-24 lg:py-32 text-center">
        <Reveal>
          <h2 className="font-serif-display text-4xl lg:text-6xl font-medium tracking-tight leading-none">
            Ready to begin?
          </h2>
          <Link
            to="/contact"
            data-testid="about-cta"
            className="mt-10 inline-flex items-center gap-3 bg-[#111111] text-[#F8F7F5] px-8 py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#333333] transition-colors"
          >
            Book a consultation <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>
    </PageWrap>
  );
}
