import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const services = [
  "Cybersecurity research and lab environments",
  "OSINT workflow design",
  "Automation and assistant systems",
  "Homelab and infrastructure planning",
  "Technical documentation",
  "Web and deployment architecture",
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-neutral-950 px-6 py-32 text-neutral-100">
        <section className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Services
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight">
            Practical technical capabilities with a security-first mindset.
          </h1>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5 text-neutral-300"
              >
                {service}
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
