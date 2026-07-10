import Reveal, { SectionLabel } from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <SectionLabel index="02" label="About" />
        </Reveal>

        <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl leading-tight text-fg sticky top-28">
              Hi, I&rsquo;m Rishika.
            </h2>
          </Reveal>

          <div className="space-y-6 text-fg-muted text-lg leading-relaxed">
            <Reveal delay={0.05}>
              <p>
                I studied computer science at Michigan State, then spent two
                years leading enterprise data migrations for Fortune 500 clients
                at Proliant, the kind of work where a wrong call shows up on a
                VP&rsquo;s dashboard, not a Jira ticket. Now I&rsquo;m at Cornell
                Tech for my MBA, building AI products in the Startup &amp;
                Product Studio.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p>
                I like the messy middle: problems where the data is noisy, the
                stakeholders don&rsquo;t agree, and someone has to decide what
                actually matters. Turning that into a clear call is the part I
                enjoy most.
              </p>
            </Reveal>
            <Reveal delay={0.19}>
              <p>
                I&rsquo;m looking for roles in product management, business
                operations, strategy, or business development, ideally
                somewhere I can keep working at the seam between the technical
                and the human.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
