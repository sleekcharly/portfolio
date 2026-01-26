"use client";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { Spinner } from "@/components/ui/spinner";
import { useEffect, useState } from "react";
import LoginContent from "./LoginContent";

export default function LoginPage() {
    const [checkingAuth, setCheckingAuth] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                setCheckingAuth(false);
                return;
            }

            try {
                const token = await user.getIdToken(true);

                const res = await fetch("/api/auth/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ idToken: token }),
                });

                if (res.ok) {
                    window.location.href = "/engage";
                } else {
                    setCheckingAuth(false);
                }
            } catch {
                setCheckingAuth(false);
            }
        });

        return () => unsubscribe();
    }, []);

    if (checkingAuth) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Spinner />
            </div>
        );
    } else {
        return <LoginContent />;
    }
}
