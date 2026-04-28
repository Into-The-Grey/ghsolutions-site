import ButtonLink from "@/components/ButtonLink";

type ServiceTrackCardProps = {
    title: string;
    audience: string;
    includes: string[];
    range: string;
    note?: string;
};

export default function ServiceTrackCard({
    title,
    audience,
    includes,
    range,
    note,
}: ServiceTrackCardProps) {
    return (
        <div className="rounded-3xl border border-neutral-800 bg-neutral-900/90 p-6 shadow-[0_0_50px_rgba(255,255,255,0.025)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-neutral-600 hover:shadow-[0_0_80px_rgba(255,255,255,0.055)]">
            <div className="flex flex-col gap-4 border-b border-neutral-800 pb-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                        Service Track
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-neutral-100">
                        {title}
                    </h2>
                </div>
                <div className="rounded-2xl border border-neutral-700 bg-neutral-950 px-4 py-3 text-left sm:text-right">
                    <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
                        Estimated Range
                    </p>
                    <p className="mt-1 text-lg font-semibold text-neutral-100">
                        {range}
                    </p>
                </div>
            </div>
            <p className="mt-5 leading-7 text-neutral-300">{audience}</p>
            <div className="mt-6">
                <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                    Common Inclusions
                </p>
                <ul className="mt-4 space-y-3">
                    {includes.map((item) => (
                        <li
                            key={item}
                            className="rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-neutral-300"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            {note ? (
                <p className="mt-5 text-sm leading-6 text-neutral-500">{note}</p>
            ) : null}
            <div className="mt-6 border-t border-neutral-800 pt-5">
                <ButtonLink href={`/contact?service=${encodeURIComponent(title)}`}>
                    Start Intake
                </ButtonLink>
            </div>
        </div>
    );
}
