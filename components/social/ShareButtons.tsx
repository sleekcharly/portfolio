"use client";

import { FaX, FaLinkedin, FaFacebook, FaReddit } from "react-icons/fa6";

type Props = {
    url: string;
    title: string;
};

export default function ShareButton({ url, title }: Props) {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    const shareLinks = {
        twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        reddit: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
    };

    return (
        <div className="flex gap-4 text-xl">
            <a
                href={shareLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                title={title}
            >
                <FaX />
            </a>

            <a
                href={shareLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title={title}
            >
                <FaLinkedin />
            </a>

            <a
                href={shareLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                title={title}
            >
                <FaFacebook />
            </a>

            <a
                href={shareLinks.reddit}
                target="_blank"
                rel="noopener noreferrer"
                title={title}
            >
                <FaReddit />
            </a>
        </div>
    );
}
