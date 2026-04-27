import Card from "@/components/Card";
import PageShell from "@/components/PageShell";
import SectionHeader from "@/components/SectionHeader";

export default function AboutPage() {
  return (
    <PageShell maxWidth="default">
      <SectionHeader
        eyebrow="About"
        title="GreyHat Solutions is a technical workspace for security, systems, and controlled experimentation."
        description="This site exists as a central home for cybersecurity research, infrastructure work, AI-assisted tooling, automation systems, and technical documentation."
        maxWidth="wide"
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Card
          title="The Mission"
          description="Build useful systems, document them clearly, and keep control of the infrastructure wherever practical."
        />
        <Card
          title="The Style"
          description="Serious, minimal, technical, and direct — less noise, more signal."
        />
        <Card
          title="The Focus"
          description="Cybersecurity, automation, self-hosting, AI-assisted tools, OSINT workflows, and practical experimentation."
        />
        <Card
          title="The Standard"
          description="If something is worth building, it is worth making understandable, repeatable, and maintainable."
        />
      </div>
    </PageShell>
  );
}