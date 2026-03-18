import Link from "next/link";
import { ArrowRight, Briefcase, FileText, Home, Mail } from "lucide-react";

const quickLinks = [
    {
        title: "Home",
        href: "/",
        description: "Go back to the main portfolio page.",
        icon: Home,
    },
    {
        title: "My Work",
        href: "/#work",
        description: "Browse selected projects and case studies.",
        icon: Briefcase,
    },
    {
        title: "Blog",
        href: "/blog",
        description: "Read articles, insights, and updates.",
        icon: FileText,
    },
    {
        title: "Contact Me",
        href: "/#contact",
        description: "Get in touch for work or collaboration.",
        icon: Mail,
    },
];

export default function NotFound() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-foreground/5 blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_35%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_35%)]" />
            </div>

            <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-6 py-20">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
                        Error 404
                    </p>

                    <h1 className="mt-4 text-6xl font-bold tracking-tight sm:text-7xl md:text-8xl">
                        Looks like this page drifted off course.
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                        The page you’re looking for may have been moved,
                        renamed, or removed. You can head back home, explore my
                        work, or continue to the blog.
                    </p>

                    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link
                            href="/"
                            className="inline-flex min-h-11 items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium transition hover:bg-muted"
                        >
                            Go Home
                        </Link>

                        <Link
                            href="/blog"
                            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:opacity-90"
                        >
                            Visit Blog
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>

                <div className="mt-16 grid w-full max-w-5xl gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {quickLinks.map((item) => {
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.title}
                                href={item.href}
                                className="group rounded-2xl border border-border bg-background/60 p-5 backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div className="mb-4 inline-flex rounded-xl border border-border p-3">
                                    <Icon className="h-5 w-5" />
                                </div>

                                <h2 className="text-lg font-semibold">
                                    {item.title}
                                </h2>

                                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                    {item.description}
                                </p>

                                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium">
                                    Explore
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </section>
        </main>
    );
}
