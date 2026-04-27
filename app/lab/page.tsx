import Card from "@/components/Card";
import PageShell from "@/components/PageShell";
import SectionHeader from "@/components/SectionHeader";
import StatusBadge from "@/components/StatusBadge";
import Link from "next/link";
import {
    labBoundaries,
    labEnvironments,
    labHardware,
    labStatus,
    labTooling,
} from "@/lib/lab";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Lab",
    description:
        "GreyHat Solutions lab environment, infrastructure, tooling, practice ranges, and operating boundaries.",
};

export default function LabPage() {
    return (
        <PageShell>
            <SectionHeader
                eyebrow="Lab"
                title="The technical environment behind the work."
                description="A controlled view into the infrastructure, practice environments, tooling, and operating boundaries that support GreyHat Solutions projects."
                maxWidth="wide"
            />
            <section className="mt-10 rounded-3xl border border-neutral-800 bg-neutral-900/90 p-8 shadow-[0_0_70px_rgba(255,255,255,0.035)] backdrop-blur">
                <StatusBadge>Controlled Environment</StatusBadge>
                <h2 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-neutral-100">
                    Built to test, document, deploy, and improve real systems.
                </h2>
                <p className="mt-5 max-w-3xl leading-7 text-neutral-400">
                    The lab exists to support practical cybersecurity learning,
                    infrastructure experiments, automation systems, web deployments,
                    private storage concepts, and project documentation. It is not a
                    random pile of tools — the goal is repeatable, bounded technical work.
                </p>
            </section>

            <section className="mt-10 rounded-3xl border border-neutral-800 bg-neutral-900/90 p-8 shadow-[0_0_70px_rgba(255,255,255,0.035)] backdrop-blur">
                <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                    Lab Notes
                </p>
                <div className="mt-3 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
                    <div>
                        <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-neutral-100">
                            Read the first-principles note behind the lab.
                        </h2>
                        <p className="mt-4 max-w-2xl leading-7 text-neutral-400">
                            This writeup explains why the lab exists, how it should be separated
                            from production systems, and why repeatability matters.
                        </p>
                    </div>
                    <Link
                        href="/writeups/lab-environment-first-principles"
                        className="inline-flex rounded-2xl border border-neutral-700 px-5 py-3 text-sm font-semibold text-neutral-100 transition hover:border-neutral-400"
                    >
                        Read Lab Note →
                    </Link>
                </div>
            </section>

            <section className="mt-16">
                <SectionHeader
                    eyebrow="Infrastructure"
                    title="Hardware and working systems."
                    description="A high-level overview of the machines and platforms used for development, experimentation, storage, and deployment workflows."
                    maxWidth="wide"
                />
                <div className="mt-10 grid gap-6 lg:grid-cols-2">
                    {labHardware.map((item) => (
                        <Card key={item.name} title={item.name} description={item.role}>
                            <ul className="space-y-3">
                                {item.details.map((detail) => (
                                    <li
                                        key={detail}
                                        className="rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-neutral-300"
                                    >
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="mt-16">
                <SectionHeader
                    eyebrow="Practice Environments"
                    title="Separate spaces for different kinds of technical work."
                    description="The lab is organized around repeatable workflows rather than one-off experiments."
                    maxWidth="wide"
                />
                <div className="mt-10 grid gap-6 md:grid-cols-2">
                    {labEnvironments.map((environment) => (
                        <Card
                            key={environment.name}
                            title={environment.name}
                            description={environment.description}
                        />
                    ))}
                </div>
            </section>

            <section className="mt-16 rounded-3xl border border-neutral-800 bg-neutral-900/90 p-8 shadow-[0_0_70px_rgba(255,255,255,0.035)] backdrop-blur">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                            Tooling
                        </p>
                        <h2 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-neutral-100">
                            Tools are selected for usefulness, control, and repeatability.
                        </h2>
                    </div>
                    <p className="max-w-sm text-sm leading-6 text-neutral-400">
                        This list will expand as writeups and project documentation become
                        more detailed.
                    </p>
                </div>
                <div className="mt-10 flex flex-wrap gap-3">
                    {labTooling.map((tool) => (
                        <span
                            key={tool}
                            className="rounded-full border border-neutral-800 bg-neutral-950 px-4 py-2 text-sm text-neutral-300"
                        >
                            {tool}
                        </span>
                    ))}
                </div>
            </section>

            <section className="mt-16">
                <SectionHeader
                    eyebrow="Boundaries"
                    title="A lab is only useful if the operating rules are clear."
                    description="The point is controlled technical growth, not reckless experimentation."
                    maxWidth="wide"
                />
                <div className="mt-10 grid gap-4">
                    {labBoundaries.map((boundary) => (
                        <div
                            key={boundary}
                            className="rounded-2xl border border-neutral-800 bg-neutral-900/90 p-5 text-neutral-300 shadow-[0_0_50px_rgba(255,255,255,0.025)] backdrop-blur"
                        >
                            {boundary}
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-16">
                <SectionHeader
                    eyebrow="Current Status"
                    title="Active systems and lab-facing project state."
                    description="A quick operational snapshot of what is online, initialized, or currently being developed."
                    maxWidth="wide"
                />
                <div className="mt-10 grid gap-6 lg:grid-cols-2">
                    {labStatus.map((item) => (
                        <Card key={item.label} title={item.label} description={item.note}>
                            <span className="rounded-full border border-neutral-700 bg-neutral-950 px-3 py-1 text-xs uppercase tracking-[0.2em] text-neutral-400">
                                {item.status}
                            </span>
                        </Card>
                    ))}
                </div>
            </section>
        </PageShell>
    );
}
