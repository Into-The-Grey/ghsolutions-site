const principles = [
  {
    step: "01",
    title: "Control First",
    description:
      "Systems should be understandable, owned where practical, and built in a way that avoids unnecessary dependency on fragile black boxes.",
  },
  {
    step: "02",
    title: "Clarity Over Noise",
    description:
      "Good technical work should reduce confusion. The goal is to make systems easier to reason about, maintain, and improve.",
  },
  {
    step: "03",
    title: "Security by Default",
    description:
      "Security is not a decoration added at the end. It belongs in the planning, architecture, documentation, and operational habits.",
  },
  {
    step: "04",
    title: "Document the Path",
    description:
      "If something matters, it should be recorded clearly enough that the process can be repeated, reviewed, or handed off later.",
  },
  {
    step: "05",
    title: "Iterate Without Losing the Thread",
    description:
      "Progress should be aggressive, but not chaotic. Each improvement should leave the system more stable, useful, or understandable.",
  },
];

export default function PhilosophyTimeline() {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-900/90 p-8 shadow-[0_0_70px_rgba(255,255,255,0.035)] backdrop-blur">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Operating Philosophy
          </p>
          <h2 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-neutral-100">
            Built around control, clarity, security, and repeatable execution.
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-neutral-400">
          These principles guide how projects are planned, built, documented,
          and improved over time.
        </p>
      </div>
      <div className="mt-12 grid gap-6">
        {principles.map((principle, index) => (
          <div
            key={principle.step}
            className="group relative grid gap-5 rounded-3xl border border-neutral-800 bg-neutral-950/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-neutral-600 hover:shadow-[0_0_60px_rgba(255,255,255,0.055)] md:grid-cols-[120px_1fr]"
          >
            {index !== principles.length - 1 ? (
              <div
                aria-hidden="true"
                className="absolute left-14.5 top-23 hidden h-[calc(100%+24px)] w-px bg-linear-to-b from-neutral-700 to-transparent md:block"
              />
            ) : null}
            <div className="relative z-10 flex items-center gap-4 md:block">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-neutral-700 bg-neutral-900 font-mono text-lg font-bold text-neutral-200 shadow-[0_0_35px_rgba(255,255,255,0.04)] transition group-hover:border-neutral-400 group-hover:text-white">
                {principle.step}
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-600 md:mt-4">
                Principle
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-neutral-100">
                {principle.title}
              </h3>
              <p className="mt-3 max-w-3xl leading-7 text-neutral-400">
                {principle.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
