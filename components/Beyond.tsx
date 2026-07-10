"use client";

import { motion } from "framer-motion";
import Reveal, { SectionLabel } from "./Reveal";
import TalaCycle from "./TalaCycle";
import { beyond } from "@/content/data";

function HoverCard({
  label,
  title,
  detail,
  languages,
  className = "",
}: {
  label: string;
  title: string;
  detail: string;
  languages?: string[];
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative rounded-2xl border border-border bg-bg-elevated/40 p-6 overflow-hidden hover:border-border-strong transition-colors ${className}`}
    >
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-accent-soft to-transparent" />
      <div className="relative flex flex-col h-full">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-2 mb-3">
          {label}
        </p>
        <h3 className="font-display text-2xl text-fg leading-snug">{title}</h3>

        {languages ? (
          <div className="flex flex-wrap gap-2 mt-4">
            {languages.map((l) => (
              <span
                key={l}
                className="font-mono text-xs border border-border-strong rounded-full px-3 py-1.5 text-fg-muted group-hover:border-accent group-hover:text-fg transition-colors"
              >
                {l}
              </span>
            ))}
          </div>
        ) : (
          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out mt-0 group-hover:mt-4">
            <div className="overflow-hidden">
              <p className="text-fg-muted text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {detail}
              </p>
            </div>
          </div>
        )}

        <span className="mt-auto pt-4 font-mono text-[10px] uppercase tracking-widest text-fg-faint opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {languages ? "" : "Hover to read"}
        </span>
      </div>
    </motion.div>
  );
}

export default function Beyond() {
  return (
    <section id="beyond" className="relative py-28 md:py-36 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <SectionLabel index="05" label="Beyond the Resume" />
        </Reveal>
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl text-fg mb-3 max-w-2xl">
            The stuff that makes me, me.
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="text-fg-muted mb-12 max-w-xl">
            Hover any tile to open it up a little.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 auto-rows-[minmax(0,auto)] gap-5">
          {/* Music — feature tile with the tala visual */}
          <Reveal className="md:col-span-2 md:row-span-2">
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="group relative h-full rounded-2xl border border-border bg-bg-elevated/40 overflow-hidden hover:border-border-strong transition-colors"
            >
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-accent-soft to-transparent" />
              <div className="relative grid sm:grid-cols-[1.1fr_0.9fr] gap-6 p-8 h-full items-center">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-2 mb-3">
                    {beyond.music.label}
                  </p>
                  <h3 className="font-display text-3xl text-fg leading-tight mb-4">
                    {beyond.music.title}
                  </h3>
                  <p className="text-fg-muted leading-relaxed">
                    {beyond.music.text}
                  </p>
                </div>
                <div className="flex justify-center">
                  <TalaCycle />
                </div>
              </div>
            </motion.div>
          </Reveal>

          {beyond.cards.map((c, i) => (
            <Reveal
              key={c.id}
              delay={0.08 + i * 0.06}
              className={c.id === "languages" ? "md:col-span-3" : ""}
            >
              <HoverCard
                label={c.label}
                title={c.title}
                detail={c.detail}
                languages={"languages" in c ? c.languages : undefined}
                className="h-full"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
