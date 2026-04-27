import ButtonLink from "@/components/ButtonLink";
import PageShell from "@/components/PageShell";
import StatusBadge from "@/components/StatusBadge";

export default function NotFound() {
  return (
    <PageShell maxWidth="narrow">
      <StatusBadge>404</StatusBadge>
      <h1 className="mt-6 text-5xl font-bold tracking-tight">
        Page not found.
      </h1>
      <p className="mt-6 text-lg leading-8 text-neutral-300">
        The page you are looking for does not exist, may have moved, or has not
        been built yet.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <ButtonLink href="/">Return Home</ButtonLink>
        <ButtonLink href="/projects" variant="secondary">
          View Projects
        </ButtonLink>
      </div>
    </PageShell>
  );
}
