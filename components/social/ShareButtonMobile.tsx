"use client";

import { FaX, FaLinkedin, FaFacebook, FaReddit } from "react-icons/fa6";

type Props = {
    url: string;
    title: string;
};

export default function ShareButtonMobile({ url, title }: Props) {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    const platforms = [
        {
            name: "Twitter",
            icon: FaX,
            href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
        },
        {
            name: "LinkedIn",
            icon: FaLinkedin,
            href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
        },
        {
            name: "Facebook",
            icon: FaFacebook,
            href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        },
        {
            name: "Reddit",
            icon: FaReddit,
            href: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
        },
    ];

    return (
        <div className="flex items-center gap-5">
            {platforms.map(({ name, icon: Icon, href }) => (
                <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Share on ${name}`}
                    className="transition-transform hover:scale-110"
                >
                    <Icon size={22} />
                </a>
            ))}
        </div>
    );
}
