import ButtonLink from "@/components/ButtonLink";
import Card from "@/components/Card";
import PageShell from "@/components/PageShell";
import StatusBadge from "@/components/StatusBadge";
import { getPublishedWriteupBySlug, publishedWriteups } from "@/lib/writeups";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type WriteupPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export function generateStaticParams() {
    return publishedWriteups.map((writeup) => ({
        slug: writeup.slug,
    }));
}

export async function generateMetadata({
    params,
}: WriteupPageProps): Promise<Metadata> {
    const { slug } = await params;
    const writeup = getPublishedWriteupBySlug(slug);
    if (!writeup) {
        return {
            title: "Writeup Not Found",
        };
    }
    return {
        title: writeup.title,
        description: writeup.summary,
    };
}

export default async function WriteupDetailPage({ params }: WriteupPageProps) {
    const { slug } = await params;
    const writeup = getPublishedWriteupBySlug(slug);
    if (!writeup) {
        notFound();
    }
    return (
        <PageShell maxWidth="default">
            <article>
                <StatusBadge>{writeup.category}</StatusBadge>
                <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl">
                    {writeup.title}
                </h1>
                <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-xs uppercase tracking-[0.18em] text-neutral-500">
                        {writeup.status}
                    </span>
                    <span className="rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-xs uppercase tracking-[0.18em] text-neutral-500">
                        {writeup.date}
                    </span>
                    <span className="rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-xs uppercase tracking-[0.18em] text-neutral-500">
                        {writeup.readTime}
                    </span>
                </div>
                <p className="mt-8 text-xl leading-8 text-neutral-300">
                    {writeup.summary}
                </p>
                <div className="mt-12 space-y-6">
                    {writeup.body.map((section) => (
                        <Card key={section.heading} title={section.heading}>
                            <p className="leading-8 text-neutral-400">{section.content}</p>
                        </Card>
                    ))}
                </div>
                <div className="mt-12 flex flex-wrap gap-4">
                    {"relatedHref" in writeup && "relatedLabel" in writeup ? (
                        <ButtonLink href={writeup.relatedHref}>{writeup.relatedLabel}</ButtonLink>
                    ) : null}
                    <ButtonLink href="/writeups" variant="secondary">
                        ← Back to Writeups
                    </ButtonLink>
                </div>
            </article>
        </PageShell>
    );
}
