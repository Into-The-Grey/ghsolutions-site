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
        status: "Published",
        date: "2026-05-05",
        readTime: "4 min read",
        summary:
            "A note on why ownership, clarity, and control matter when building technical systems — and what it actually means to have a system under control.",
        relatedHref: "/about",
        relatedLabel: "View Operating Philosophy",
        body: [
            {
                heading: "Control Is Not About Complexity",
                content:
                    "Control does not mean self-hosting everything, rejecting managed services, or building every component from scratch. It means understanding where critical decisions live, what the actual dependencies are, what breaks when a service goes down, and how long recovery takes. A system with three well-understood components is more controlled than a system with thirty components where only half are documented.",
            },
            {
                heading: "Good Systems Are Explainable",
                content:
                    "A system that cannot be explained is a system that cannot be maintained reliably. This applies at every level: code that is clever but unreadable, infrastructure that works but is not documented, workflows that depend on a single person who holds all the context. Explainability is not just a collaboration requirement — it is a personal reliability standard. If you cannot explain a system you built six months ago without re-reading every configuration file, it is not fully under your control.",
            },
            {
                heading: "Ownership Without Brittleness",
                content:
                    "There is a version of control that goes wrong: building so much custom infrastructure that recovery becomes impossible, or refusing external services so that every component requires active maintenance. Real ownership means choosing dependencies deliberately, understanding their failure modes, and keeping enough of the critical path in your hands that a vendor outage does not disable everything. Managed DNS, managed hosting, and managed form handling are all reasonable choices — as long as you know what they control and what they do not.",
            },
            {
                heading: "When Things Break, Plans Matter More Than Systems",
                content:
                    "The real test of a controlled system is not what happens when it works — it is what happens when it breaks. Uncontrolled systems fail silently and get discovered late. Well-controlled systems fail with visibility: logs, error states, monitoring, and a documented recovery path. Control is not just about understanding the happy path. It is about having a clear answer to the question: what do I do when this breaks at 2am and I need to restore it in under an hour?",
            },
            {
                heading: "The Practical Standard",
                content:
                    "The standard is simple: can a system be understood, repaired, handed off, and improved without losing the thread? If the answer requires tribal knowledge, undocumented configuration, or a specific person being awake and available, then the system is not truly controlled yet. That is the gap worth closing first — before adding new features, new services, or more complexity.",
            },
        ],
    },
    {
        slug: "private-infrastructure-stack",
        title: "Private Infrastructure Stack: First Principles",
        category: "Infrastructure",
        status: "Published",
        date: "2026-05-05",
        readTime: "5 min read",
        summary:
            "A first-principles overview of a private infrastructure stack — starting from domain control, working through deployment, and ending with documentation as the final layer of operational reliability.",
        relatedHref: "/lab",
        relatedLabel: "View Lab Environment",
        body: [
            {
                heading: "Start with the Domain",
                content:
                    "The domain name is the front door to every public-facing system. Keeping DNS under a reliable, independent control point — separate from your hosting provider — means future migrations, platform changes, and security configurations stay in your hands. When a hosting provider has an outage, your DNS can still route correctly. When you need to move platforms, the transition does not require transferring domain control at the same time as everything else.",
            },
            {
                heading: "Separate Hosting from Control",
                content:
                    "Managed hosting platforms are legitimate choices for deployment. The critical distinction is between using a managed platform for convenience and allowing that platform to also own your domain, DNS, email routing, and SSL configuration. Keeping those layers separate means each one can be swapped, upgraded, or audited independently. Convenience is not the enemy of control — conflating all your control points into a single vendor is.",
            },
            {
                heading: "The Deployment Chain",
                content:
                    "A well-structured deployment chain is traceable at every step:\n\n```bash\n# Standard deploy flow\ngit add .\ngit commit -m \"describe the change\"\ngit push origin main\n# Vercel detects push, builds, deploys\n# Cloudflare routes and caches the result\n```\n\nEach step is visible: Git shows what changed and when, Vercel shows what built and deployed, Cloudflare shows routing and cache state. If something fails at any point, the failure is isolated and diagnosable. The chain should be simple enough to explain in one sentence and auditable enough to verify without guesswork.",
            },
            {
                heading: "Recovery Planning Is Not Optional",
                content:
                    "Infrastructure that has never been restored from backup is not actually backed up — it is hoped to be backed up. Recovery planning means testing that backups contain what you expect, that restore procedures are documented, and that recovery time is understood before a failure happens. The questions worth answering in advance: How long does it take to redeploy the site from scratch? What data exists only in one location? What is the fallback if the primary hosting provider is unavailable for 24 hours?",
            },
            {
                heading: "Document the Chain",
                content:
                    "Documentation for a private infrastructure stack is operational insurance. The chain worth documenting includes: domain registrar and renewal date, DNS provider and active records, hosting platform and deployment configuration, environment variables and where they are stored, database location and backup schedule, and any external services the system depends on. The goal is that anyone familiar with the technology should be able to reconstruct the environment from the documentation alone — without asking questions and without guessing.",
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
