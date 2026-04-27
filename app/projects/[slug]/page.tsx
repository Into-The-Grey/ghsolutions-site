import ButtonLink from "@/components/ButtonLink";
import Card from "@/components/Card";
import PageShell from "@/components/PageShell";
import StatusBadge from "@/components/StatusBadge";
import { getProjectBySlug, projects } from "@/lib/projects";
import { notFound } from "next/navigation";

type ProjectPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) {
        return {
            title: "Project Not Found | GreyHat Solutions",
        };
    }
    return {
        title: project.title,
        description: project.summary,
    };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) {
        notFound();
    }
    return (
        <PageShell>
            {/* Header */}
            <div className="max-w-3xl">
                <StatusBadge>{project.status}</StatusBadge>
                <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl">
                    {project.title}
                </h1>
                <p className="mt-6 text-xl leading-8 text-neutral-300">
                    {project.summary}
                </p>
                <div className="mt-8">
                    <ButtonLink href="/projects" variant="secondary">
                        ← Back to Projects
                    </ButtonLink>
                </div>
            </div>

            {/* Overview */}
            <section className="mt-16 max-w-3xl">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
                    Overview
                </h2>
                <p className="mt-4 text-lg leading-8 text-neutral-300">
                    {project.description}
                </p>
            </section>

            {/* Purpose */}
            <section className="mt-12 max-w-3xl">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
                    Purpose
                </h2>
                <p className="mt-4 text-lg leading-8 text-neutral-300">
                    {project.purpose}
                </p>
            </section>

            {/* Tech Stack */}
            <section className="mt-12">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
                    Tech Stack
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="rounded border border-neutral-700 bg-neutral-900 px-3 py-1 text-sm text-neutral-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </section>

            {/* Key Features */}
            <section className="mt-12">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
                    Key Features
                </h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {project.keyFeatures.map((feature) => (
                        <Card key={feature} title={feature} />
                    ))}
                </div>
            </section>

            {/* Roadmap */}
            <section className="mt-12 max-w-3xl">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
                    Roadmap
                </h2>
                <ol className="mt-4 space-y-3">
                    {project.roadmap.map((item, index) => (
                        <li key={item} className="flex gap-4 text-neutral-300">
                            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-neutral-700 text-xs text-neutral-500">
                                {index + 1}
                            </span>
                            <span className="text-base leading-7">{item}</span>
                        </li>
                    ))}
                </ol>
            </section>

            {/* Notes */}
            {project.notes && (
                <section className="mt-12 max-w-3xl">
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
                        Notes
                    </h2>
                    <p className="mt-4 text-base italic leading-7 text-neutral-400">
                        {project.notes}
                    </p>
                </section>
            )}
        </PageShell>
    );
}

