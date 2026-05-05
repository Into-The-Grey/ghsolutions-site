import Card from "@/components/Card";
import PageShell from "@/components/PageShell";
import SectionHeader from "@/components/SectionHeader";
import { publishedWriteups } from "@/lib/writeups";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Writeups",
    description:
        "Technical writeups, project notes, build logs, and operational field notes from GreyHat Solutions.",
};

function WriteupCard({ writeup }: { writeup: (typeof publishedWriteups)[number] }) {
    return (
        <Link href={`/writeups/${writeup.slug}`}>
            <Card title={writeup.title} description={writeup.summary}>
                <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-neutral-800 bg-neutral-950 px-3 py-1 text-xs uppercase tracking-[0.18em] text-neutral-500">
                        {writeup.category}
                    </span>
                    <span className="rounded-full border border-neutral-800 bg-neutral-950 px-3 py-1 text-xs uppercase tracking-[0.18em] text-neutral-500">
                        {writeup.status}
                    </span>
                    <span className="rounded-full border border-neutral-800 bg-neutral-950 px-3 py-1 text-xs uppercase tracking-[0.18em] text-neutral-500">
                        {writeup.readTime}
                    </span>
                    <span className="rounded-full border border-neutral-800 bg-neutral-950 px-3 py-1 text-xs uppercase tracking-[0.18em] text-neutral-500">
                        {writeup.date}
                    </span>
                </div>
            </Card>
        </Link>
    );
}

export default function WriteupsPage() {
    return (
        <PageShell>
            <SectionHeader
                eyebrow="Writeups"
                title="Field notes, build logs, and technical documentation."
                description="A growing library of practical notes covering projects, infrastructure, security research, automation, and lessons learned while building real systems."
                maxWidth="wide"
            />
            <section className="mt-10">
                <div className="grid gap-6">
                    {publishedWriteups.map((writeup) => (
                        <WriteupCard key={writeup.slug} writeup={writeup} />
                    ))}
                </div>
            </section>

        </PageShell>
    );
}
