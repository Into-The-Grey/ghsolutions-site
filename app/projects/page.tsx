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


    <main className="min-h-screen bg-neutral-950 px-6 py-32 text-neutral-100">
      <section className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
          Projects
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight">
          Active technical projects and research work.
        </h1>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6 transition hover:-translate-y-1 hover:border-neutral-600"
            >
              <h2 className="text-2xl font-semibold">{project.title}</h2>
              <p className="mt-4 leading-7 text-neutral-400">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
