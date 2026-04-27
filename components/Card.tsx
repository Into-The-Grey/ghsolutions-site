type CardProps = {
    title: string;
    description?: string;
    children?: React.ReactNode;
};

export default function Card({ title, description, children }: CardProps) {
    return (
        <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6 transition hover:-translate-y-1 hover:border-neutral-600">
            <h2 className="text-2xl font-semibold text-neutral-100">{title}</h2>

            {description ? (
                <p className="mt-4 leading-7 text-neutral-400">{description}</p>
            ) : null}

            {children ? <div className="mt-5">{children}</div> : null}
        </div>
    );
}