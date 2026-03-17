"use client";

import { BlogPost } from "@/lib/types";
import { TextStyleKit } from "@tiptap/extension-text-style";
import { generateHTML } from "@tiptap/html";
import { JSONContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Calendar, TagIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ImgTemplate from "@/public/images/img_template.webp";
import { CustomImage } from "@/lib/tiptap/custom-image";
import ShareButton from "@/components/social/ShareButtons";
import ShareButtonMobile from "@/components/social/ShareButtonMobile";

type Props = {
    post: BlogPost;
    relatedPosts: BlogPost[];
    formattedDate: string;
};

const PostPage = ({ post, relatedPosts, formattedDate }: Props) => {
    const html = generateHTML(post.content as JSONContent, [
        StarterKit,
        CustomImage.configure({
            inline: false,
        }),
        TextStyleKit,
    ]);

    const url = `https://devcharles.com/blog/${post.slug}`;
    return (
        <div className="flex gap-12  mx-auto max-w-7xl px-6">
            <section className="flex-1 gap-7 flex">
                {/* Social media share buttons */}

                <ShareButton url={url} title={post.title} />

                <article className="flex flex-col gap-6 w-full">
                    <header className="flex flex-col gap-3">
                        <h1 className="font-Outfit font-semibold mb-2 text-[clamp(1.8rem,4vw,3rem)]">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-4 font-Ovo text-lg text-gray-400">
                            <span className="flex items-center gap-1">
                                <Calendar />
                                <p>{formattedDate}</p>
                            </span>

                            {post.tags && (
                                <span className="flex items-center gap-1">
                                    <TagIcon />
                                    {post.tags.map((tag, i) => (
                                        <Link
                                            href={`/blog/tag/${tag}`}
                                            key={`${tag}-${i}`}
                                        >
                                            {tag}
                                        </Link>
                                    ))}
                                </span>
                            )}
                        </div>
                        <div className="flex xl:hidden gap-4 py-3 border-y border-gray-200">
                            <ShareButtonMobile url={url} title={post.title} />
                        </div>
                    </header>

                    <div
                        className="tiptap text-[clamp(1rem,1.1vw,1.125rem)] space-y-6 max-w-[70ch] leading-relaxed tracking-normal"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </article>
            </section>
            {/* recommended posts based on article category */}
            <aside className="hidden xl:flex flex-col gap-8 sticky top-20 h-fit w-80">
                <h2 className="text-xl font-semibold font-Outfit">
                    Recommended
                </h2>
                <div className="flex flex-col gap-4">
                    {relatedPosts.map((post) => (
                        <Link
                            href={`/blog/${post.slug}`}
                            key={post.id}
                            className="flex items-center gap-3 group"
                        >
                            {post.images[0] ? (
                                <div className="relative w-20 h-20 shrink-0 overflow-hidden rounded-lg">
                                    <Image
                                        src={post.images[0].url}
                                        alt={post.title}
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        fill
                                        sizes="80px"
                                    />
                                </div>
                            ) : (
                                <div className="relative w-20 h-20 shrink-0 overflow-hidden rounded-lg">
                                    <Image
                                        src={ImgTemplate}
                                        alt={post.title}
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        fill
                                        sizes="80px"
                                    />
                                </div>
                            )}
                            <div className="flex-1">
                                <h3 className="text-sm font-medium leading-snug group-hover:text-gray-900">
                                    {post.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </aside>
        </div>
    );
};

export default PostPage;
