import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import { PageWrap, Reveal, LetterReveal, ParallaxImage, ClipReveal, Marquee } from "@/components/site/motion";
import { IMAGES, SERVICES, PROJECTS, STATS, TESTIMONIALS, FOUNDERS } from "@/data/content";

export default function Home() {
  return (
    <PageWrap testId="home-page">
      {/* Hero */}
      <section data-testid="hero-section" className="relative h-screen min-h-[600px] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ clipPath: "inset(100% 0 0 0)", scale: 1.1 }}
          animate={{ clipPath: "inset(0% 0 0 0)", scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={IMAGES.hero} alt="Modern architecture by ArchtiX" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/70 via-[#111111]/35 to-transparent" />
        </motion.div>
        <div className="relative h-full flex flex-col justify-end px-6 md:px-12 lg:px-24 pb-16 md:pb-24">
          <motion.p
            className="overline-label !text-[#F8F7F5] mb-6"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            Architect & Interior Designers — Gokak
          </motion.p>
          <motion.h1
            className="font-serif-display text-5xl sm:text-6xl lg:text-8xl font-medium tracking-tight leading-[0.95] max-w-5xl text-[#F8F7F5]"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
          >
            Dream houses defined by clarity
          </motion.h1>
          <motion.p
            className="mt-8 max-w-md text-base leading-relaxed text-[#E8E6E1]"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
          >
            ArchtiX offers architectural and interior design consultations that help you achieve your dream house —
            from the first sketch to the last detail on site.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section data-testid="stats-section" className="px-6 md:px-12 lg:px-24 py-24 lg:py-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 border-t border-[#DCD9D3] pt-12">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className="text-center md:text-left">
              <p className="font-serif-display text-5xl lg:text-6xl font-medium">{s.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] font-bold text-[#5C5A56]">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-6 md:px-12 lg:px-24 pb-24 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="overline-label mb-8">The studio</p>
              <h2 className="font-serif-display text-3xl lg:text-5xl font-medium leading-snug">
                Every project begins with reading the site and your brief honestly — deciding what the new work should
                add, contrast, or preserve. <span className="italic text-[#5C5A56]">Nothing is drawn before the right questions are asked.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <Link
                to="/about"
                data-testid="home-about-link"
                className="mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-bold link-sweep"
              >
                About us <ArrowRight size={14} />
              </Link>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <ClipReveal>
              <ParallaxImage src={IMAGES.project2} alt="Interior by ArchtiX" className="h-[50vh] lg:h-[65vh]" speed={8} />
            </ClipReveal>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="py-12 border-y border-[#DCD9D3]">
        <Marquee items={["Considered", "Crafted", "Lasting", "Elegant"]} />
      </section>

      {/* Services */}
      <section data-testid="home-services-section" className="px-6 md:px-12 lg:px-24 py-24 lg:py-32">
        <Reveal>
          <p className="overline-label mb-4">Services</p>
          <h2 className="font-serif-display text-4xl lg:text-6xl font-medium tracking-tight max-w-3xl leading-none">
            Six disciplines, one seamless process
          </h2>
        </Reveal>
        <div className="mt-16 border-t border-[#DCD9D3]">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <Link
                to="/services"
                data-testid={`home-service-${s.slug}`}
                className="group grid grid-cols-12 items-center gap-4 py-6 border-b border-[#DCD9D3] hover:bg-white transition-colors px-2 md:px-4"
              >
                <span className="col-span-1 text-xs font-bold text-[#9A968F]">0{i + 1}</span>
                <span className="col-span-8 md:col-span-5 font-serif-display text-2xl md:text-4xl font-medium group-hover:italic transition-all">
                  {s.title}
                </span>
                <span className="hidden md:block md:col-span-5 text-sm text-[#5C5A56]">{s.tag}</span>
                <span className="col-span-3 md:col-span-1 flex justify-end">
                  <Plus size={20} className="transition-transform duration-500 group-hover:rotate-90" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Founders quote */}
      <section className="bg-[#EAE7E1] px-6 md:px-12 lg:px-24 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="font-serif-display text-6xl text-[#9A968F] leading-none">"</p>
            <p className="font-serif-display text-2xl lg:text-4xl font-medium leading-snug">
              We founded ArchtiX with the belief that residential design should feel timeless, calm and deeply
              personal. Every project is approached with clarity, warmth and careful attention to detail.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              {FOUNDERS.map((f) => (
                <img key={f.name} src={f.image} alt={f.name} className="w-14 h-14 rounded-full object-cover border-2 border-white" />
              ))}
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] font-bold">Ar. Akshay Varadai & Er. Ashish Varadai</p>
            <p className="mt-1 text-sm text-[#5C5A56]">Founders, ArchtiX</p>
          </Reveal>
        </div>
      </section>

      {/* Featured projects */}
      <section data-testid="home-projects-section" className="px-6 md:px-12 lg:px-24 py-24 lg:py-32">
        <div className="flex items-end justify-between mb-16">
          <Reveal>
            <p className="overline-label mb-4">Selected work</p>
            <h2 className="font-serif-display text-4xl lg:text-6xl font-medium tracking-tight leading-none">Recent projects</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <Link to="/projects" data-testid="home-projects-link" className="hidden md:inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-bold link-sweep">
              All projects <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {PROJECTS.slice(0, 2).map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.15} className={i === 1 ? "md:mt-24" : ""}>
              <Link to="/projects" data-testid={`home-project-${p.slug}`} className="group block">
                <div className="img-zoom-wrap">
                  <img src={p.image} alt={p.title} className="w-full h-[45vh] md:h-[60vh] object-cover" loading="lazy" />
                </div>
                <div className="mt-6 flex items-start justify-between">
                  <div>
                    <h3 className="font-serif-display text-2xl lg:text-3xl font-medium">{p.title}</h3>
                    <p className="mt-1 text-sm text-[#5C5A56]">{p.location}</p>
                  </div>
                  <span className="text-xs font-bold text-[#9A968F]">{p.year}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section data-testid="testimonials-section" className="px-6 md:px-12 lg:px-24 pb-24 lg:pb-32">
        <Reveal>
          <p className="overline-label mb-4">Client perspectives</p>
          <h2 className="font-serif-display text-4xl lg:text-5xl font-medium tracking-tight max-w-2xl leading-none mb-16">
            A few words from the people who live with the result
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#DCD9D3] border border-[#DCD9D3]">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.12} className="bg-[#F8F7F5] p-8 lg:p-10">
              <p className="font-serif-display text-4xl text-[#9A968F] leading-none mb-4">"</p>
              <p className="text-sm leading-relaxed text-[#5C5A56]">{t.quote}</p>
              <p className="mt-8 text-sm font-bold">{t.name}</p>
              <p className="text-xs uppercase tracking-[0.15em] text-[#9A968F] mt-1">{t.role}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-24 pb-24 lg:pb-32">
        <div className="relative overflow-hidden">
          <ParallaxImage src={IMAGES.project3} alt="Interior" className="h-[55vh] md:h-[70vh]" />
          <div className="absolute inset-0 bg-[#111111]/45 flex flex-col items-start justify-end p-8 md:p-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif-display text-3xl md:text-5xl lg:text-6xl font-medium text-white max-w-2xl leading-tight"
            >
              Thoughtful architecture and design begins here
            </motion.h2>
            <Link
              to="/contact"
              data-testid="home-bottom-cta"
              className="mt-8 inline-flex items-center gap-3 bg-[#F8F7F5] text-[#111111] px-8 py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-white transition-colors"
            >
              Start your project <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </PageWrap>
  );
}
