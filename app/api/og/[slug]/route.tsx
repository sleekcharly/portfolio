import React from "react";
import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/posts";
import { BlogPost } from "@/lib/types";

// export const runtime = "edge";

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

const categoryThemes: Record<string, string> = {
    news: "linear-gradient(135deg,#334155,#0f172a)",
    telecommunication: "linear-gradient(135deg,#0ea5e9,#1e3a8a)",
    career: "linear-gradient(135deg,#10b981,#065f46)",
    "web-development": "linear-gradient(135deg,#6366f1,#1e1b4b)",
    aviation: "linear-gradient(135deg,#0ea5e9,#0369a1)",
    "ai-ml": "linear-gradient(135deg,#9333ea,#4c1d95)",
    technical: "linear-gradient(135deg,#475569,#020617)",
    "petroleum-engineering": "linear-gradient(135deg,#f59e0b,#78350f)",
    opinion: "linear-gradient(135deg,#f43f5e,#881337)",
    "project-showcase": "linear-gradient(135deg,#14b8a6,#0f766e)",
    tutorials: "linear-gradient(135deg,#22c55e,#14532d)",
    default: "linear-gradient(135deg,#0f172a,#1e293b)",
};

function formatTitle(title: string, maxCharsPerLine = 28) {
    const words = title.split(" ");
    const lines: string[] = [];
    let currentLine = "";

    for (const word of words) {
        if ((currentLine + " " + word).length > maxCharsPerLine) {
            lines.push(currentLine.trim());
            currentLine = word;
        } else {
            currentLine += " " + word;
        }
    }

    if (currentLine) lines.push(currentLine.trim());

    return lines
        .slice(0, 3)
        .map((line, index, arr) =>
            index === arr.length - 1 &&
            words.join(" ").length > maxCharsPerLine * 3
                ? line + "..."
                : line,
        ); // prevent too many lines
}

export async function GET(
    _request: Request,
    { params }: { params: Promise<{ slug: string }> },
): Promise<Response> {
    try {
        const { slug } = await params;

        const post = (await getPostBySlug(slug)) as BlogPost | null;

        const category = post?.categories?.[0]?.toLowerCase() ?? "default";
        const background = categoryThemes[category] ?? categoryThemes.default;

        if (!post) {
            return new ImageResponse(<div>Post not found</div>, size);
        }

        const titleLines = formatTitle(post?.title ?? "devcharles.com");

        return new ImageResponse(
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "80px",
                    background,
                    color: "white",
                    fontFamily: "sans-serif",
                }}
            >
                {/* top section */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            fontSize: 32,
                            fontWeight: 600,
                            opacity: 0.9,
                        }}
                    >
                        devcharles.com
                    </div>

                    {post?.categories?.[0] && (
                        <div
                            style={{
                                background: "rgba(255,255,255,0.1)",
                                padding: "10px 20px",
                                borderRadius: 999,
                                fontSize: 22,
                            }}
                        >
                            {post.categories[0]}
                        </div>
                    )}
                </div>

                {/* title */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        maxWidth: 900,
                    }}
                >
                    {titleLines.map((line, i) => (
                        <div
                            key={i}
                            style={{
                                fontSize: 72,
                                fontWeight: 700,
                                lineHeight: 1.15,
                            }}
                        >
                            {line}
                        </div>
                    ))}
                </div>

                {/* bottom bar */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: 28,
                        opacity: 0.8,
                    }}
                >
                    Software Engineering • devcharles.com
                </div>
            </div>,
            {
                ...size,
            },
        );
    } catch (error: unknown) {
        const message =
            error instanceof Error ? error.message : "Unknown error occurred";

        console.error(message);

        return new Response("Failed to generate the image", {
            status: 500,
        });
    }
}
