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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col xl:flex-row gap-10 xl:gap-12">
                <section className="flex-1">
                    <div className="flex gap-4 lg:gap-6">
                        {/* Desktop social media share buttons */}
                        <div className="hidden lg:block shrink-0">
                            <div className="sticky top-24">
                                <ShareButton url={url} title={post.title} />
                            </div>
                        </div>

                        <article className="w-full min-w-0">
                            <header className="flex flex-col gap-4 pb-2">
                                <h1 className="font-Outfit font-semibold text-3xl sm:text-4xl lg:text-5xl leading-tight">
                                    {post.title}
                                </h1>

                                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-5 text-sm sm:text-base font-Ovo text-gray-500">
                                    <span className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                                        <p>{formattedDate}</p>
                                    </span>

                                    {post.tags && post.tags.length > 0 && (
                                        <span className="flex items-start gap-2">
                                            <TagIcon className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 mt-0.5" />
                                            <span className="flex flex-wrap gap-2">
                                                {post.tags.map((tag, i) => (
                                                    <Link
                                                        href={`/blog/tag/${tag}`}
                                                        key={`${tag}-${i}`}
                                                        className="rounded-full border border-gray-200 px-2.5 py-1 text-xs sm:text-sm transition hover:bg-gray-100"
                                                    >
                                                        {tag}
                                                    </Link>
                                                ))}
                                            </span>
                                        </span>
                                    )}
                                </div>

                                {/* Mobile / tablet share buttons */}
                                <div className="flex lg:hidden gap-4 py-3 border-y border-gray-200">
                                    <ShareButtonMobile
                                        url={url}
                                        title={post.title}
                                    />
                                </div>
                            </header>

                            <div
                                className="tiptap max-w-none text-base sm:text-lg leading-8 tracking-normal
                                           [&>p]:mb-6
                                           [&>h1]:text-3xl [&>h1]:sm:text-4xl [&>h1]:font-semibold [&>h1]:mt-10 [&>h1]:mb-4
                                           [&>h2]:text-2xl [&>h2]:sm:text-3xl [&>h2]:font-semibold [&>h2]:mt-8 [&>h2]:mb-4
                                           [&>h3]:text-xl [&>h3]:sm:text-2xl [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3
                                           [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6
                                           [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6
                                           [&>blockquote]:border-l-4 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-gray-600
                                           [&_img]:rounded-xl [&_img]:my-8"
                                dangerouslySetInnerHTML={{ __html: html }}
                            />
                        </article>
                    </div>
                </section>

                {/* recommended posts based on article category */}
                {relatedPosts.length > 0 && (
                    <aside className="hidden xl:flex xl:w-80 shrink-0 flex-col gap-6 sticky top-24 h-fit">
                        <h2 className="text-xl font-semibold font-Outfit">
                            Recommended
                        </h2>

                        <div className="flex flex-col gap-4">
                            {relatedPosts.map((post) => (
                                <Link
                                    href={`/blog/${post.slug}`}
                                    key={post.id}
                                    className="flex items-center gap-3 rounded-xl transition hover:bg-gray-50 p-2 -m-2 group"
                                >
                                    <div className="relative w-20 h-20 shrink-0 overflow-hidden rounded-lg">
                                        <Image
                                            src={
                                                post.images[0]
                                                    ? post.images[0].url
                                                    : ImgTemplate
                                            }
                                            alt={post.title}
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            fill
                                            sizes="80px"
                                        />
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-sm font-medium leading-snug text-gray-800 group-hover:text-black line-clamp-3">
                                            {post.title}
                                        </h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </aside>
                )}
            </div>
        </div>
    );
};

export default PostPage;
