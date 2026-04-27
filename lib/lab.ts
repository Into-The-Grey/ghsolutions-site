export const labHardware = [
    {
        name: "Primary Workstation",
        role: "Development, testing, GPU-assisted workloads, virtualization support.",
        details: [
            "Ryzen Threadripper-class workstation",
            "NVIDIA GPU acceleration available",
            "Linux-based development environment",
            "Used for automation, AI experiments, and security tooling",
        ],
    },
    {
        name: "MacBook Pro",
        role: "Daily development, remote administration, documentation, and deployment workflow.",
        details: [
            "Primary mobile development machine",
            "VS Code workflow",
            "GitHub and Vercel deployment management",
            "Remote access into lab systems",
        ],
    },
    {
        name: "Raspberry Pi Field Systems",
        role: "Portable lab nodes, remote access experiments, and controlled network practice.",
        details: [
            "Kali Linux ARM experimentation",
            "SSH-based administration",
            "Portable field-lab concepts",
            "Workflow launcher development",
        ],
    },
    {
        name: "Synology / Storage Systems",
        role: "Private storage, backups, media vault concepts, and file organization.",
        details: [
            "Rackmount NAS infrastructure",
            "Private storage planning",
            "User vault concepts",
            "Backup and access-control experiments",
        ],
    },
];

export const labEnvironments = [
    {
        name: "Local Development Lab",
        description:
            "A controlled environment for building, testing, and documenting web apps, automation tools, and infrastructure workflows.",
    },
    {
        name: "Security Practice Range",
        description:
            "A practice-focused space for authorized cybersecurity learning, lab machines, OSINT workflows, and repeatable testing procedures.",
    },
    {
        name: "Portable Field Lab",
        description:
            "A lightweight mobile setup centered around remote-accessible systems and portable network experimentation.",
    },
    {
        name: "Automation Sandbox",
        description:
            "A safe development space for testing assistants, scripts, workflow engines, and local-first automation concepts.",
    },
];

export const labTooling = [
    "Kali Linux",
    "Ubuntu Linux",
    "Docker",
    "VS Code",
    "GitHub",
    "Vercel",
    "Cloudflare",
    "Python",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "OSINT tooling",
    "Network utilities",
    "Home Assistant",
    "Synology DSM",
];

export const labBoundaries = [
    "Testing is performed only in owned, authorized, or intentionally isolated environments.",
    "Public-facing systems are separated from experimental lab workflows wherever practical.",
    "Sensitive credentials, keys, and secrets are not collected through public forms.",
    "Documentation and repeatability are treated as part of the build, not an afterthought.",
    "Security work is scoped, authorized, and bounded before any active testing occurs.",
];

export const labStatus = [
    {
        label: "Public Website",
        status: "Production",
        note: "Next.js site deployed through Vercel with Cloudflare-managed DNS.",
    },
    {
        label: "Contact Intake",
        status: "Active",
        note: "Formspree-backed inquiry flow protected with Cloudflare Turnstile.",
    },
    {
        label: "Writeups System",
        status: "Initialized",
        note: "Static writeup engine is live; deeper technical content is the next content priority.",
    },
    {
        label: "kali2go",
        status: "In Progress",
        note: "Portable Kali field-lab concept under refinement.",
    },
    {
        label: "VEGA / STAR",
        status: "Active Concepts",
        note: "AI and assistant systems are being structured into documented project tracks.",
    },
] as const;
