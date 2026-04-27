export const projects = [
  {
    slug: "vega",
    title: "VEGA",
    status: "Active System",
    summary:
      "A personal AI system focused on long-term memory, modular intelligence, local control, and practical automation.",
    description:
      "VEGA is designed as a private, controllable AI system that can grow over time through memory, indexing, modular services, and direct feedback. The focus is not on building a gimmick chatbot, but on building a practical intelligence layer for projects, infrastructure, and daily workflows.",
    purpose:
      "Create a personal AI system that can support long-term projects, remember useful context, assist with technical workflows, and remain under direct owner control.",
    techStack: [
      "Local server infrastructure",
      "Python services",
      "Indexing and memory systems",
      "Modular assistant architecture",
      "Future API integrations",
    ],
    features: [
      "Long-term memory roadmap",
      "Local-first control model",
      "Modular service design",
      "Direct feedback tuning",
      "Private infrastructure focus",
    ],
    roadmap: [
      "Build a stable memory/indexing foundation",
      "Add project-aware knowledge retrieval",
      "Create modular service interfaces",
      "Add controlled automation actions",
      "Improve observability and rollback safety",
    ],
    notes:
      "VEGA is intended to evolve gradually. Stability, observability, and controllability matter more than chasing every new AI feature immediately.",
  },
  {
    slug: "star",
    title: "STAR",
    status: "Foundation Build",
    summary:
      "A self-hosted assistant concept built around reminders, task support, mobile access, and private infrastructure.",
    description:
      "STAR is a practical support assistant intended to run on private infrastructure and provide useful day-to-day help without unnecessary complexity. The first goal is a stable foundation: backend health checks, mobile-friendly UI, reminders, notes, configuration, and simple self-hosted deployment.",
    purpose:
      "Create a lightweight, private assistant that can provide reminders, task support, notes, and mobile-friendly access without depending on a public SaaS assistant.",
    techStack: [
      "Self-hosted backend",
      "Mobile-friendly frontend",
      "Simple database",
      "Environment-based configuration",
      "Local network deployment",
    ],
    features: [
      "Health check endpoint",
      "Config status endpoint",
      "Reminder foundation",
      "Notes foundation",
      "Private mobile access",
    ],
    roadmap: [
      "Finalize backend and frontend foundation",
      "Add reminder creation and management",
      "Add notes and lightweight journaling later",
      "Improve mobile UI",
      "Prepare local server deployment",
    ],
    notes:
      "STAR should stay practical. The first version should avoid unnecessary AI complexity and focus on useful daily support.",
  },
  {
    slug: "kali2go",
    title: "kali2go",
    status: "Field Lab",
    summary:
      "A portable Kali workstation and field-lab platform for controlled cybersecurity practice and network experimentation.",
    description:
      "kali2go is a Raspberry Pi-based portable Kali environment intended for controlled practice, field-style lab workflows, and lightweight network experimentation. The goal is a dependable portable desktop and workflow launcher, not a chaotic pile of one-off scripts.",
    purpose:
      "Create a portable cybersecurity lab box that can be accessed from a Mac and used for controlled practice, field-style exercises, and repeatable workflows.",
    techStack: [
      "Raspberry Pi",
      "Kali Linux ARM",
      "SSH",
      "NetworkManager",
      "hostapd/dnsmasq",
      "Systemd workflows",
    ],
    features: [
      "Portable Kali desktop access",
      "Central workflow launcher concept",
      "Controlled lab network tooling",
      "Service-based workflow management",
      "Mac-accessible field setup",
    ],
    roadmap: [
      "Stabilize power and thermal behavior",
      "Improve SSH and remote access reliability",
      "Create workflow launch/stop interface",
      "Add safer network-mode switching",
      "Document repeatable lab procedures",
    ],
    notes:
      "kali2go is intended for authorized labs and controlled environments. Reliability and safety matter more than stacking tools blindly.",
  },
  {
    slug: "d4rk5cou7",
    title: "d4rk5cou7",
    status: "Research Prototype",
    summary:
      "A research-oriented site classification and intelligence project focused on categorization, risk signals, and structured analysis.",
    description:
      "d4rk5cou7 is an experimental research project focused on analyzing and classifying web content through structured signals. The long-term idea is to support safer research workflows by organizing URLs, metadata, page signals, and category/risk indicators into a more useful intelligence layer.",
    purpose:
      "Build a structured research system for classifying web content, preserving useful metadata, and helping separate useful signals from noise.",
    techStack: [
      "Python",
      "Machine learning experiments",
      "URL ingestion",
      "Metadata extraction",
      "Classification models",
    ],
    features: [
      "Controlled URL ingestion",
      "Metadata preservation",
      "Category/risk signal analysis",
      "Structured classification output",
      "Research workflow support",
    ],
    roadmap: [
      "Finalize safe ingestion boundaries",
      "Improve category taxonomy",
      "Add model evaluation workflow",
      "Build a cleaner analyst review interface",
      "Document limitations and safety constraints",
    ],
    notes:
      "This project should stay research-focused and controlled. Expansion into live crawling or Tor connectivity should be handled carefully with strong boundaries.",
  },
] as const;
export type Project = (typeof projects)[number];
export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
