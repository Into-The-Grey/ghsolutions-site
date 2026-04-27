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
        title: `${project.title} | GreyHat Solutions`,
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
            <div className="max-w-4xl">
                <StatusBadge>{project.status}</StatusBadge>
                <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl">
                    {project.title}
                </h1>
                <p className="mt-6 text-xl leading-8 text-neutral-300">
                    {project.summary}
                </p>
                <p className="mt-8 text-lg leading-8 text-neutral-400">
                    {project.description}
                </p>
                <div className="mt-10">
                    <ButtonLink href="/projects" variant="secondary">
                        ← Back to Projects
                    </ButtonLink>
                </div>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-2">
                {project.highlights.map((highlight) => (
                    <Card key={highlight} title={highlight} />
                ))}
            </div>
        </PageShell>
    );
}
