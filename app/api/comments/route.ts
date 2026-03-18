import { createComment } from "@/lib/comments";
import { NextResponse } from "next/server";

// create post comment
export async function POST(request: Request) {
    try {
        const body = await request.json();

        const postSlug = String(body.postSlug || '').trim()
        const name = String(body.name || "").trim();
        const email = String(body.email || "").trim();
        const website = String(body.website || "").trim();
        const message = String(body.message || "").trim();
        const parentId = body.parentId ? String(body.parentId) : null;

          if (!postSlug || !name || !message) {
            return NextResponse.json(
                { error: "Post slug, name, and message are required." },
                { status: 400 },
            );
        }

         if (name.length < 2 || name.length > 60) {
            return NextResponse.json(
                { error: "Name must be between 2 and 60 characters." },
                { status: 400 },
            );
            }

            if (message.length < 3 || message.length > 2000) {
            return NextResponse.json(
                { error: "Comment must be between 3 and 2000 characters." },
                { status: 400 },
            );
            }

            await createComment({
                postSlug,
                name,
                email,
                website,
                message,
                parentId,
            })

            return NextResponse.json({
                success: true,
                message: "Your comment has been submitted and is awaiting moderation.",
            }, {status: 201})
    } catch(err) {
        console.error("Create comment error: ", err);

        return NextResponse.json(
            {error: "Something went wrong while submitting your comment."},
            {status: 500}
        )
    }
}