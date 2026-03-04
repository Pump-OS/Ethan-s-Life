"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ChevronDown, Play } from "lucide-react";
import XIcon from "./XIcon";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const FADE_DURATION = 1.2;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoFade, setVideoFade] = useState(1);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    let raf: number;

    const tick = () => {
      if (v.duration && v.duration > 0) {
        const remaining = v.duration - v.currentTime;
        const t = v.currentTime;
        let fade = 1;
        if (remaining <= FADE_DURATION) {
          fade = remaining / FADE_DURATION;
        } else if (t <= FADE_DURATION) {
          fade = t / FADE_DURATION;
        }
        setVideoFade(fade);
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background video with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY, scale: imgScale }}
        aria-hidden="true"
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover transition-none"
          style={{ opacity: videoFade }}
        >
          <source src="/images/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface/50 via-transparent to-surface/50" />
      </motion.div>

      {/* Gradient glow layer on top of image */}
      <motion.div
        className="hero-gradient absolute inset-0 z-[1]"
        style={{ y: bgY }}
        aria-hidden="true"
      />

      {/* Animated bloom orbs */}
      <div className="absolute inset-0 z-[2] overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-accent-green/10 bloom"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -right-32 bottom-1/4 h-[400px] w-[400px] rounded-full bg-accent-blue/10 bloom"
          animate={{
            x: [0, -20, 30, 0],
            y: [0, 20, -30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          {/* Title */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl"
          >
            <span className="text-gradient">Ethan&apos;s</span>
            <br />
            <span className="text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]">
              Life
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            className="mx-auto max-w-xl text-lg font-light leading-relaxed text-white/60 sm:text-xl"
          >
            A quiet suburb. A secret group. A teenager
            <br className="hidden sm:block" /> who wanted more. And got more than he bargained for.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#episodes"
              className="group inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-accent-green hover:text-black hover:shadow-[0_0_40px_rgba(0,255,135,0.3)]"
            >
              <Play className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              Watch Episodes
            </a>
            <a
              href="https://x.com/Ethan_Series"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white/80 backdrop-blur-md transition-all duration-300 hover:border-white/25 hover:bg-white/10 hover:text-white"
            >
              <XIcon className="h-4 w-4" />
              Follow on X
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <a
          href="#episodes"
          className="flex flex-col items-center gap-2 text-white/30 transition-colors hover:text-white/60"
          aria-label="Scroll to episodes"
        >
          <span className="text-[10px] font-medium tracking-[0.3em] uppercase">
            Scroll
          </span>
          <ChevronDown className="h-4 w-4 animate-scroll-hint" />
        </a>
      </motion.div>
    </section>
  );
}
