import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";

const services = [
  {
    title: "Cybersecurity Research",
    description:
      "Security labs, OSINT workflows, threat research, controlled testing environments, and practical defensive/offensive learning.",
  },
  {
    title: "Automation Systems",
    description:
      "Local-first assistants, workflow engines, private productivity systems, reminders, and operational tooling.",
  },
  {
    title: "Infrastructure Planning",
    description:
      "Homelab architecture, deployment planning, networking, storage, server organization, and reliability-focused systems.",
  },
  {
    title: "Technical Documentation",
    description:
      "Clear project docs, setup guides, internal notes, system maps, and practical knowledge bases.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-32 text-neutral-100">
      <section className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Services"
          title="Practical technical capabilities with a security-first mindset."
          description="A focused set of capabilities built around control, privacy, documentation, and real-world usefulness."
          maxWidth="wide"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Card
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>
    </main>
  );
}