export const writeups = [
  {
    slug: "launching-ghsolutions-site",
    title: "Launching the GreyHat Solutions Site",
    category: "Build Log",
    status: "Published",
    date: "2026-04-27",
    readTime: "4 min read",
    summary:
      "A short build log covering the first production version of the GreyHat Solutions website, including the stack, deployment flow, and design direction.",
    body: [
      {
        heading: "The Goal",
        content:
          "The goal of this site is to create a serious public home for GreyHat Solutions: a place for projects, technical writeups, service offerings, and operational notes. The site needed to feel controlled, technical, and expandable without becoming overbuilt on day one.",
      },
      {
        heading: "The Stack",
        content:
          "The first production version uses Next.js, TypeScript, Tailwind CSS, Vercel hosting, GitHub deployment, Cloudflare DNS, Formspree intake handling, and Cloudflare Turnstile protection.",
      },
      {
        heading: "The Direction",
        content:
          "The site is designed to grow into a living technical workspace. Projects, operations maps, service tracks, and writeups can all expand without requiring a database or CMS immediately.",
      },
    ],
  },
  {
    slug: "why-control-matters",
    title: "Why Control Matters",
    category: "Philosophy",
    status: "Draft Seed",
    date: "2026-04-27",
    readTime: "3 min read",
    summary:
      "A short note on why ownership, clarity, and control matter when building technical systems.",
    body: [
      {
        heading: "Control Is Not About Complexity",
        content:
          "Control does not mean self-hosting everything or rejecting managed services. It means knowing where important decisions live, what dependencies exist, and how to recover when something breaks.",
      },
      {
        heading: "Good Systems Are Explainable",
        content:
          "A system that cannot be explained cannot be reliably maintained. Documentation, architecture diagrams, and predictable workflows matter because they keep future changes from becoming guesswork.",
      },
      {
        heading: "The Practical Standard",
        content:
          "The practical standard is simple: build systems that can be understood, repaired, repeated, and improved without losing the thread.",
      },
    ],
  },
  {
    slug: "private-infrastructure-stack",
    title: "Private Infrastructure Stack: First Principles",
    category: "Infrastructure",
    status: "Draft Seed",
    date: "2026-04-27",
    readTime: "5 min read",
    summary:
      "A first-principles overview of a private infrastructure stack built around DNS control, deployment clarity, and maintainable documentation.",
    body: [
      {
        heading: "Start with the Domain",
        content:
          "The domain is the front door. Keeping DNS under a reliable control point makes future hosting changes, email configuration, redirects, and security policy easier to manage.",
      },
      {
        heading: "Separate Hosting from Control",
        content:
          "Managed hosting can be the right choice when the goal is momentum. The important part is not confusing convenience with lock-in. A clean stack keeps the domain, repository, deployment flow, and documentation understandable.",
      },
      {
        heading: "Document the Chain",
        content:
          "Every production project should have a clear chain: local development, source control, deployment platform, DNS provider, monitoring, and recovery notes.",
      },
    ],
  },
] as const;

export type Writeup = (typeof writeups)[number];

export function getWriteupBySlug(slug: string) {
  return writeups.find((writeup) => writeup.slug === slug);
}
