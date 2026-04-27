import PageShell from "@/components/PageShell";
import SectionHeader from "@/components/SectionHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stack",
  description:
    "The tools, platforms, and technologies used across GreyHat Solutions projects and infrastructure.",
};

const stackCategories = [
  {
    category: "Frontend",
    items: [
      { name: "Next.js 15", note: "App Router, SSG, TypeScript-first" },
      { name: "TypeScript 5", note: "Strict mode, as const data patterns" },
      { name: "Tailwind CSS v4", note: "Utility-first, dark theme, Tailwind v4 scale utilities" },
      { name: "React 19", note: "Server and client component model" },
    ],
  },
  {
    category: "Deployment",
    items: [
      { name: "Vercel", note: "Primary hosting, auto-deploy on push, edge network" },
      { name: "GitHub", note: "Source control, deployment trigger, version history" },
      { name: "Cloudflare", note: "DNS management, CDN, domain control layer" },
    ],
  },
  {
    category: "Security",
    items: [
      { name: "Cloudflare Turnstile", note: "Bot protection on intake forms, client-side widget" },
      { name: "Formspree", note: "Form handling with server-side Turnstile validation" },
      { name: "Cloudflare DNS Proxying", note: "Origin IP masking, DDoS mitigation layer" },
      { name: "HTTPS Everywhere", note: "TLS enforced at Cloudflare and Vercel layers" },
    ],
  },
  {
    category: "Infrastructure",
    items: [
      { name: "Ubuntu Server", note: "Primary server OS for self-hosted environments" },
      { name: "Docker", note: "Container isolation for lab services and automation" },
      { name: "Synology NAS", note: "Private network storage, backup, local service hosting" },
      { name: "Raspberry Pi", note: "Low-power lab nodes, sensor systems, and edge tooling" },
    ],
  },
  {
    category: "Cybersecurity",
    items: [
      { name: "Kali Linux", note: "Primary offensive security and lab platform (kali2go project)" },
      { name: "Wireshark", note: "Network traffic analysis and protocol inspection" },
      { name: "OSINT Tooling", note: "Custom workflows for open-source intelligence gathering" },
      { name: "Lab Network", note: "Isolated virtual networks for controlled practice environments" },
    ],
  },
  {
    category: "AI & Automation",
    items: [
      { name: "Python 3.12", note: "Primary scripting and automation language" },
      { name: "Local LLM Inference", note: "On-device model inference for private AI workflows" },
      { name: "VEGA", note: "Personal AI system — memory, modular tools, local-first" },
      { name: "Automation Scripts", note: "Custom task automation, system monitoring, and indexing" },
    ],
  },
];

export default function StackPage() {
  return (
    <PageShell>
      <SectionHeader
        eyebrow="Stack"
        title="Tools and technology used across projects and infrastructure."
        description="A practical overview of the stack. Not aspirational — these are the tools actively in use or under development."
        maxWidth="wide"
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {stackCategories.map((group) => (
          <div
            key={group.category}
            className="rounded-3xl border border-neutral-800 bg-neutral-900/90 p-6 backdrop-blur"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              {group.category}
            </p>
            <ul className="mt-5 space-y-4">
              {group.items.map((item) => (
                <li key={item.name} className="flex flex-col gap-1">
                  <span className="font-semibold text-neutral-100">
                    {item.name}
                  </span>
                  <span className="text-sm leading-5 text-neutral-500">
                    {item.note}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-neutral-800 bg-neutral-950 px-5 py-4">
        <p className="text-xs leading-6 text-neutral-500">
          Stack evolves with projects. Additions are adopted when they solve real
          problems. Dependencies are kept minimal and auditable.
        </p>
      </div>
    </PageShell>
  );
}
