const capabilities = [
  {
    area: "Security Research",
    signal: "Controlled labs, OSINT workflows, tooling, and practical analysis.",
    tags: ["OSINT", "Lab Work", "Risk Signals"],
  },
  {
    area: "Automation Systems",
    signal:
      "Private assistants, workflow engines, task support, and repeatable operations.",
    tags: ["VEGA", "STAR", "Workflows"],
  },
  {
    area: "Infrastructure",
    signal:
      "Homelab design, deployment planning, storage, networking, and reliability.",
    tags: ["Servers", "Cloudflare", "Vercel"],
  },
  {
    area: "Documentation",
    signal:
      "Clear setup guides, project notes, technical writeups, and maintainable records.",
    tags: ["Guides", "Roadmaps", "Runbooks"],
  },
];

export default function CapabilitiesMatrix() {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Capabilities Matrix
          </p>
          <h2 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-neutral-100">
            Practical technical work organized around control, clarity, and
            security.
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-neutral-400">
          A quick view of the core disciplines behind the active projects and
          future writeups.
        </p>
      </div>
      <div className="mt-10 grid gap-4">
        {capabilities.map((capability) => (
          <div
            key={capability.area}
            className="grid gap-4 rounded-2xl border border-neutral-800 bg-neutral-950 p-5 transition hover:border-neutral-600 md:grid-cols-[220px_1fr_260px]"
          >
            <div>
              <p className="font-semibold text-neutral-100">{capability.area}</p>
            </div>
            <p className="text-sm leading-6 text-neutral-400">
              {capability.signal}
            </p>
            <div className="flex flex-wrap gap-2 md:justify-end">
              {capability.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-xs text-neutral-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
