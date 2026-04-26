import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-neutral-950 px-6 py-32 text-neutral-100">
        <section className="mx-auto max-w-4xl">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Contact
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight">
            Contact options are coming soon.
          </h1>

          <p className="mt-6 text-lg leading-8 text-neutral-300">
            This page will eventually include preferred contact methods,
            project inquiry details, and possibly a secure contact form.
          </p>

          <div className="mt-10 rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
            <p className="text-neutral-400">
              For now, this is a placeholder while the main site structure is
              being built.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
