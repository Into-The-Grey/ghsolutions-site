import ButtonLink from "@/components/ButtonLink";
import PageShell from "@/components/PageShell";
import SectionHeader from "@/components/SectionHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Process",
    description:
        "How engagements work at GreyHat Solutions — from initial intake through delivery and follow-up support.",
};

const steps = [
    {
        number: "01",
        title: "Intake",
        summary: "Submit the contact form with project scope, constraints, and goals.",
        detail:
            "Describe what you need: what you are building, fixing, securing, or automating. Include your timeline, current tools, hosting setup, domain situation, operating systems, and any hard constraints. Keep sensitive material out of this step.",
    },
    {
        number: "02",
        title: "Scope Review",
        summary: "Review the submission and respond with questions or initial observations.",
        detail:
            "Each inquiry is reviewed individually. The response will either ask clarifying questions, note what is outside scope, or confirm that the project looks like a good fit. Expect a response within a few business days.",
    },
    {
        number: "03",
        title: "Technical Plan",
        summary: "Produce a scoped technical plan with deliverables and cost estimates.",
        detail:
            "Once the scope is clear, a technical plan is drafted: what will be built, how it will be built, the expected timeline, milestones, and a cost estimate. This is reviewed and agreed upon before any work begins.",
    },
    {
        number: "04",
        title: "Build / Review",
        summary: "Execute the work with regular progress updates and review checkpoints.",
        detail:
            "Work is delivered iteratively. Progress updates are shared at agreed checkpoints. Scope changes are documented and priced before being added — no hidden additions mid-build.",
    },
    {
        number: "05",
        title: "Documentation Handoff",
        summary: "Deliver documented work with architecture notes and runbook instructions.",
        detail:
            "Every engagement includes a documentation deliverable: architecture notes, deployment instructions, runbook steps, and anything needed to maintain or extend the work independently. You own everything delivered.",
    },
    {
        number: "06",
        title: "Follow-up Support",
        summary: "Post-delivery availability for questions and follow-on work within scope.",
        detail:
            "A follow-up window is included after delivery for questions, small fixes, and clarifications. Larger follow-on work is scoped as a new engagement.",
    },
];

export default function ProcessPage() {
    return (
        <PageShell maxWidth="default">
            <SectionHeader
                eyebrow="Process"
                title="How engagements work."
                description="Straightforward intake, clear scope, documented delivery. No surprises mid-build."
                maxWidth="default"
            />

            <div className="mt-10 space-y-4">
                {steps.map((step, idx) => (
                    <div
                        key={step.number}
                        className="group grid gap-5 rounded-3xl border border-neutral-800 bg-neutral-900/90 p-6 backdrop-blur transition hover:border-neutral-700 md:grid-cols-[80px_1fr]"
                    >
                        {/* Step number */}
                        <div className="flex items-start">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-neutral-700 bg-neutral-950 font-mono text-lg font-bold text-neutral-400 transition group-hover:border-neutral-500 group-hover:text-neutral-200">
                                {step.number}
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <h2 className="text-xl font-semibold text-neutral-100">
                                {step.title}
                            </h2>
                            <p className="mt-1 text-sm font-medium text-neutral-400">
                                {step.summary}
                            </p>
                            <p className="mt-3 text-sm leading-7 text-neutral-500">
                                {step.detail}
                            </p>
                        </div>

                        {/* Connector line (between steps, not after last) */}
                        {idx < steps.length - 1 && (
                            <div className="hidden md:col-start-1 md:block">
                                <div className="mx-auto mt-1 h-4 w-px bg-linear-to-b from-neutral-700 to-transparent" />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-12 rounded-3xl border border-neutral-800 bg-neutral-900/90 p-6 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                    Secure Communication
                </p>
                <p className="mt-3 text-sm leading-7 text-neutral-400">
                    Initial contact is intentionally low-sensitivity. The intake form is
                    for scoping conversations only — do not send credentials, API keys, or
                    sensitive technical data in the first message. If a project requires
                    secure file transfer or encrypted communication, that channel is
                    established after initial scope review.
                </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink href="/contact">Start an Engagement</ButtonLink>
                <ButtonLink href="/services" variant="secondary">
                    View Service Tracks →
                </ButtonLink>
            </div>
        </PageShell>
    );
}
