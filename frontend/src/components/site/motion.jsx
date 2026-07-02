import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export const Reveal = ({ children, delay = 0, y = 40, className = "", ...rest }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.9, delay, ease: EASE }}
    {...rest}
  >
    {children}
  </motion.div>
);

export const LetterReveal = ({ text, className = "", as: Tag = "h1", delay = 0 }) => {
  const words = text.split(" ");
  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: delay + wi * 0.08, ease: EASE }}
          >
            {word}
          </motion.span>
          {wi < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </Tag>
  );
};

export const ParallaxImage = ({ src, alt, className = "", imgClassName = "", speed = 12 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed}%`, `${speed}%`]);
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale: 1.25 }}
        className={`w-full h-full object-cover ${imgClassName}`}
        loading="lazy"
      />
    </div>
  );
};

export const ClipReveal = ({ children, className = "", delay = 0 }) => (
  <motion.div
    className={className}
    initial={{ clipPath: "inset(100% 0 0 0)" }}
    whileInView={{ clipPath: "inset(0% 0 0 0)" }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 1.2, delay, ease: EASE }}
  >
    {children}
  </motion.div>
);

export const PageWrap = ({ children, testId }) => (
  <motion.main
    data-testid={testId}
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12 }}
    transition={{ duration: 0.6, ease: EASE }}
  >
    {children}
  </motion.main>
);

export const Marquee = ({ items, className = "" }) => (
  <div className={`marquee ${className}`}>
    {[0, 1].map((i) => (
      <div key={i} className="marquee-track" aria-hidden={i === 1}>
        {items.map((item, idx) => (
          <span key={idx} className="flex items-center">
            <span className="font-serif-display text-5xl md:text-7xl lg:text-8xl font-medium px-8">{item}</span>
            <span className="w-2 h-2 bg-[#111111] rounded-full shrink-0" />
          </span>
        ))}
      </div>
    ))}
  </div>
);
