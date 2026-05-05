import { getPublishedWriteupBySlug, publishedWriteups } from "@/lib/writeups";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return publishedWriteups.map((w) => ({ slug: w.slug }));
}

export default async function Image({ params }: Props) {
    const { slug } = await params;
    const writeup = getPublishedWriteupBySlug(slug);

    const title = writeup?.title ?? "Writeup";
    const summary = writeup?.summary ?? "";
    const category = writeup?.category ?? "";
    const date = writeup?.date ?? "";

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
                            greyhat-solutions.com / writeups
                        </span>
                    </div>

                    {/* Category + date pills */}
                    <div
                        style={{
                            display: "flex",
                            gap: "12px",
                            marginBottom: "28px",
                        }}
                    >
                        {category ? (
                            <div
                                style={{
                                    padding: "6px 16px",
                                    background: "#171717",
                                    border: "1px solid #262626",
                                    borderRadius: "4px",
                                    color: "#6b7280",
                                    fontSize: "14px",
                                    letterSpacing: "0.08em",
                                }}
                            >
                                {category}
                            </div>
                        ) : null}
                        {date ? (
                            <div
                                style={{
                                    padding: "6px 16px",
                                    background: "#171717",
                                    border: "1px solid #262626",
                                    borderRadius: "4px",
                                    color: "#6b7280",
                                    fontSize: "14px",
                                    letterSpacing: "0.08em",
                                }}
                            >
                                {date}
                            </div>
                        ) : null}
                    </div>

                    {/* Title */}
                    <div
                        style={{
                            fontSize: "68px",
                            fontWeight: "700",
                            color: "#f5f5f5",
                            letterSpacing: "-0.025em",
                            lineHeight: 1.1,
                            marginBottom: "28px",
                            maxWidth: "1000px",
                        }}
                    >
                        {title}
                    </div>

                    {/* Summary */}
                    <div
                        style={{
                            fontSize: "22px",
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
