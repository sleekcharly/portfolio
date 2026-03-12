import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/posts";

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

export default async function Image({ params }: { params: { slug: string } }) {
    const post = await getPostBySlug(params.slug);

    const category = post?.categories?.[0]?.toLowerCase() ?? "default";

    const background = categoryThemes[category] ?? categoryThemes.default;

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
                    fontSize: 72,
                    fontWeight: 700,
                    lineHeight: 1.15,
                    maxWidth: 900,
                }}
            >
                {post?.title}
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
}
