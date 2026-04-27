export const projects = [
  {
    slug: "vega",
    title: "VEGA",
    status: "Active System",
    summary:
      "A personal AI system focused on long-term memory, modular intelligence, local control, and practical automation.",
    description:
      "VEGA is designed as a private, controllable AI system that can grow over time through memory, indexing, modular services, and direct feedback. The focus is not on building a gimmick chatbot, but on building a practical intelligence layer for projects, infrastructure, and daily workflows.",
    highlights: [
      "Local-first control and private infrastructure",
      "Long-term memory and indexing roadmap",
      "Modular assistant architecture",
      "Feedback-driven behavior tuning",
    ],
  },
  {
    slug: "star",
    title: "STAR",
    status: "Foundation Build",
    summary:
      "A self-hosted assistant concept built around reminders, task support, mobile access, and private infrastructure.",
    description:
      "STAR is a practical support assistant intended to run on private infrastructure and provide useful day-to-day help without unnecessary complexity. The first goal is a stable foundation: backend health checks, mobile-friendly UI, reminders, notes, configuration, and simple self-hosted deployment.",
    highlights: [
      "Self-hosted backend and mobile-friendly frontend",
      "Reminder and task-support foundation",
      "Simple private database",
      "Designed for incremental expansion",
    ],
  },
  {
    slug: "kali2go",
    title: "kali2go",
    status: "Field Lab",
    summary:
      "A portable Kali workstation and field-lab platform for controlled cybersecurity practice and network experimentation.",
    description:
      "kali2go is a Raspberry Pi-based portable Kali environment intended for controlled practice, field-style lab workflows, and lightweight network experimentation. The goal is a dependable portable desktop and workflow launcher, not a chaotic pile of one-off scripts.",
    highlights: [
      "Portable Kali desktop access",
      "Workflow launcher concept",
      "Controlled lab network tooling",
      "Raspberry Pi field-kit architecture",
    ],
  },
  {
    slug: "d4rk5cou7",
    title: "d4rk5cou7",
    status: "Research Prototype",
    summary:
      "A research-oriented site classification and intelligence project focused on categorization, risk signals, and structured analysis.",
    description:
      "d4rk5cou7 is an experimental research project focused on analyzing and classifying web content through structured signals. The long-term idea is to support safer research workflows by organizing URLs, metadata, page signals, and category/risk indicators into a more useful intelligence layer.",
    highlights: [
      "URL ingestion and metadata preservation",
      "Category and risk-signal analysis",
      "Research workflow support",
      "Structured classification foundation",
    ],
  },
] as const;

export type Project = (typeof projects)[number];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
