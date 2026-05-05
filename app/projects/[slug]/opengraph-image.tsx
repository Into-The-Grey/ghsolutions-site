import { getProjectBySlug, projects } from "@/lib/projects";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: Props) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    const title = project?.title ?? "Project";
    const summary = project?.summary ?? "";
    const status = project?.status ?? "";

    return new ImageResponse(
        (
            <div
                style={{
                    background: "#0a0a0a",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {/* Top accent bar */}
                <div style={{ width: "100%", height: "4px", background: "#22c55e" }} />

                {/* Main content */}
                <div
                    style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        padding: "80px",
                        fontFamily: "ui-monospace, Menlo, monospace",
                    }}
                >
                    {/* Domain badge */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "36px",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "44px",
                                height: "44px",
                                background: "#22c55e",
                                borderRadius: "6px",
                                fontSize: "18px",
                                fontWeight: "700",
                                color: "#0a0a0a",
                                marginRight: "16px",
                            }}
                        >
                            GH
                        </div>
                        <span style={{ color: "#6b7280", fontSize: "18px", letterSpacing: "0.1em" }}>
                            greyhat-solutions.com / projects
                        </span>
                    </div>

                    {/* Status pill */}
                    {status ? (
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                marginBottom: "24px",
                            }}
                        >
                            <div
                                style={{
                                    padding: "6px 16px",
                                    background: "#14532d",
                                    border: "1px solid #166534",
                                    borderRadius: "4px",
                                    color: "#86efac",
                                    fontSize: "14px",
                                    letterSpacing: "0.08em",
                                }}
                            >
                                {status}
                            </div>
                        </div>
                    ) : null}

                    {/* Project title */}
                    <div
                        style={{
                            fontSize: "88px",
                            fontWeight: "700",
                            color: "#f5f5f5",
                            letterSpacing: "-0.025em",
                            lineHeight: 1,
                            marginBottom: "28px",
                        }}
                    >
                        {title}
                    </div>

                    {/* Summary */}
                    <div
                        style={{
                            fontSize: "24px",
                            color: "#9ca3af",
                            lineHeight: "1.5",
                            maxWidth: "900px",
                        }}
                    >
                        {summary}
                    </div>
                </div>
            </div>
        ),
        { ...size }
    );
}
