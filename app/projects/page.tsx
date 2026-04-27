import Card from "@/components/Card";
import PageShell from "@/components/PageShell";
import SectionHeader from "@/components/SectionHeader";
import { projects } from "@/lib/projects";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore active GreyHat Solutions projects, research work, tools, and technical systems.",
};

export default function ProjectsPage() {
  return (
    <PageShell>
      <SectionHeader
        eyebrow="Projects"
        title="Active technical projects and research work."
        description="A growing collection of practical systems, experiments, tools, and infrastructure projects."
        maxWidth="wide"
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            <Card title={project.title} description={project.summary}>
              <span className="text-sm font-semibold text-neutral-300">
                View project →
              </span>
            </Card>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}