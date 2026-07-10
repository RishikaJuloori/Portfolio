export const profile = {
  name: "Rishika Juloori",
  location: "New York, NY",
  email: "rj437@cornell.edu",
  linkedin: "https://www.linkedin.com/in/rishikajuloori",
  github: "https://github.com/RishikaJuloori",
  resumeHref: "/resume/Rishika_Juloori_Resume.pdf",
  tagline: "I find the pattern inside the noise.",
  // Clear positioning line — answers "who are you and what do you do" fast.
  positioning:
    "Product & strategy, built on enterprise data. Currently at Cornell Tech building AI products.",
  subTagline:
    "I turn messy, high-stakes problems — a million-record migration, a satellite's collision risk, a raga's rhythm cycle — into something legible enough to act on.",
};

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export type ProjectLink = { label: string; href: string; kind?: "github" | "deck" | "demo" | "pdf" };

export type Project = {
  id: string;
  title: string;
  tagline: string;
  role: string;
  tags: string[];
  problem: string;
  approach: string;
  outcome: string;
  links?: ProjectLink[];
  /** Themed accent (hex) used to color the detail view for this project's "world". */
  accent: string;
};

export const projects: Project[] = [
  {
    id: "ephemeris",
    title: "Ephemeris",
    tagline: "AI decision support for satellite operators.",
    role: "Product Lead",
    tags: ["AI/ML", "Product Strategy", "SaaS", "B2B"],
    accent: "#7fa8d8", // orbital blue
    problem:
      "Satellite operators in Low Earth Orbit get flooded with conjunction alerts — warnings about potential collisions with other satellites and debris. Triaging which alerts actually need a maneuver eats hours of manual work per day and delays critical decisions.",
    approach:
      "Built an AI-based prioritization tool that ranks alerts by risk and surfaces the ones that need human judgment. Led product strategy end-to-end: competitor analysis, core feature roadmap, business model, and GTM. Developed at Cornell Tech's Startup Studio.",
    outcome:
      "Cut manual triage time by 2+ hours per operator. Named a top-10 finalist at Cornell's startup awards.",
  },
  {
    id: "wardrobeai",
    title: "WardrobeAI",
    tagline: "AI wardrobe recommendations with a full business model.",
    role: "Product Lead",
    tags: ["AI/ML", "Product Strategy", "Financial Modeling", "Consumer"],
    accent: "#d99ab0", // fashion rose
    problem:
      "Deciding what to wear is a small daily friction that most people solve badly — leading to unworn clothes, decision fatigue, and repeat outfits. Existing styling apps are either too manual or too generic to change behavior.",
    approach:
      "Designed an AI platform using computer vision to catalog a user's wardrobe and recommend outfits. Defined the product strategy, business model, unit economics, KPIs, and PMF metrics. Built a full financial model as part of Cornell's Business Models course.",
    outcome:
      "Delivered an end-to-end product case — from concept to unit economics — as a demonstration of full-stack product thinking across strategy, monetization, and metrics.",
  },
  {
    id: "converge",
    title: "Converge",
    tagline: "AI productivity platform unifying fragmented workflows.",
    role: "Product Lead",
    tags: ["AI/ML", "User Research", "Workflow Automation"],
    accent: "#5fc4c0", // productivity teal
    problem:
      "Modern work is scattered across Slack, Gmail, and Google Workspace, and the context needed to make decisions lives in fragments across all of them. Switching tools to reconstruct that context is a constant drag on focus.",
    approach:
      "Designed an AI platform that pulls signal from Slack, Gmail, and Google Workspace to surface unified workflow context. Led 30+ user interviews, market research, and PMF validation to prioritize features and shape the GTM hypothesis.",
    outcome:
      "Landed on a validated feature set and GTM direction grounded in user research rather than assumption.",
  },
  {
    id: "microsoft",
    title: "Microsoft Case Competition",
    tagline: "Azure Digital Twin retail analytics solution.",
    role: "Strategist",
    tags: ["Enterprise Strategy", "B2B", "Retail", "Azure"],
    accent: "#6ea9e0", // azure blue
    problem:
      "Retailers struggle to connect shopper behavior data to inventory and store-layout decisions in real time, leaving planning reactive and margin-eroding.",
    approach:
      "Designed an Azure Digital Twin solution integrating Azure, Dynamics 365, and Power BI to model shopper behavior, optimize inventory planning, and inform store-layout decisions.",
    outcome:
      "Delivered a solution architecture enabling predictive replenishment and data-driven retail decisions, presented in Microsoft's case competition.",
  },
  {
    id: "ipark",
    title: "PRD for iPark",
    tagline: 'Product spec for a "is this a legal NYC parking spot?" app.',
    role: "PM",
    tags: ["PM Writing", "PRD", "Computer Vision"],
    accent: "#e0b552", // NYC taxi amber
    problem:
      "Parking in NYC is a minefield of signs, exceptions, and street-cleaning rules. Drivers waste time deciphering signage and get tickets anyway.",
    approach:
      "Wrote a full PRD for an image-recognition product that lets a user snap a photo of a parking spot and get a yes/no legality answer. Defined user flows, success metrics, and edge cases (obstructed signs, temporary restrictions, mixed-permit zones).",
    outcome:
      "Produced a shippable PM artifact — a full PRD — as a demonstration of product-spec writing and edge-case reasoning.",
  },
];

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

export type Stat = { value: string; label: string };

export type Experience = {
  id: string;
  org: string;
  role: string;
  date: string;
  /** one warm, human line — not a resume bullet */
  oneLiner: string;
  /** headline figures shown large on the card */
  stats: Stat[];
  accent: string;
};

export const experience: Experience[] = [
  {
    id: "siemens",
    org: "Siemens Healthineers · Proliant Data",
    role: "Senior Consultant",
    date: "Sept 2024 – May 2025",
    accent: "#4fa595", // healthineers teal
    oneLiner:
      "Carried a four-country SAP migration to the finish line without a minute of downtime — and kept a hundred-person leadership room aligned on the call.",
    stats: [
      { value: "1M+", label: "records migrated" },
      { value: "4", label: "countries, zero downtime" },
      { value: "$5M", label: "initiative aligned" },
    ],
  },
  {
    id: "husky",
    org: "Husky Energy · Proliant Data",
    role: "Senior Consultant",
    date: "2024",
    accent: "#d0824a", // energy amber
    oneLiner:
      "Got tired of cleaning data by hand, so I built a tool for it — and watched other teams quietly adopt it as their default.",
    stats: [
      { value: "~40%", label: "less prep time" },
      { value: "1", label: "new team standard" },
    ],
  },
  {
    id: "delta",
    org: "Delta Dental",
    role: "Knowledge Science Intern",
    date: "June 2022 – Aug 2022",
    accent: "#5a9bd4", // dental blue
    oneLiner:
      "Took a rate-calculation slog off the plates of 100+ agents by handing them a self-serve tool they could run without me.",
    stats: [
      { value: "100+", label: "agents self-serving" },
      { value: "100%", label: "calculation accuracy" },
    ],
  },
  {
    id: "easyevent",
    org: "Easy Event Planning",
    role: "Marketing / SEO & Data Intern",
    date: "May 2021 – Aug 2021",
    accent: "#cf6a9c", // events magenta
    oneLiner:
      "Half the traffic was leaving money on the table — I grew it with SEO and untangled a 430K-row database for the sales team.",
    stats: [
      { value: "~50%", label: "organic traffic growth" },
      { value: "430K", label: "records restructured" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Beyond the resume                                                   */
/* ------------------------------------------------------------------ */

export const beyond = {
  music: {
    label: "Music",
    title: "A diploma in Carnatic vocal music",
    text: "It's built on two things at once — improvising a melody while never losing the underlying rhythm cycle. That's the same instinct I bring to a messy dataset or an ambiguous product call.",
  },
  cards: [
    {
      id: "bigred",
      label: "Cornell · Big Red Tech",
      title: "VP, East Coast Treks",
      detail:
        "I led 100+ MBA students across 10+ company site visits — booking the treks, wrangling the logistics, and making sure everyone actually got in the room.",
    },
    {
      id: "community",
      label: "Community",
      title: "Women in Engineering & SWE",
      detail:
        "I stay close to the communities that got me here — Women in Engineering and the Society of Women Engineers.",
    },
    {
      id: "languages",
      label: "Languages",
      title: "Three, fluently",
      detail: "English, Telugu, and Hindi — I move between all three daily.",
      languages: ["English", "Telugu", "Hindi"],
    },
  ],
};

export const spokenLanguages = ["English", "Telugu", "Hindi"];
