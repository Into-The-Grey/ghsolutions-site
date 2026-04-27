import Card from "@/components/Card";
import PageShell from "@/components/PageShell";
import SectionHeader from "@/components/SectionHeader";

const projects = [
  {
    title: "VEGA",
    description:
      "A personal AI system focused on long-term memory, modular intelligence, local control, and practical automation.",
  },
  {
    title: "STAR",
    description:
      "A self-hosted assistant concept built around reminders, task support, mobile access, and private infrastructure.",
  },
  {
    title: "kali2go",
    description:
      "A portable Kali workstation and field-lab platform for controlled cybersecurity practice and network experimentation.",
  },
  {
    title: "d4rk5cou7",
    description:
      "A research-oriented site classification and intelligence project focused on categorization, risk signals, and structured analysis.",
  },
];

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
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </PageShell>
  );
}