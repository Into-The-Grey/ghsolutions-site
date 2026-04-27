type PageShellProps = {
    children: React.ReactNode;
    maxWidth?: "default" | "wide" | "narrow";
};

export default function PageShell({
    children,
    maxWidth = "wide",
}: PageShellProps) {
    const widthClass =
        maxWidth === "narrow"
            ? "max-w-4xl"
            : maxWidth === "default"
                ? "max-w-5xl"
                : "max-w-6xl";

    return (
        <main className="min-h-screen bg-neutral-950 px-6 py-32 text-neutral-100">
            <section className={`mx-auto ${widthClass}`}>{children}</section>
        </main>
    );
}