import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-neutral-950 px-6 py-32 text-neutral-100">
        <section className="mx-auto max-w-4xl">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            About
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight">
            GreyHat Solutions is a technical workspace for security, systems, and controlled experimentation.
          </h1>

          <p className="mt-6 text-lg leading-8 text-neutral-300">
            This site exists as a central home for cybersecurity research,
            practical infrastructure projects, AI-assisted tooling, automation
            systems, and technical documentation.
          </p>

          <p className="mt-6 text-lg leading-8 text-neutral-300">
            The goal is not to look flashy for the sake of it. The goal is to
            build a serious digital presence that reflects useful tools,
            disciplined experimentation, and security-minded engineering.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
