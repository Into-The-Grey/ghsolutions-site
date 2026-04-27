import Card from "@/components/Card";
import PageShell from "@/components/PageShell";
import SectionHeader from "@/components/SectionHeader";
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

const engagements = [
  {
    track: "Technical Advisory",
    audience: "For those who need help planning, troubleshooting, or making architecture decisions.",
    includes: [
      "Architecture planning sessions",
      "Troubleshooting and root-cause review",
      "Technology selection guidance",
      "Written session notes on request",
    ],
    range: "$75–$150 / hr",
  },
  {
    track: "Web Presence Buildout",
    audience: "For small businesses, personal brands, or technical portfolios that need a clean website and deployment pipeline.",
    includes: [
      "Domain and DNS configuration",
      "Frontend development and deployment",
      "Performance and accessibility baseline",
      "Documentation handoff",
    ],
    range: "$500–$2,500+",
  },
  {
    track: "Private Infrastructure Setup",
    audience: "For individuals or small teams who need a controlled, reliable technical foundation.",
    includes: [
      "Hosting and deployment architecture",
      "DNS and Cloudflare configuration",
      "Basic security hardening",
      "Backup and recovery planning",
    ],
    range: "$750–$3,500+",
  },
  {
    track: "Automation & Internal Tooling",
    audience: "For custom workflows, scripts, dashboards, private assistants, or operational tools.",
    includes: [
      "Workflow design and scoping",
      "Custom script or tool development",
      "Integration with existing systems",
      "Runbook and handoff documentation",
    ],
    range: "$1,000–$5,000+",
  },
  {
    track: "Security Workflow Review",
    audience: "For OSINT workflows, lab design, security posture review, and controlled testing environments.",
    includes: [
      "Operational workflow audit",
      "Lab design recommendations",
      "OSINT tooling and methodology review",
      "Written findings and improvement notes",
    ],
    range: "$300–$1,500+",
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

      <div className="mt-24">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Engagement Models
          </p>
          <h2 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-neutral-100">
            Scope-based service tracks with transparent starting ranges.
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-neutral-400">
            Each engagement is scoped individually. Ranges below are starting
            estimates — final pricing depends on scope, timeline, technical
            complexity, and required documentation.
          </p>
        </div>

        <div className="grid gap-4">
          {engagements.map((eng) => (
            <div
              key={eng.track}
              className="grid gap-6 rounded-3xl border border-neutral-800 bg-neutral-900/90 p-6 backdrop-blur transition hover:border-neutral-600 lg:grid-cols-[1fr_1fr_200px]"
            >
              <div>
                <p className="text-lg font-semibold text-neutral-100">
                  {eng.track}
                </p>
                <p className="mt-2 text-sm leading-6 text-neutral-400">
                  {eng.audience}
                </p>
              </div>
              <ul className="space-y-2">
                {eng.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-neutral-400"
                  >
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-600" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col justify-center lg:items-end">
                <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                  Starting range
                </p>
                <p className="mt-2 text-xl font-bold text-neutral-100">
                  {eng.range}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs leading-6 text-neutral-600">
          Ranges are starting estimates. Final pricing depends on scope,
          timeline, technical complexity, and required documentation. A quote is
          provided before any work begins.
        </p>
      </div>
    </PageShell>
  );
}