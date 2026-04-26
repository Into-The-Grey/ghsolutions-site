import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-neutral-950 text-neutral-100">
        <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-32">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-neutral-400">
            GreyHat Solutions
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
            Security-minded systems, tools, and digital infrastructure.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
            A focused home for cybersecurity projects, technical experiments,
            automation work, and practical tools built with control, privacy,
            and reliability in mind.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-2xl border border-neutral-700 px-5 py-3 text-sm font-semibold text-neutral-100 transition hover:border-neutral-400"
            >
              Contact
            </a>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Workbench
          </p>

          <h2 className="mt-3 text-3xl font-bold">Featured Projects</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <ProjectCard
              title="VEGA"
              description="A personal AI system focused on memory, local control, modular intelligence, and practical automation."
            />

            <ProjectCard
              title="STAR"
              description="A self-hosted assistant concept built around task support, reminders, mobile access, and private infrastructure."
            />

            <ProjectCard
              title="kali2go"
              description="A portable Kali workstation and field-lab platform for controlled cybersecurity practice and network experimentation."
            />
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Capabilities
          </p>

          <h2 className="mt-3 text-3xl font-bold">Core Focus Areas</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <ProjectCard
              title="Cybersecurity"
              description="Security research, practical tooling, lab environments, OSINT workflows, and controlled offensive-security learning."
            />

            <ProjectCard
              title="Automation"
              description="Local-first assistants, workflow systems, infrastructure tooling, and private productivity experiments."
            />

            <ProjectCard
              title="Infrastructure"
              description="Self-hosting, homelab systems, smart home control, storage, networking, and deployment architecture."
            />
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Contact
            </p>

            <h2 className="mt-3 text-3xl font-bold">Let’s build something controlled.</h2>

            <p className="mt-4 max-w-2xl text-neutral-400">
              This site is under active development. Contact options, project
              pages, and technical writeups will be added as the build matures.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function ProjectCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6 transition hover:-translate-y-1 hover:border-neutral-600">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-neutral-400">{description}</p>
    </div>
  );
}