import ButtonLink from "@/components/ButtonLink";
import Card from "@/components/Card";
import PageShell from "@/components/PageShell";
import SectionHeader from "@/components/SectionHeader";
import ServiceTrackCard from "@/components/ServiceTrackCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Practical technical capabilities focused on cybersecurity, automation, infrastructure, and documentation.",
};

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

const engagementTracks = [
  {
    title: "Technical Advisory",
    audience:
      "For individuals, founders, small teams, or technical builders who need help planning, troubleshooting, or making architecture decisions before committing time and money.",
    range: "$75–$150/hr",
    includes: [
      "Architecture review and planning",
      "Technical troubleshooting sessions",
      "Tooling and platform recommendations",
      "Deployment, DNS, or hosting guidance",
      "Clear next-step action plan",
    ],
    note: "Best for focused questions, planning sessions, and targeted technical direction.",
  },
  {
    title: "Web Presence Buildout",
    audience:
      "For people or small businesses that need a clean, serious website with a modern deployment pipeline, domain setup, and room to grow.",
    range: "$500–$2,500+",
    includes: [
      "Next.js or static website foundation",
      "Vercel deployment workflow",
      "Cloudflare DNS configuration",
      "Core pages and responsive layout",
      "Basic metadata and launch checklist",
    ],
    note: "Final scope depends on content volume, design complexity, integrations, and revision depth.",
  },
  {
    title: "Private Infrastructure Setup",
    audience:
      "For users who want more control over hosting, homelab systems, private services, DNS, storage, backups, or self-hosted tools.",
    range: "$750–$3,500+",
    includes: [
      "Infrastructure planning and topology",
      "Domain, DNS, and access strategy",
      "Server or NAS service planning",
      "Backup and recovery considerations",
      "Documentation handoff",
    ],
    note: "Best suited for controlled environments where reliability, ownership, and documentation matter.",
  },
  {
    title: "Automation & Tooling",
    audience:
      "For custom scripts, dashboards, internal tools, assistant workflows, repeatable operations, or private productivity systems.",
    range: "$1,000–$5,000+",
    includes: [
      "Workflow discovery and mapping",
      "Custom tool or script planning",
      "Prototype implementation",
      "Configuration and environment setup",
      "Usage documentation",
    ],
    note: "Pricing varies heavily based on integrations, complexity, data handling, and maintenance expectations.",
  },
  {
    title: "Security Workflow Review",
    audience:
      "For people building OSINT workflows, lab environments, documentation systems, or controlled security-learning setups.",
    range: "$300–$1,500+",
    includes: [
      "Workflow review and risk notes",
      "Lab environment planning",
      "OSINT process organization",
      "Tooling and documentation recommendations",
      "Clear boundaries and safe-use guidance",
    ],
    note: "This is not a promise of offensive testing work. Scope must be clearly authorized and defined first.",
  },
];

export default function ServicesPage() {
  return (
    <PageShell>
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

      <section className="mt-24">
        <SectionHeader
          eyebrow="Engagement Models"
          title="Clear service tracks with scope-based pricing ranges."
          description="These ranges are starting estimates meant to help qualify the size of an engagement. Final pricing depends on scope, timeline, technical complexity, risk, documentation needs, and required support."
          maxWidth="wide"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {engagementTracks.map((track) => (
            <ServiceTrackCard
              key={track.title}
              title={track.title}
              audience={track.audience}
              includes={track.includes}
              range={track.range}
              note={track.note}
            />
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-3xl border border-neutral-800 bg-neutral-900/90 p-8 shadow-[0_0_60px_rgba(255,255,255,0.03)] backdrop-blur">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
          Scope First
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-neutral-100">
          Every serious engagement starts with defining the actual problem.
        </h2>
        <p className="mt-5 max-w-3xl leading-7 text-neutral-400">
          The goal is not to sell a generic package. The goal is to understand
          the environment, identify the real constraints, define safe boundaries,
          and build something maintainable.
        </p>
      </section>

      <section className="mt-16 rounded-3xl border border-neutral-800 bg-neutral-900/90 p-8 shadow-[0_0_70px_rgba(255,255,255,0.035)] backdrop-blur">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
          Start Here
        </p>
        <div className="mt-3 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-neutral-100">
              Have a project, system, or technical problem worth scoping?
            </h2>
            <p className="mt-5 max-w-2xl leading-7 text-neutral-400">
              Use the intake form to describe the problem, constraints, timeline,
              budget range, and technical environment. The first step is defining the
              scope clearly — not pretending every problem fits a generic package.
            </p>
          </div>
          <ButtonLink href="/contact">Open Intake Form</ButtonLink>
        </div>
      </section>
    </PageShell>
  );
}
