type CardProps = {
    title: string;
    description?: string;
    children?: React.ReactNode;
};

export default function Card({ title, description, children }: CardProps) {
    return (
        <div className="group rounded-3xl border border-neutral-800 bg-neutral-900/90 p-6 shadow-[0_0_40px_rgba(255,255,255,0.02)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-neutral-600 hover:shadow-[0_0_70px_rgba(255,255,255,0.055)]">
            <h2 className="text-2xl font-semibold text-neutral-100 transition group-hover:text-white">
                {title}
            </h2>

            {description ? (
                <p className="mt-4 leading-7 text-neutral-400">{description}</p>
            ) : null}

            {children ? <div className="mt-5">{children}</div> : null}
        </div>
    );
}