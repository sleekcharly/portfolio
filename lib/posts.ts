import "server-only";
import { QueryDocumentSnapshot, DocumentData, Timestamp } from "firebase-admin/firestore";
import { adminDb as db } from "@/lib/firebase-admin";
import { BlogPost, FirestorePost } from "./types";
import { serializeTimestamp } from "@/utils/server";

const POSTS_PER_PAGE = 10;

export async function getAllPosts() { 
    const postsRef = db.collection("posts");

    const snap =await postsRef.get();

    const posts = snap.docs.map((d) => {
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

    return posts 
}

// Get paginated posts for home page
export async function getPostsPage(page: number, tag?: string, cat?:string) {
    const safePage = Number.isFinite(page) && page > 0 ? page : 1;
    console.log(cat)

    const postsRef = tag ? db.collection("posts").where("tags", "array-contains", tag) :cat ? db.collection("posts").where("categories", "array-contains", cat): db.collection("posts");

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

// get post by slug
export async function getPostBySlug(slug: string){
    const snapshot = await db.collection('posts').where("slug", "==", slug).where("deletedAt", "==", null).limit(1).get();

   if(snapshot.empty) {
    return null
   }

   const doc = snapshot.docs[0];

   return  {
    ...doc.data(),
    id:doc.id,    
    createdAt: serializeTimestamp(doc.data().createdAt),
    updatedAt: serializeTimestamp(doc.data().updatedAt),
    publishedAt: serializeTimestamp(doc.data().publishedAt),
    deletedAt:serializeTimestamp(doc.data().deletedAt)
   } as BlogPost

}

// get random related posts based on category
export async function getRandomRelatedPosts(
    categories: string[], excludedPostId?: string
){
    const postsRef = db.collection("posts")
    const r = Math.random()

    const baseQuery = await postsRef.where("categories", "array-contains-any", categories).where("status", "==", "published").orderBy("random")


    // First attempt
    let snap = await baseQuery.where("random", ">=", r).limit(4).get()

    // Fallback if not enough results
    if (snap.size < 4) {
        const fallback = await baseQuery.where("random", "<", r).limit(4 - snap.size).get();

        snap = {docs: [...snap.docs, ...fallback.docs], } as FirebaseFirestore.QuerySnapshot;
    }

    const posts = snap.docs.filter((d) => d.id !== excludedPostId).map((d) => {
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

    return posts.slice(0, 4)
}

export {POSTS_PER_PAGE}