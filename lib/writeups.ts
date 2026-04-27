export const writeups = [
    {
        slug: "launching-ghsolutions-site",
        title: "Launching the GreyHat Solutions Site",
        category: "Build Log",
        status: "Published",
        date: "2026-04-27",
        readTime: "7 min read",
        summary:
            "A production build log covering the first version of the GreyHat Solutions website: stack choices, deployment flow, contact intake, and why the site was built as a controlled public surface.",
        relatedHref: "/operations",
        relatedLabel: "View Operations Map",
        body: [
            {
                heading: "The Goal",
                content:
                    "The goal was not to throw up a generic portfolio site. GreyHat Solutions needed a public surface that could grow into a real technical ecosystem: projects, service tracks, writeups, contact intake, lab documentation, and eventually private tools. The first version needed to be useful immediately without becoming overbuilt before the foundation was stable.",
            },
            {
                heading: "Why Next.js",
                content:
                    "Next.js was selected because it gives the site room to grow. The first build can remain mostly static, but the structure can later support dynamic project pages, richer writeups, protected areas, serverless routes, and account-based features. Starting simple does not mean choosing a dead-end stack.",
            },
            {
                heading: "Hosting and Domain Control",
                content:
                    "The production chain uses local development, GitHub source control, Vercel deployment, and Cloudflare-managed DNS. This separates hosting convenience from domain control. Vercel handles the deployment workflow while Cloudflare remains the control point for DNS, domain management, and security-related edge features.",
            },
            {
                heading: "Contact Intake",
                content:
                    "The contact system uses a structured intake form rather than a generic email link. Formspree handles submission routing, while Cloudflare Turnstile protects the form from low-effort spam and abuse. The form intentionally warns users not to submit credentials, secrets, private keys, or sensitive system details during the first contact.",
            },
            {
                heading: "Design Direction",
                content:
                    "The design direction is dark, technical, and restrained. The intent is to feel like a command surface rather than a marketing template. Visual elements such as the operations map, signal console, and restricted 44rc0n page create identity, but the core site still prioritizes clarity and maintainability.",
            },
            {
                heading: "What Comes Next",
                content:
                    "The next phase is credibility through documentation. The site now needs real project detail, lab environment notes, and practical writeups that demonstrate how systems are planned, built, secured, and maintained. The website is not the final product; it is the index for the work behind it.",
            },
        ],
    },
    {
        slug: "lab-environment-first-principles",
        title: "Lab Environment First Principles",
        category: "Lab Notes",
        status: "Published",
        date: "2026-04-27",
        readTime: "6 min read",
        summary:
            "A practical note on why the GreyHat Solutions lab exists, how it is organized, and why controlled environments matter for cybersecurity, automation, and infrastructure work.",
        relatedHref: "/lab",
        relatedLabel: "View Lab Environment",
        body: [
            {
                heading: "Why a Lab Exists",
                content:
                    "A technical lab is not just a collection of machines and tools. Its purpose is to create a controlled environment where systems can be tested, broken, repaired, documented, and improved without risking production services or other people\u2019s infrastructure. For GreyHat Solutions, the lab is the evidence layer behind the cybersecurity, automation, and infrastructure work described on the site.",
            },
            {
                heading: "Control Before Complexity",
                content:
                    "It is easy to add more tools, more dashboards, more services, and more hardware. That does not automatically make the environment better. The first principle is control: know what each system is for, what network it belongs to, how it is accessed, how it is backed up, and what happens if it fails.",
            },
            {
                heading: "Separate Practice from Production",
                content:
                    "Practice environments and production surfaces should not be treated as the same thing. A website, contact form, or public service needs a different stability standard than an experimental Kali box, automation sandbox, or prototype AI workflow. Separation keeps experiments useful without letting them become a liability.",
            },
            {
                heading: "Repeatability Matters",
                content:
                    "A one-off success is not the same as a working system. If a setup cannot be repeated, explained, or restored, it is not mature yet. The lab is organized around repeatable workflows: documented commands, known dependencies, clear access methods, and notes that explain why a decision was made.",
            },
            {
                heading: "Security Boundaries",
                content:
                    "Security work requires boundaries. Testing should happen only in owned, authorized, or intentionally isolated environments. Public forms should not collect secrets. Experimental tools should not be given unnecessary access. The lab exists to make learning and building safer, not to blur the line between research and reckless behavior.",
            },
            {
                heading: "What the Lab Supports",
                content:
                    "The lab supports web deployment, private infrastructure planning, OSINT workflow development, portable field systems, automation tooling, AI assistant experiments, and documentation practices. The exact hardware will change over time, but the operating principle stays the same: build systems that can be understood, controlled, and improved.",
            },
        ],
    },
    {
        slug: "why-control-matters",
        title: "Why Control Matters",
        category: "Philosophy",
        status: "Queued",
        date: "2026-04-27",
        readTime: "3 min read",
        summary:
            "A planned note on why ownership, clarity, and control matter when building technical systems.",
        relatedHref: "/about",
        relatedLabel: "View Operating Philosophy",
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
        status: "Queued",
        date: "2026-04-27",
        readTime: "5 min read",
        summary:
            "A planned first-principles overview of a private infrastructure stack built around DNS control, deployment clarity, and maintainable documentation.",
        relatedHref: "/lab",
        relatedLabel: "View Lab Environment",
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

export const publishedWriteups = writeups.filter(
    (writeup) => writeup.status === "Published",
);

export function getWriteupBySlug(slug: string) {
    return writeups.find((writeup) => writeup.slug === slug);
}

export function getPublishedWriteupBySlug(slug: string) {
    return publishedWriteups.find((writeup) => writeup.slug === slug);
}
