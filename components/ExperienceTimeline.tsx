"use client";

import { motion } from "framer-motion";
import Reveal, { SectionLabel } from "./Reveal";
import { experience, profile } from "@/content/data";

const hexA = (hex: string, alpha: string) => `${hex}${alpha}`;

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative py-28 md:py-36 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <SectionLabel index="03" label="Experience" />
        </Reveal>
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl text-fg mb-3 max-w-2xl">
            Real-world work, shipped.
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="text-fg-muted mb-14 max-w-xl">
            Four roles, told through what actually changed.{" "}
            <a
              href={profile.resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline underline-offset-4"
            >
              The résumé
            </a>{" "}
            has the rest.
          </p>
        </Reveal>

        <div className="flex flex-col gap-5">
          {experience.map((exp, i) => {
            const ac = exp.accent;
            return (
              <Reveal key={exp.id} delay={Math.min(i * 0.06, 0.24)}>
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative rounded-2xl border border-border bg-bg-elevated/40 overflow-hidden"
                >
                  {/* accent rail */}
                  <span
                    className="absolute left-0 top-0 bottom-0 w-1 transition-opacity duration-300 opacity-40 group-hover:opacity-100"
                    style={{ backgroundColor: ac }}
                  />
                  {/* hover wash */}
                  <span
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      backgroundImage: `radial-gradient(110% 130% at 0% 0%, ${hexA(
                        ac,
                        "1c"
                      )} 0%, ${hexA(ac, "08")} 34%, transparent 62%)`,
                    }}
                  />

                  <div className="relative grid md:grid-cols-[1.5fr_1fr] gap-6 md:gap-10 p-7 sm:p-8">
                    <div>
                      <div className="flex items-baseline justify-between gap-4 mb-1">
                        <h3 className="font-display text-2xl text-fg">
                          {exp.role}
                        </h3>
                        <span className="font-mono text-[11px] text-fg-faint whitespace-nowrap">
                          {exp.date}
                        </span>
                      </div>
                      <p
                        className="font-mono text-[11px] uppercase tracking-[0.16em] mb-4"
                        style={{ color: ac }}
                      >
                        {exp.org}
                      </p>
                      <p className="text-fg-muted text-[15px] sm:text-base leading-relaxed max-w-xl">
                        {exp.oneLiner}
                      </p>
                    </div>

                    {/* stats */}
                    <div className="flex md:flex-col gap-6 md:gap-4 flex-wrap md:border-l md:border-border md:pl-8 justify-start md:justify-center">
                      {exp.stats.map((st) => (
                        <div key={st.label} className="min-w-[70px]">
                          <div
                            className="font-display text-3xl sm:text-4xl leading-none"
                            style={{ color: ac }}
                          >
                            {st.value}
                          </div>
                          <div className="font-mono text-[10px] uppercase tracking-wider text-fg-faint mt-1.5">
                            {st.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
