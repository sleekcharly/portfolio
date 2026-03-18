
import admin, { adminDb as db } from "@/lib/firebase-admin";
import { Comment, CreateCommentInput, FirestoreComment } from "./types";
import { serializeTimestamp } from "@/utils/server";
import { serverTimestamp } from "firebase/firestore";

// get approved comments
export async function getApprovedCommentsByPostSlug(
    postSlug: string,
){
    const commentsRef = db.collection("comments").where('postSlug', '==', postSlug).where("approved","==", true);

    const snap = await commentsRef.get()

    const comments = snap.docs.map((d) => {
        const data = d.data() as FirestoreComment

        return {
            ...data,
            createdAtTimestamp: serializeTimestamp(data.createsAtTimestamp)
        }
    })

    return comments as Comment[]
}

// create a comment
export async function createComment(input: CreateCommentInput): Promise<Comment> {
    const commentsRef = db.collection("comments");
    const docRef = commentsRef.doc()

    const newComment: Comment = {
        id: crypto.randomUUID(),
        postSlug: input.postSlug,
        name: input.name.trim(),
        email: input.email?.trim() || "",
        website: input.website?.trim() || "",
        message: input.message.trim(),
        createdAt: new Date().toISOString(),
        approved: false,
        parentId: input.parentId ?? null
    }

    await docRef.set({
        ...newComment,
        createdAtTimestamp: admin.firestore.FieldValue.serverTimestamp()
    })

    return newComment
}