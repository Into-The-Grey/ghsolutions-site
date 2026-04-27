import ContactForm from "@/components/ContactForm";
import PageShell from "@/components/PageShell";
import SectionHeader from "@/components/SectionHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact GreyHat Solutions for project inquiries, technical collaboration, and future secure communication options.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <SectionHeader
        eyebrow="Contact"
        title="Start with the problem, scope, and constraints."
        description="Use this intake form to describe what you need help with. The goal is to understand the work before pretending there is a one-size-fits-all solution."
        maxWidth="wide"
      />
      <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="rounded-3xl border border-neutral-800 bg-neutral-900/90 p-6 shadow-[0_0_60px_rgba(255,255,255,0.03)] backdrop-blur">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Intake Notes
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-100">
            Useful details make the first response better.
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-6 text-neutral-400">
            <p>
              Include what you are trying to build, fix, secure, automate, or
              understand.
            </p>
            <p>
              Mention your timeline, current tools, hosting setup, domain/DNS
              situation, operating systems, and any hard constraints.
            </p>
            <p>
              Keep sensitive material out of the first message. No passwords,
              API keys, private tokens, client secrets, or live credentials.
            </p>
          </div>
          <div className="mt-8 rounded-2xl border border-neutral-800 bg-neutral-950 p-4">
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
              Response Priority
            </p>
            <p className="mt-3 text-sm leading-6 text-neutral-300">
              Clear scope, realistic budget range, and specific technical
              details make the inquiry easier to evaluate.
            </p>
          </div>
        </aside>
        <ContactForm />
      </div>
    </PageShell>
  );
}