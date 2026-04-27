export type Project = {
    slug: string;
    title: string;
    status: string;
    summary: string;
    description: string;
    purpose: string;
    techStack: string[];
    keyFeatures: string[];
    roadmap: string[];
    notes?: string;
};

export const projects: Project[] = [
    {
        slug: "vega",
        title: "VEGA",
        status: "Active System",
        summary:
            "A personal AI system focused on long-term memory, modular intelligence, local control, and practical automation.",
        description:
            "VEGA is designed as a private, controllable AI system that can grow over time through memory, indexing, modular services, and direct feedback. The focus is not on building a gimmick chatbot, but on building a practical intelligence layer for projects, infrastructure, and daily workflows.",
        purpose:
            "To build a private, controllable intelligence layer that grows over time through memory, indexing, and modular services — replacing dependency on cloud AI with local-first control.",
        techStack: [
            "Python",
            "FastAPI",
            "SQLite / ChromaDB",
            "Ollama (local LLM)",
            "Docker",
        ],
        keyFeatures: [
            "Local-first architecture with no external AI dependency",
            "Long-term memory and semantic indexing pipeline",
            "Modular service architecture for extensibility",
            "Feedback-driven behavior tuning",
            "API-first design for integration with other projects",
        ],
        roadmap: [
            "Phase 1 — Core memory and indexing pipeline",
            "Phase 2 — Modular skill and tool system",
            "Phase 3 — Integration with STAR and kali2go",
            "Phase 4 — Voice interface and natural language workflow control",
        ],
        notes:
            "VEGA is intentionally built to be extensible rather than feature-complete. The priority is a stable, trustworthy foundation before any major capability additions.",
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
            "To provide a practical, private alternative to commercial assistant apps — one that runs on personal infrastructure and stores all data locally without cloud dependency.",
        techStack: [
            "Python / FastAPI",
            "SQLite",
            "React / Next.js",
            "Docker",
            "REST API",
        ],
        keyFeatures: [
            "Self-hosted backend with local database",
            "Mobile-friendly frontend interface",
            "Reminder and notification system",
            "Notes and task management",
            "Configurable and incrementally expandable",
        ],
        roadmap: [
            "Phase 1 — Backend foundation: health, reminders, notes",
            "Phase 2 — Mobile-friendly frontend",
            "Phase 3 — Push and email notification delivery",
            "Phase 4 — VEGA integration for intelligent task handling",
        ],
        notes:
            "STAR prioritizes reliability and simplicity over feature density. Each component is designed to be independently swappable.",
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
            "To build a reliable, portable cybersecurity workstation that supports controlled lab practice and field-style network experimentation without requiring a full desktop setup.",
        techStack: [
            "Kali Linux",
            "Raspberry Pi",
            "USB Persistence",
            "Tmux / Zsh",
            "Python tooling",
        ],
        keyFeatures: [
            "Portable Kali desktop with persistent environment",
            "Workflow launcher for common lab tasks",
            "Controlled network tooling and isolation",
            "Lightweight, battery-efficient field configuration",
            "Reproducible setup via configuration scripts",
        ],
        roadmap: [
            "Phase 1 — Base persistent Kali image",
            "Phase 2 — Workflow launcher and tool organization",
            "Phase 3 — Lightweight VPN and isolated lab network",
            "Phase 4 — Integration with d4rk5cou7 research workflows",
        ],
        notes:
            "kali2go is designed for controlled, authorized practice environments. All tooling is configured for responsible, ethical use.",
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
            "To build an intelligence layer for structured web research — classifying URLs, extracting signals, and organizing content into actionable categories for safer and more systematic analysis.",
        techStack: [
            "Python",
            "SQLite",
            "BeautifulSoup / Playwright",
            "FastAPI",
            "NLP / classification models",
        ],
        keyFeatures: [
            "URL ingestion and metadata preservation",
            "Risk signal and category classification",
            "Structured data storage for research workflows",
            "Extensible analysis pipeline",
            "Research-oriented reporting layer",
        ],
        roadmap: [
            "Phase 1 — URL ingestion and metadata extraction",
            "Phase 2 — Category and risk-signal classification",
            "Phase 3 — Research dashboard and report generation",
            "Phase 4 — VEGA integration for intelligent categorization",
        ],
        notes:
            "d4rk5cou7 is a research prototype. All analysis targets are controlled test environments or publicly accessible content used for legitimate research purposes.",
    },
];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((project) => project.slug === slug);
}
