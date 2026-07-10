"use client";

import { motion } from "framer-motion";
import HeroField from "./HeroField";
import { profile } from "@/content/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 opacity-90">
        <HeroField className="w-full h-full" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-bg/35 via-bg/25 to-bg pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/60 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 w-full">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-mono text-xs uppercase tracking-[0.25em] text-accent-2 mb-6"
        >
          Product Strategy · Data · Cornell MBA
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.98] tracking-tight text-[#fbf5ea] max-w-4xl [text-shadow:0_2px_40px_rgba(0,0,0,0.55)]"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="font-display italic text-2xl sm:text-3xl md:text-4xl text-accent mt-6 max-w-2xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-fg text-base sm:text-lg mt-6 max-w-xl leading-relaxed"
        >
          {profile.positioning}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-fg-muted text-sm sm:text-base mt-3 max-w-xl leading-relaxed"
        >
          {profile.subTagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex flex-wrap items-center gap-4 mt-10"
        >
          <a
            href={profile.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest bg-accent text-bg rounded-full px-6 py-3 hover:opacity-85 transition-opacity"
          >
            View Resume
          </a>
          <a
            href="#work"
            className="font-mono text-xs uppercase tracking-widest border border-border-strong text-fg rounded-full px-6 py-3 hover:border-accent hover:text-accent transition-colors"
          >
            See the Work
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-fg-faint">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-accent to-transparent"
        />
      </motion.div>
    </section>
  );
}
