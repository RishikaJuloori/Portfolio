"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ExternalLink,
  FileText,
  Route,
  Target,
  X,
} from "lucide-react";
import { lockScroll, unlockScroll } from "./SmoothScroll";
import { type Project } from "@/content/data";

const hexA = (hex: string, alpha: string) => `${hex}${alpha}`;

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const ac = project.accent;

  useEffect(() => {
    lockScroll();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      unlockScroll();
    };
  }, [onClose]);

  const sections = [
    { key: "Problem", icon: Target, body: project.problem },
    { key: "Approach", icon: Route, body: project.approach },
    { key: "Outcome", icon: CheckCircle2, body: project.outcome },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-0 sm:p-6 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
      />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full sm:max-w-3xl my-0 sm:my-8 bg-bg-elevated border border-border-strong sm:rounded-2xl overflow-hidden min-h-screen sm:min-h-0"
        style={{ boxShadow: `0 30px 80px -20px ${hexA(ac, "55")}` }}
      >
        <div
          className="relative px-7 sm:px-9 pt-8 pb-7 border-b border-border"
          style={{
            backgroundImage: `radial-gradient(120% 140% at 0% 0%, ${hexA(
              ac,
              "2e"
            )} 0%, ${hexA(ac, "10")} 32%, transparent 62%)`,
          }}
        >
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close project details"
            className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full border border-border-strong text-fg-muted hover:text-fg hover:border-fg-muted transition-colors"
          >
            <X size={17} />
          </button>
          <span
            className="inline-block h-1 w-10 rounded-full mb-5"
            style={{ backgroundColor: ac }}
          />
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted mb-2">
            {project.role}
          </p>
          <h3
            id="project-modal-title"
            className="font-display text-3xl sm:text-4xl text-fg leading-tight"
          >
            {project.title}
          </h3>
          <p className="font-display italic text-lg mt-2" style={{ color: ac }}>
            {project.tagline}
          </p>
        </div>

        <div className="px-7 sm:px-9 py-8 grid md:grid-cols-3 gap-6">
          {sections.map(({ key, icon: Icon, body }) => (
            <div key={key} className="flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="w-7 h-7 rounded-md flex items-center justify-center shrink-0"
                  style={{ backgroundColor: hexA(ac, "1f"), color: ac }}
                >
                  <Icon size={15} />
                </span>
                <span
                  className="font-mono text-[11px] uppercase tracking-[0.18em]"
                  style={{ color: ac }}
                >
                  {key}
                </span>
              </div>
              <p className="text-fg-muted text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <div className="px-7 sm:px-9 pb-9 pt-1 flex flex-col gap-5 border-t border-border">
          <div className="flex flex-wrap gap-2 pt-6">
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
          {project.links && project.links.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {project.links.map((link) => {
                const Icon = link.kind === "pdf" ? FileText : ExternalLink;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest border border-border-strong rounded-full px-4 py-2.5 text-fg hover:border-fg-muted transition-colors"
                  >
                    <Icon size={14} />
                    {link.label}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
