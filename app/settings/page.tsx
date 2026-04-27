import PageShell from "@/components/PageShell";
import SectionHeader from "@/components/SectionHeader";
import SettingsPanel from "@/components/SettingsPanel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings",
  description: "Interface and accessibility settings for GreyHat Solutions.",
};

export default function SettingsPage() {
  return (
    <PageShell>
      <SectionHeader
        eyebrow="Settings"
        title="Interface controls without user accounts — for now."
        description="Adjust display and accessibility preferences locally. This page also reserves space for future account-based preferences and private dashboard controls."
        maxWidth="wide"
      />
      <div className="mt-10">
        <SettingsPanel />
      </div>
    </PageShell>
  );
}
