import { ArrowUpRight } from "lucide-react";
import Reveal, { SectionLabel } from "./Reveal";
import { profile } from "@/content/data";

const LINKS = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "LinkedIn", value: "in/rishikajuloori", href: profile.linkedin },
  { label: "GitHub", value: "RishikaJuloori", href: profile.github },
  { label: "Resume", value: "Download PDF", href: profile.resumeHref },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-36 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <SectionLabel index="06" label="Contact" />
        </Reveal>
        <Reveal>
          <h2 className="font-display text-4xl md:text-6xl text-fg mb-4 max-w-2xl leading-[1.05]">
            Let&rsquo;s talk about what you&rsquo;re building.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-fg-muted text-lg max-w-lg mb-4">
            New York, NY — open to Product, BizOps, Strategy &amp; Operations,
            and Business Development roles.
          </p>
          <p className="text-fg-muted max-w-lg mb-14">
            Best way to reach me is email — I try to respond within a day.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-border">
          {LINKS.map((link, i) => (
            <Reveal key={link.label} delay={0.05 + i * 0.05}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex flex-col justify-between h-full border-b sm:border-r border-border p-6 min-h-[140px] hover:bg-bg-elevated/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-widest text-fg-faint">
                    {link.label}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-fg-faint group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>
                <span className="font-display text-xl text-fg group-hover:text-accent transition-colors">
                  {link.value}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
