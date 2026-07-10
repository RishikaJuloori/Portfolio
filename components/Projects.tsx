"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal, { SectionLabel } from "./Reveal";
import ProjectModal from "./ProjectModal";
import ProjectMotif from "./ProjectMotif";
import { projects, type Project } from "@/content/data";

const hexA = (hex: string, alpha: string) => `${hex}${alpha}`;

function Preview({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const ac = project.accent;
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={project.id}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-3xl border p-9 min-h-[420px] flex flex-col"
        style={{
          borderColor: hexA(ac, "33"),
          backgroundImage: `radial-gradient(130% 120% at 100% 0%, ${hexA(
            ac,
            "22"
          )} 0%, ${hexA(ac, "0d")} 38%, transparent 70%)`,
          backgroundColor: "var(--bg-elevated)",
        }}
      >
        <ProjectMotif id={project.id} accent={ac} />

        <div className="relative flex items-center gap-3">
          <span className="font-mono text-xs" style={{ color: ac }}>
            {String(projects.indexOf(project) + 1).padStart(2, "0")}
          </span>
          <span className="h-px w-8" style={{ backgroundColor: hexA(ac, "55") }} />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted">
            {project.role}
          </span>
        </div>

        <h3 className="relative font-display text-4xl text-fg mt-5 leading-tight">
          {project.title}
        </h3>
        <p
          className="relative font-display italic text-xl mt-3 max-w-sm"
          style={{ color: ac }}
        >
          {project.tagline}
        </p>

        <div className="relative flex flex-wrap gap-2 mt-6">
          {project.tags.map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] uppercase tracking-wider rounded-full px-3 py-1.5 border"
              style={{ borderColor: hexA(ac, "40"), color: "var(--fg-muted)" }}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="relative mt-auto pt-8">
          <button
            onClick={onOpen}
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest rounded-full px-6 py-3 transition-colors"
            style={{
              backgroundColor: ac,
              color: "var(--bg)",
            }}
          >
            View case study
            <ArrowUpRight
              size={15}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const [active, setActive] = useState<Project>(projects[0]);
  const [selected, setSelected] = useState<Project | null>(null);
  const close = useCallback(() => setSelected(null), []);

  return (
    <section id="projects" className="relative py-28 md:py-36 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <SectionLabel index="04" label="Projects" />
        </Reveal>
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl text-fg mb-3 max-w-2xl">
            Product thinking, AI, and strategy work.
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="text-fg-muted mb-14 max-w-xl">
            Hover a project to preview it — click to open the full case study
            (problem, approach, outcome).
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-14 items-start">
          {/* index list */}
          <Reveal>
            <ul className="flex flex-col">
              {projects.map((p, i) => {
                const isActive = active.id === p.id;
                return (
                  <li key={p.id}>
                    <button
                      onMouseEnter={() => setActive(p)}
                      onFocus={() => setActive(p)}
                      onClick={() => setSelected(p)}
                      aria-label={`Open case study: ${p.title}`}
                      className="group w-full text-left border-t border-border last:border-b py-5 flex flex-col gap-2 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className="font-mono text-xs w-6 shrink-0 transition-colors"
                          style={{ color: isActive ? p.accent : "var(--fg-faint)" }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className="font-display text-2xl md:text-[1.7rem] leading-tight flex-1 transition-colors"
                          style={{ color: isActive ? p.accent : "var(--fg)" }}
                        >
                          {p.title}
                        </span>
                        <ArrowUpRight
                          size={18}
                          className="shrink-0 transition-all duration-300"
                          style={{
                            color: p.accent,
                            opacity: isActive ? 1 : 0,
                            transform: isActive
                              ? "translate(0,0)"
                              : "translate(-4px,4px)",
                          }}
                        />
                      </div>
                      <span className="pl-10 font-mono text-[10px] uppercase tracking-[0.18em] text-fg-faint">
                        {p.role}
                      </span>
                      {/* mobile-only detail (preview panel is hidden below lg) */}
                      <div className="pl-10 lg:hidden">
                        <p className="text-fg-muted text-sm mt-1">{p.tagline}</p>
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {p.tags.slice(0, 3).map((t) => (
                            <span
                              key={t}
                              className="font-mono text-[9px] uppercase tracking-wider rounded-full px-2 py-1 border border-border text-fg-muted"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          {/* sticky themed preview (desktop) */}
          <div className="hidden lg:block sticky top-28">
            <Preview project={active} onOpen={() => setSelected(active)} />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={close} />}
      </AnimatePresence>
    </section>
  );
}
