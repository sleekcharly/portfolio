import type { Metadata } from "next";
import "@/app/globals.css";
import Script from "next/script";
import { ThemeProvider } from "@/providers/ThemeProvider";
import {
    JetBrains_Mono as JetBrainsMono,
    Pirata_One as PirataOne,
    Outfit as OutfitFont,
    Ovo as OvoFont,
} from "next/font/google";
import BlogSidebar from "./BlogSidebar";

const jetFont = JetBrainsMono({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-jetMono",
});

const pirataOne = PirataOne({
    weight: ["400"],
    subsets: ["latin"],
    variable: "--font-pirata-one",
});

const outfit = OutfitFont({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-outfit",
});

const ovo = OvoFont({
    weight: ["400"],
    subsets: ["latin"],
    variable: "--font-ovo",
});

export const metadata: Metadata = {
    title: "Charles Ukasoanya | Blog & Insights",
    description:
        "Explore technical articles, personal insights, and project write-ups by Charles Ukasoanya. Topics include software development, cloud computing, IoT systems, and the intersection of hardware and software innovation.",
    keywords: [
        "Charles Ukasoanya Blog",
        "Charles Ukasoanya Articles",
        "Charles Ukasoanya Insights",
        "Software Development Blog",
        "Next.js Tutorials",
        "React Guides",
        "TypeScript Best Practices",
        "Cloud Computing Insights",
        "IoT Systems Development",
        "Web Development Tips",
        "Frontend and Full Stack Articles",
        "Charles Ukasoanya Portfolio Blog",
        "Engineering and Tech Blog",
        "Open Source Projects",
        "Hardware Software Integration",
    ],
    authors: [{ name: "Charles Ukasoanya", url: "https://www.devcharles.com" }],
    creator: "Charles Ukasoanya",
    openGraph: {
        title: "Charles Ukasoanya | Blog & Technical Insights",
        description:
            "Read articles and in-depth insights by Charles Ukasoanya on software development, IoT, cloud computing, and real-world engineering solutions.",
        url: "https://www.devcharles.com/blog",
        siteName: "Charles Ukasoanya Blog",
        images: [
            {
                url: "https://devcharles.com/assets/og-image.png",
                width: 1200,
                height: 630,
                alt: "Charles Ukasoanya Blog Page Screenshot",
            },
        ],
        locale: "en_US",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Charles Ukasoanya | Blog & Technical Insights",
        description:
            "Explore articles and technical insights on software development, IoT, and cloud computing by Charles Ukasoanya.",
        site: "@sleekcharly",
        creator: "@sleekcharly",
        images: ["https://devcharles.com/assets/og-image.png"],
    },
    metadataBase: new URL("https://www.devcharles.com"),
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${pirataOne.variable} ${jetFont.variable} ${outfit.variable} ${ovo.variable} scroll-smooth`}
            suppressHydrationWarning
        >
            <head>
                <Script
                    id="person-schema"
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            name: "Charles Ukasoanya",
                            jobTitle: "Software Developer & Technology Leader",
                            url: "https://www.devcharles.com",
                            sameAs: [
                                "https://twitter.com/sleekcharly",
                                "https://www.linkedin.com/in/charles-ukasoanya",
                                "https://github.com/sleekcharly",
                            ],
                            worksFor: {
                                "@type": "Organization",
                                name: "Ping Telecommunications Resources Limited",
                            },
                            alumniOf:
                                "Anglia Ruskin University, Cambridge United Kingdom",
                            nationality: "Nigerian",
                            knowsAbout: [
                                "Software Engineering",
                                "IoT Systems",
                                "Meteorological Installations",
                                "Web Development",
                                "Next.js",
                                "Cloud Computing",
                                "AWOS",
                            ],
                        }),
                    }}
                />
            </head>

            <body
                className="antialiased leading-8 overflow-x-hidden"
                suppressHydrationWarning
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <div className="flex flex-col lg:flex-row lg:gap-10">
                        <BlogSidebar />
                        <div className="p-5 md:ml-80">{children}</div>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
