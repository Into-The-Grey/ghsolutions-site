type SectionHeaderProps = {
    eyebrow: string;
    title: string;
    description?: string;
    maxWidth?: "default" | "wide";
};

export default function SectionHeader({
    eyebrow,
    title,
    description,
    maxWidth = "default",
}: SectionHeaderProps) {
    return (
        <div className={maxWidth === "wide" ? "max-w-5xl" : "max-w-4xl"}>
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                {eyebrow}
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-neutral-100 sm:text-5xl">
                {title}
            </h1>

            {description ? (
                <p className="mt-6 text-lg leading-8 text-neutral-300">
                    {description}
                </p>
            ) : null}
        </div>
    );
}