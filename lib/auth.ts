import {cookies} from "next/headers"
import {getAuth} from "firebase-admin/auth"
import {adminApp} from "@/lib/firebase-admin"

export async function getServerSession() {
    const session = (await cookies()).get("session")?.value;

    if (!session) return null;

    try {
        const decoded = await  getAuth(adminApp).verifySessionCookie
        (session, true);

        return {
            uid: decoded.uid,
            email: decoded.email
        }
    } catch {
        return null;
    }
}