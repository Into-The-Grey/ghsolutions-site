export const operationNodes = [
    {
        id: "vega",
        label: "VEGA",
        type: "AI System",
        status: "Active System",
        maturity: 72,
        position: "left-8 top-20",
        summary:
            "Personal AI architecture focused on memory, indexing, automation, and modular intelligence.",
        signals: [
            "Long-term memory roadmap",
            "Local-first control model",
            "Modular intelligence layer",
            "Feedback-driven behavior tuning",
        ],
    },
    {
        id: "star",
        label: "STAR",
        type: "Assistant Layer",
        status: "Foundation Build",
        maturity: 46,
        position: "right-10 top-24",
        summary:
            "Private assistant foundation for reminders, task support, mobile access, and controlled expansion.",
        signals: [
            "Self-hosted backend",
            "Mobile-friendly interface",
            "Reminder foundation",
            "Simple private data layer",
        ],
    },
    {
        id: "kali2go",
        label: "kali2go",
        type: "Field Lab",
        status: "Stabilization",
        maturity: 58,
        position: "left-16 bottom-24",
        summary:
            "Portable Kali workstation and repeatable field-lab platform for controlled security practice.",
        signals: [
            "Raspberry Pi field platform",
            "Workflow launcher concept",
            "Remote desktop access",
            "Network-mode switching roadmap",
        ],
    },
    {
        id: "d4rk5cou7",
        label: "d4rk5cou7",
        type: "Research Prototype",
        status: "Prototype",
        maturity: 38,
        position: "right-8 bottom-20",
        summary:
            "Structured web-content classification and risk-signal research system.",
        signals: [
            "URL ingestion model",
            "Metadata preservation",
            "Classification taxonomy",
            "Analyst review workflow roadmap",
        ],
    },
    {
        id: "ghsolutions",
        label: "GHSOLUTIONS",
        type: "Public Interface",
        status: "Production Surface",
        maturity: 64,
        position: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
        summary:
            "The public-facing index for projects, writeups, operational notes, and technical identity.",
        signals: [
            "Next.js frontend",
            "Vercel deployment",
            "Cloudflare-managed domain",
            "Project documentation hub",
        ],
    },
] as const;

export type OperationNode = (typeof operationNodes)[number];

export const operationLinks = [
    ["ghsolutions", "vega"],
    ["ghsolutions", "star"],
    ["ghsolutions", "kali2go"],
    ["ghsolutions", "d4rk5cou7"],
    ["vega", "star"],
    ["vega", "d4rk5cou7"],
] as const;
