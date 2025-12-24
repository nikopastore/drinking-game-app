"use client";

import Image from "next/image";

export interface Author {
  name: string;
  slug: string;
  role: string;
  avatar?: string;
  bio: string;
}

// SipWiki content team
export const authors: Record<string, Author> = {
  "sipwiki-team": {
    name: "SipWiki Team",
    slug: "sipwiki-team",
    role: "Party Game Experts",
    avatar: "/authors/sipwiki-team.png",
    bio: "The SipWiki editorial team has collectively hosted over 500 parties and tested every drinking game we feature. We're dedicated to making your next gathering unforgettable.",
  },
  "party-pro": {
    name: "The Party Pro",
    slug: "party-pro",
    role: "Event & Safety Specialist",
    avatar: "/authors/party-pro.png",
    bio: "Former event coordinator with 10+ years of experience hosting safe, memorable parties. Expert in responsible drinking practices and party planning logistics.",
  },
  "game-master": {
    name: "The Game Master",
    slug: "game-master",
    role: "Drinking Game Historian",
    avatar: "/authors/game-master.png",
    bio: "Researcher and enthusiast who has documented the origins and variations of over 200 drinking games from around the world.",
  },
};

interface AuthorBylineProps {
  authorSlug?: string;
  publishDate?: string;
  updatedDate?: string;
  readTime?: string;
  showBio?: boolean;
  size?: "small" | "medium" | "large";
}

export function AuthorByline({
  authorSlug = "sipwiki-team",
  publishDate,
  updatedDate,
  readTime,
  showBio = false,
  size = "medium",
}: AuthorBylineProps) {
  const author = authors[authorSlug] || authors["sipwiki-team"];

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Generate Person schema for SEO
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    description: author.bio,
    jobTitle: author.role,
    url: `https://sipwiki.app/about#${author.slug}`,
    worksFor: {
      "@type": "Organization",
      name: "SipWiki",
      url: "https://sipwiki.app",
    },
  };

  const sizeClasses = {
    small: {
      avatar: "h-8 w-8",
      name: "text-sm",
      role: "text-xs",
      meta: "text-xs",
    },
    medium: {
      avatar: "h-10 w-10",
      name: "text-base",
      role: "text-sm",
      meta: "text-sm",
    },
    large: {
      avatar: "h-14 w-14",
      name: "text-lg",
      role: "text-base",
      meta: "text-sm",
    },
  };

  const classes = sizeClasses[size];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <div className="flex items-start gap-3">
        {/* Avatar */}
        <div
          className={`${classes.avatar} rounded-full bg-gradient-to-br from-neon-pink to-neon-purple flex items-center justify-center text-white font-bold flex-shrink-0`}
        >
          {author.avatar ? (
            <Image
              src={author.avatar}
              alt={author.name}
              width={size === "large" ? 56 : size === "medium" ? 40 : 32}
              height={size === "large" ? 56 : size === "medium" ? 40 : 32}
              className="rounded-full"
            />
          ) : (
            <span className={size === "small" ? "text-xs" : "text-sm"}>
              {author.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          )}
        </div>

        {/* Author Info */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className={`font-semibold text-white ${classes.name}`}>
              {author.name}
            </span>
            <span className={`text-gray-500 ${classes.role}`}>
              {author.role}
            </span>
          </div>

          {/* Meta info (dates, read time) */}
          <div
            className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-gray-400 mt-1 ${classes.meta}`}
          >
            {publishDate && (
              <span>
                Published {formatDate(publishDate)}
              </span>
            )}
            {updatedDate && updatedDate !== publishDate && (
              <span>
                Updated {formatDate(updatedDate)}
              </span>
            )}
            {readTime && (
              <span>{readTime} read</span>
            )}
          </div>

          {/* Bio (optional) */}
          {showBio && (
            <p className="text-gray-400 text-sm mt-2 leading-relaxed">
              {author.bio}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

// Compact version for inline use
export function AuthorBylineInline({
  authorSlug = "sipwiki-team",
}: {
  authorSlug?: string;
}) {
  const author = authors[authorSlug] || authors["sipwiki-team"];

  return (
    <span className="text-gray-400 text-sm">
      By{" "}
      <span className="text-white font-medium">{author.name}</span>
      {" "}&middot;{" "}
      <span className="text-gray-500">{author.role}</span>
    </span>
  );
}
