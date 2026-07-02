import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { IMAGES } from "@/data/content";

const EASE = [0.22, 1, 0.36, 1];
const VIDEO_URL = "https://storage.googleapis.com/webild/default/templates/marbella/hero/hero.mp4";

export const VideoScrollHero = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [duration, setDuration] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onMeta = () => setDuration(video.duration);
    if (video.readyState >= 1) onMeta();
    video.addEventListener("loadedmetadata", onMeta);
    return () => video.removeEventListener("loadedmetadata", onMeta);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const video = videoRef.current;
    if (!video || !duration) return;
    const target = progress * duration;
    if (Math.abs(video.currentTime - target) > 0.01) {
      video.currentTime = target;
    }
  });

  return (
    <section ref={containerRef} data-testid="hero-section" className="relative h-[300vh]">
      <div className="sticky top-0 h-screen min-h-[600px] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ clipPath: "inset(100% 0 0 0)", scale: 1.1 }}
          animate={{ clipPath: "inset(0% 0 0 0)", scale: 1 }}
          transition={{ duration: 1.4, ease: EASE }}
        >
          <img src={IMAGES.hero} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
          <video
            ref={videoRef}
            src={VIDEO_URL}
            className="relative w-full h-full object-cover"
            muted
            playsInline
            preload="auto"
            data-testid="hero-video"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/70 via-[#111111]/35 to-transparent" />
        </motion.div>
        <div className="relative h-full flex flex-col justify-end px-6 md:px-12 lg:px-24 pb-16 md:pb-24">
          <motion.p
            className="overline-label !text-[#F8F7F5] mb-6"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease: EASE }}
          >
            Architect & Interior Designers — Gokak
          </motion.p>
          <motion.h1
            className="font-serif-display text-5xl sm:text-6xl lg:text-8xl font-medium tracking-tight leading-[0.95] max-w-5xl text-[#F8F7F5]"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 1.05, ease: EASE }}
          >
            Dream houses defined by clarity
          </motion.h1>
          <motion.p
            className="mt-8 max-w-md text-base leading-relaxed text-[#E8E6E1]"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 1.3, ease: EASE }}
          >
            ArchtiX offers architectural and interior design consultations that help you achieve your dream house —
            from the first sketch to the last detail on site.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
