import OperationsMap from "@/components/OperationsMap";
import PageShell from "@/components/PageShell";
import SectionHeader from "@/components/SectionHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Operations",
    description:
        "Interactive GreyHat Solutions operations map showing active systems, project relationships, and technical maturity.",
};

export default function OperationsPage() {
    return (
        <PageShell>
            <SectionHeader
                eyebrow="Operations"
                title="A live map of the GreyHat Solutions project ecosystem."
                description="This command-center view connects the major systems, experiments, and infrastructure surfaces into one operational map."
                maxWidth="wide"
            />
            <div className="mt-10">
                <OperationsMap />
            </div>
        </PageShell>
    );
}
