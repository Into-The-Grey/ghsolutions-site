import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-32 text-neutral-100">
      <section className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Contact"
          title="Contact options are coming soon."
          description="This page will eventually include preferred contact methods, project inquiry details, and possibly a secure contact form."
          maxWidth="wide"
        />

        <div className="mt-10">
          <Card
            title="Placeholder"
            description="For now, this is a placeholder while the main site structure is being built."
          />
        </div>
      </section>
    </main>
  );
}