import PageAtmosphere from "@/components/PageAtmosphere";

type PageShellProps = {
    children: React.ReactNode;
    maxWidth?: "default" | "wide" | "narrow";
    atmosphere?: boolean;
};

export default function PageShell({
    children,
    maxWidth = "wide",
    atmosphere = true,
}: PageShellProps) {
    const widthClass =
        maxWidth === "narrow"
            ? "max-w-4xl"
            : maxWidth === "default"
                ? "max-w-5xl"
                : "max-w-6xl";

    return (
        <main className="relative min-h-screen overflow-hidden bg-neutral-950 px-6 py-32 text-neutral-100">
            {atmosphere ? <PageAtmosphere /> : null}
            <section className={`relative z-10 mx-auto ${widthClass}`}>
                {children}
            </section>
        </main>
    );
}