"use client";

import { useState } from "react";

type Props = {
    postSlug: string;
};

const CommentForm = ({ postSlug }: Props) => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        website: "",
        message: "",
    });
    const [submitting, setSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);
        setSuccessMessage("");
        setErrorMessage("");

        try {
            const res = await fetch("/api/comments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    postSlug,
                    ...form,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Failed to submit comment.");
            }

            setSuccessMessage(
                data.message || "Comment submitted successfully.",
            );

            setForm({
                name: "",
                email: "",
                website: "",
                message: "",
            });
        } catch (error) {
            setErrorMessage(
                error instanceof Error
                    ? error.message
                    : "Something went wrong.",
            );
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="mt-12 rounded-2xl border border-gray-200 p-5 sm:p-6">
            <h2 className="font-Outfit text-2xl font-semibold dark:text-black">
                Leave a comment
            </h2>
            <p className="mt-2 text-sm text-gray-500">
                Share your thoughts about this post.
            </p>

            <form
                onSubmit={handleSubmit}
                className="mt-6 flex flex-col gap-4 dark:text-black"
            >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black dark:placeholder:text-gray-500"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        value={form.email}
                        onChange={handleChange}
                        className="dark:placeholder:text-gray-500 rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                    />
                </div>

                <input
                    type="url"
                    name="website"
                    placeholder="Website (optional)"
                    value={form.website}
                    onChange={handleChange}
                    className="dark:placeholder:text-gray-500 rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                />

                <textarea
                    name="message"
                    placeholder="Write your comment..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="dark:placeholder:text-gray-500 rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black resize-y"
                />

                {successMessage && (
                    <p className="text-sm text-green-600">{successMessage}</p>
                )}

                {errorMessage && (
                    <p className="text-sm text-red-600">{errorMessage}</p>
                )}

                <button
                    type="submit"
                    disabled={submitting}
                    className="w-fit rounded-xl bg-black px-5 py-3 text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {submitting ? "Submitting..." : "Post comment"}
                </button>
            </form>
        </div>
    );
};

export default CommentForm;
