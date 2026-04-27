import ButtonLink from "@/components/ButtonLink";
import CapabilitiesMatrix from "@/components/CapabilitiesMatrix";
import Card from "@/components/Card";
import HeroVisual from "@/components/HeroVisual";
import PageShell from "@/components/PageShell";
import SignalConsole from "@/components/SignalConsole";
import StatusBadge from "@/components/StatusBadge";
import { publishedWriteups } from "@/lib/writeups";
import Link from "next/link";

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
        <div className="rounded-3xl border border-neutral-800 bg-neutral-900/90 p-8 shadow-[0_0_70px_rgba(255,255,255,0.035)] backdrop-blur">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Operations
          </p>
          <div className="mt-3 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="max-w-3xl text-4xl font-bold tracking-tight">
                Explore the project ecosystem as an operational map.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-neutral-400">
                The operations map connects active systems, research prototypes,
                infrastructure work, and project maturity into a single
                interactive command-center view.
              </p>
            </div>
            <Link
              href="/operations"
              className="inline-flex rounded-2xl border border-neutral-700 px-5 py-3 text-sm font-semibold text-neutral-100 transition hover:border-neutral-400"
            >
              Open Operations Map →
            </Link>
          </div>
        </div>
      </PageShell>

      <PageShell>
        <div className="rounded-3xl border border-neutral-800 bg-neutral-900/90 p-8 shadow-[0_0_70px_rgba(255,255,255,0.035)] backdrop-blur">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Lab Environment
          </p>
          <div className="mt-3 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="max-w-3xl text-4xl font-bold tracking-tight">
                The work is backed by a controlled technical lab.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-neutral-400">
                GreyHat Solutions is supported by a practical environment for
                infrastructure experiments, cybersecurity learning, automation
                systems, deployment workflows, and technical documentation.
              </p>
            </div>
            <Link
              href="/lab"
              className="inline-flex rounded-2xl border border-neutral-700 px-5 py-3 text-sm font-semibold text-neutral-100 transition hover:border-neutral-400"
            >
              View Lab →
            </Link>
          </div>
        </div>
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
        <div className="rounded-3xl border border-neutral-800 bg-neutral-900/90 p-8 shadow-[0_0_70px_rgba(255,255,255,0.035)] backdrop-blur">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                Latest Writeups
              </p>
              <h2 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight">
                Notes from the build, the lab, and the field.
              </h2>
            </div>
            <Link
              href="/writeups"
              className="inline-flex rounded-2xl border border-neutral-700 px-5 py-3 text-sm font-semibold text-neutral-100 transition hover:border-neutral-400"
            >
              View All Writeups →
            </Link>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {publishedWriteups.slice(0, 3).map((writeup) => (
              <Link
                key={writeup.slug}
                href={`/writeups/${writeup.slug}`}
                className="rounded-2xl border border-neutral-800 bg-neutral-950 p-5 transition hover:-translate-y-1 hover:border-neutral-600"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
                  {writeup.category}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-neutral-100">
                  {writeup.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-400">
                  {writeup.summary}
                </p>
              </Link>
            ))}
          </div>
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

      <PageShell>
        <div className="rounded-3xl border border-neutral-800 bg-neutral-900/90 p-8 shadow-[0_0_70px_rgba(255,255,255,0.035)] backdrop-blur">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Launch Surface
          </p>
          <div className="mt-3 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <h2 className="max-w-3xl text-4xl font-bold tracking-tight">
                A public command surface for systems, services, and field notes.
              </h2>
              <p className="mt-5 max-w-2xl leading-7 text-neutral-400">
                GreyHat Solutions is designed to grow from a public website into
                a deeper technical ecosystem: project documentation, service
                intake, operational maps, writeups, and future private
                account-based tools.
              </p>
            </div>
            <div className="grid gap-3">
              {[
                "Production site online",
                "Cloudflare domain connected",
                "Vercel deployment active",
                "Protected contact intake enabled",
                "Operations map staged",
                "Writeups system initialized",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-neutral-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageShell>
    </main>
  );
}