"use client";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { Spinner } from "@/components/ui/spinner";
import { useEffect, useState } from "react";
import LoginContent from "./LoginContent";

export default function LoginPage() {
    const [checkingAuth, setCheckingAuth] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                window.location.href = "/engage";
            } else {
                setCheckingAuth(false);
            }

            return () => unsubscribe();
        });
    }, []);

    if (checkingAuth) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Spinner />
            </div>
        );
    }

    return <LoginContent />;
}
