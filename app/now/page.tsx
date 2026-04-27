import Card from "@/components/Card";
import PageShell from "@/components/PageShell";
import SectionHeader from "@/components/SectionHeader";
import StatusBadge from "@/components/StatusBadge";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Now",
    description:
        "A live snapshot of current work, active systems, and what is queued next at GreyHat Solutions.",
};

const activeBuilds = [
    {
        name: "ghsolutions-site",
        label: "Production Surface",
        description:
            "v1 shipped. Adding content layers: writeups, stack documentation, and process clarity. Ongoing.",
    },
    {
        name: "VEGA",
        label: "Active System",
        description:
            "Personal AI system. Current focus: memory layer architecture, modular tool integration, and local inference stability.",
    },
    {
        name: "kali2go",
        label: "Field Lab",
        description:
            "Portable Kali workstation. Refining boot profiles, network tooling, and lab isolation procedures.",
    },
    {
        name: "d4rk5cou7",
        label: "Research Prototype",
        description:
            "Dark-net research and OSINT environment. Passive information-gathering workflows and operational note structure.",
    },
];

const learningTrack = [
    {
        area: "Security Certifications",
        note: "OSCP preparation. Lab-first methodology: build the environment, understand the technique, document the process.",
    },
    {
        area: "Lab Networking",
        note: "Segmented virtual lab networks, VLAN configuration, and DNS-layer control for private environments.",
    },
    {
        area: "AI Memory Systems",
        note: "Practical work on persistent context, retrieval-augmented generation, and local model tool use in VEGA.",
    },
    {
        area: "Infrastructure Documentation",
        note: "Building runbook-style documentation for existing private infrastructure. Recovery-first thinking.",
    },
];

const upNext = [
    { item: "Stack page", note: "Full tools and technology stack documentation." },
    { item: "Process page", note: "Engagement flow from intake to handoff." },
    {
        item: "Writeups",
        note: "More field notes: lab builds, deployment lessons, tool reviews.",
    },
    {
        item: "STAR development",
        note: "Self-hosted assistant concept. Mobile access, task support, private infrastructure.",
    },
    {
        item: "Infrastructure runbooks",
        note: "Private documentation for existing homelab systems.",
    },
];

const paused = [
    {
        item: "Older experiments",
        note: "Several early automation scripts and tooling prototypes. Paused pending VEGA stabilization.",
    },
];

export default function NowPage() {
    return (
        <PageShell>
            <SectionHeader
                eyebrow="Now"
                title="What is being built and where the focus is."
                description="A live snapshot of current work, active systems, and what is queued next. Updated when priorities shift."
                maxWidth="wide"
            />

            {/* Active Builds */}
            <section className="mt-10">
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                    Active Builds
                </p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                    {activeBuilds.map((build) => (
                        <Card key={build.name} title={build.name}>
                            <div className="flex flex-col gap-3">
                                <StatusBadge>{build.label}</StatusBadge>
                                <p className="text-sm leading-6 text-neutral-400">
                                    {build.description}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Learning Track */}
            <section className="mt-14">
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                    Learning Track
                </p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                    {learningTrack.map((item) => (
                        <div
                            key={item.area}
                            className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5"
                        >
                            <p className="font-semibold text-neutral-100">{item.area}</p>
                            <p className="mt-2 text-sm leading-6 text-neutral-400">
                                {item.note}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Up Next */}
            <section className="mt-14">
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                    Up Next
                </p>
                <div className="mt-4 space-y-3">
                    {upNext.map((entry) => (
                        <div
                            key={entry.item}
                            className="flex flex-col gap-1 rounded-2xl border border-neutral-800 bg-neutral-900/60 px-5 py-4 sm:flex-row sm:items-baseline sm:gap-4"
                        >
                            <span className="min-w-45 font-semibold text-neutral-100">
                                {entry.item}
                            </span>
                            <span className="text-sm leading-6 text-neutral-400">
                                {entry.note}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Paused */}
            <section className="mt-14">
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                    Paused
                </p>
                <div className="mt-4 space-y-3">
                    {paused.map((entry) => (
                        <div
                            key={entry.item}
                            className="flex flex-col gap-1 rounded-2xl border border-neutral-800/60 bg-neutral-900/30 px-5 py-4 sm:flex-row sm:items-baseline sm:gap-4"
                        >
                            <span className="min-w-45 font-semibold text-neutral-500">
                                {entry.item}
                            </span>
                            <span className="text-sm leading-6 text-neutral-500">
                                {entry.note}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer note */}
            <div className="mt-16 rounded-2xl border border-neutral-800 bg-neutral-950 px-5 py-4">
                <p className="text-xs leading-6 text-neutral-500">
                    This page reflects current priorities and is updated manually when
                    direction shifts.{" "}
                    <Link
                        href="/projects"
                        className="text-neutral-400 underline underline-offset-4 hover:text-neutral-200"
                    >
                        See all projects →
                    </Link>
                </p>
            </div>
        </PageShell>
    );
}
