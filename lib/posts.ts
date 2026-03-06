import "server-only";
import { QueryDocumentSnapshot, DocumentData, Timestamp } from "firebase-admin/firestore";
import { adminDb as db } from "@/lib/firebase-admin";
import { FirestorePost } from "./types";
import { serializeTimestamp } from "@/utils/server";

const POSTS_PER_PAGE = 11;

export async function getPostsPage(page: number) {
    const safePage = Number.isFinite(page) && page > 0 ? page : 1;

    const postsRef = db.collection("posts");

    // Total count (for totalPages)
    const countSnap = await postsRef.count().get();
    const total = Number(countSnap.data().count);

    // Base query: newest first
    const base = postsRef.orderBy("createdAt", "desc").orderBy("__name__", "desc")

    // If page === 1, just fetch first batch
    if (safePage === 1) {
        const snap = await base.limit(POSTS_PER_PAGE).get();
        const posts = snap.docs.map((d) => {
            const data = d.data() as FirestorePost;

             return {
                ...data,
                id: d.id,
                 createdAt: serializeTimestamp(data.createdAt),
                updatedAt: serializeTimestamp(data.updatedAt),
                publishedAt: serializeTimestamp(data.publishedAt),
                deletedAt: serializeTimestamp(data.deletedAt),
            };
        });
        const lastDoc = snap.docs.at(-1) ?? null;

        return {posts, total, lastDoc};
    }

    // For page > 1: walk pages.find cursor
    let lastDoc: QueryDocumentSnapshot<DocumentData> | null = null;

    for(let i = 1; i < safePage; i++) {
        const q: FirebaseFirestore.Query<FirebaseFirestore.DocumentData> =
            lastDoc ? base.startAfter(lastDoc) : base.limit(POSTS_PER_PAGE);

        const snap: FirebaseFirestore.QuerySnapshot<FirebaseFirestore.DocumentData> = await q.get();
        lastDoc = snap.docs.at(-1) ?? null;

        // If we run out of docs before reaching the page, stop
        if(!lastDoc && snap.empty) break;
    }

    const finalQ = lastDoc ? base.startAfter(lastDoc).limit(POSTS_PER_PAGE) :base.limit(POSTS_PER_PAGE);

    const finalSnap = await finalQ.get()

    const posts = finalSnap.docs.map((d) => {
        const data = d.data() as FirestorePost;

        return {
            ...data,
            id: d.id,
             createdAt: serializeTimestamp(data.createdAt),
                updatedAt: serializeTimestamp(data.updatedAt),
                publishedAt: serializeTimestamp(data.publishedAt),
                deletedAt: serializeTimestamp(data.deletedAt),
            }
        })

    return {posts, total, lastDoc: finalSnap.docs.at(-1) ?? null};
}

export {POSTS_PER_PAGE}