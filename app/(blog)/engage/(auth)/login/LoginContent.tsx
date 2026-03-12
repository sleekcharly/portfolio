"use client";

import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getAuthErrorMessage } from "@/lib/firebaseError";
import { z } from "zod";
import { auth } from "@/lib/firebase";
import { Spinner } from "@/components/ui/spinner";

const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginContent() {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    // const router = useRouter();
    const searchParams = useSearchParams();

    const callbackUrl = useMemo(
        () => searchParams.get("callbackUrl") || "/blog/engage",
        [searchParams]
    );

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>({ resolver: zodResolver(loginSchema) });

    async function onSubmit(data: LoginForm) {
        setError(null);
        setLoading(true);

        try {
            // Sign in with firebase
            const result = await signInWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );

            const user = result.user;

            // get firebase ID token
            const idToken = await user.getIdToken();

            // Send id token to server
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ idToken }),
            });

            if (!res.ok) {
                throw new Error("Session creation failed");
            }

            // redirect to admin page or intended page
            router.replace(callbackUrl);
        } catch (err) {
            setError(getAuthErrorMessage(err));
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full max-w-sm mx-auto ">
            <div className="w-full p-6">
                <div className="flex flex-col space-y-2 mb-8 w-full">
                    <h1 className="text-xl font-semibold">Login</h1>
                    <p className="text-base">Hi Boss, Welcome back👋</p>
                </div>

                <div className="w-full">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col space-y-4"
                    >
                        <div>
                            <label className="block mb-1">Email</label>
                            <input
                                {...register("email")}
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-2 bg-gray-100 text-black placeholder:text-gray-500"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block mb-1">Password</label>
                            <input
                                {...register("password")}
                                type="password"
                                placeholder="Enter your password"
                                className="w-full p-2 bg-gray-100 text-black placeholder:text-gray-500"
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>
                        {error && (
                            <p className="text-red-500 text-sm">{error}</p>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-blue-500 text-white p-2 flex items-center justify-center space-x-2 font-bold cursor-pointer hover:bg-blue-600 disabled:opacity-50"
                        >
                            <span>Log in</span>
                            {loading && (
                                <span>
                                    <Spinner />
                                </span>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
