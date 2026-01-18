import { NextResponse } from "next/server";
import {cookies} from 'next/headers';
import {getAuth} from 'firebase-admin/auth';
import {adminApp} from '@/lib/firebase-admin';

export async function POST(req: Request) {
    const {idToken} = await req.json()

    const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days

    const sessionCookie = await getAuth(adminApp).createSessionCookie(idToken, {expiresIn});


    (await cookies()).set("session", sessionCookie, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/engage"
    })

    return NextResponse.json({ok: true})
}