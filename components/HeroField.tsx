"use client";

import { useEffect, useRef } from "react";

/**
 * "Warp" — warm silk/signal threads that gently wave, carry a slow rhythmic
 * pulse (a nod to tala), and part around the cursor. Not space; tactile + warm.
 */
export default function HeroField({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    // colors (Kiln)
    const clay = "244, 236, 221"; // limestone/fg
    const ember = "217, 123, 82";
    const celadon = "140, 191, 165";

    type Thread = { x0: number; phase: number; freq: number; amp: number; accent: 0 | 1 | 2 };
    let threads: Thread[] = [];

    function build() {
      const count = Math.max(26, Math.floor(width / 34));
      threads = [];
      for (let i = 0; i < count; i++) {
        const t = i / (count - 1);
        // accent a few threads (ember / celadon), rest are faint clay
        let accent: 0 | 1 | 2 = 0;
        if (i % 9 === 4) accent = 1;
        else if (i % 11 === 7) accent = 2;
        threads.push({
          x0: t * width,
          phase: i * 0.7,
          freq: 0.006 + (i % 5) * 0.0011,
          amp: 10 + (i % 7) * 3.2,
          accent,
        });
      }
    }

    function resize() {
      const parent = canvas!.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
    }

    let mouseX = -9999;
    function onMove(e: PointerEvent) {
      const r = canvas!.getBoundingClientRect();
      mouseX = e.clientX - r.left;
    }
    function onLeave() {
      mouseX = -9999;
    }

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);

    const SIGMA = 130; // cursor influence radius
    let raf = 0;
    let frame = 0;

    function render() {
      frame++;
      const time = frame;
      ctx!.clearRect(0, 0, width, height);

      // slow tala pulse sweeping left -> right
      const beatPeriod = 620;
      const beatX = ((time % beatPeriod) / beatPeriod) * (width * 1.25) - width * 0.12;

      const stepY = 26;
      for (const th of threads) {
        // cursor parting: push thread horizontally away from pointer x
        let cursorPush = 0;
        if (mouseX > -9000) {
          const dx = th.x0 - mouseX;
          cursorPush =
            Math.sign(dx || 1) *
            60 *
            Math.exp(-(dx * dx) / (2 * SIGMA * SIGMA));
        }

        // pulse brightness for this thread
        const db = th.x0 - beatX;
        const pulse = Math.exp(-(db * db) / (2 * 90 * 90));

        const baseColor =
          th.accent === 1 ? ember : th.accent === 2 ? celadon : clay;
        const baseAlpha =
          th.accent === 0 ? 0.05 : 0.12;
        const alpha = baseAlpha + pulse * (th.accent === 0 ? 0.14 : 0.5);
        const lineW = th.accent === 0 ? 1 : 1.4;

        ctx!.beginPath();
        for (let y = -stepY; y <= height + stepY; y += stepY) {
          const wave = prefersReducedMotion
            ? Math.sin(y * th.freq + th.phase) * th.amp
            : Math.sin(y * th.freq + th.phase + time * 0.006) * th.amp;
          const x = th.x0 + wave + cursorPush * (1 - y / (height * 2.2));
          if (y <= -stepY) ctx!.moveTo(x, y);
          else ctx!.lineTo(x, y);
        }
        ctx!.strokeStyle = `rgba(${baseColor}, ${alpha})`;
        ctx!.lineWidth = lineW;
        ctx!.stroke();

        // glow node riding the pulse on accent threads
        if (th.accent !== 0 && pulse > 0.25 && !prefersReducedMotion) {
          const ny = height * (0.35 + 0.3 * Math.sin(th.phase + time * 0.004));
          const nx =
            th.x0 +
            Math.sin(ny * th.freq + th.phase + time * 0.006) * th.amp +
            cursorPush;
          ctx!.beginPath();
          ctx!.arc(nx, ny, 2.4 + pulse * 2, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(${baseColor}, ${0.5 * pulse})`;
          ctx!.fill();
        }
      }

      raf = requestAnimationFrame(render);
    }

    raf = requestAnimationFrame(render);
    if (prefersReducedMotion) {
      render();
      cancelAnimationFrame(raf);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
