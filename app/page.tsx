import ButtonLink from "@/components/ButtonLink";
import CapabilitiesMatrix from "@/components/CapabilitiesMatrix";
import Card from "@/components/Card";
import HeroVisual from "@/components/HeroVisual";
import PageShell from "@/components/PageShell";
import SignalConsole from "@/components/SignalConsole";
import StatusBadge from "@/components/StatusBadge";

const featuredProjects = [
  {
    title: "VEGA",
    description:
      "A personal AI system focused on memory, modular intelligence, local control, and practical automation.",
  },
  {
    title: "STAR",
    description:
      "A self-hosted assistant concept built around task support, reminders, mobile access, and private infrastructure.",
  },
  {
    title: "kali2go",
    description:
      "A portable Kali workstation and field-lab platform for controlled cybersecurity practice and network experimentation.",
  },
];

const focusAreas = [
  "Cybersecurity research",
  "Automation systems",
  "Private infrastructure",
  "Technical documentation",
  "OSINT workflows",
  "Homelab architecture",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 py-32">
        <HeroVisual />
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <StatusBadge>Active Build</StatusBadge>
          <h1 className="mt-6 max-w-5xl text-5xl font-bold tracking-tight sm:text-7xl">
            GreyHat Solutions builds security-minded systems, tools, and digital
            infrastructure.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
            A focused home for cybersecurity projects, technical experiments,
            automation work, AI-assisted tooling, and practical infrastructure
            built around control, privacy, and reliability.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="/projects">View Projects</ButtonLink>
            <ButtonLink href="/about" variant="secondary">
              Learn More
            </ButtonLink>
          </div>
        </div>
      </section>

      <PageShell>
        <SignalConsole />
      </PageShell>

      <PageShell>
        <CapabilitiesMatrix />
      </PageShell>

      <PageShell>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </PageShell>

      <PageShell>
        <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Focus
          </p>

          <h2 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight">
            Built for practical control, not decorative complexity.
          </h2>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area) => (
              <div
                key={area}
                className="rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-neutral-300"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </PageShell>
    </main>
  );
}