import Link from "next/link";
import { ArrowLeft, FileText, Home } from "lucide-react";

export default function BlogNotFound() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <section className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 py-20 text-center">
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
                    Blog 404
                </p>

                <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
                    This article is no longer here.
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                    The post you’re looking for may have been moved, renamed, or
                    removed. You can browse the latest articles or head back to
                    the homepage.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Link
                        href="/blog"
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:opacity-90"
                    >
                        <FileText className="h-4 w-4" />
                        Back to Blog
                    </Link>

                    <Link
                        href="/"
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition hover:bg-muted"
                    >
                        <Home className="h-4 w-4" />
                        Go Home
                    </Link>
                </div>

                <Link
                    href="/blog"
                    className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Browse recent posts
                </Link>
            </section>
        </main>
    );
}
