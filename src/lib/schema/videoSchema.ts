import { WithContext, VideoObject } from "schema-dts";

export interface VideoSchemaOptions {
  name: string;
  description: string;
  thumbnailUrl: string;
  contentUrl?: string; // Direct video file URL
  embedUrl?: string; // YouTube embed URL
  uploadDate: string;
  duration?: string; // ISO 8601 duration (e.g., "PT1M30S" for 1:30)
  publisher?: {
    name: string;
    logoUrl: string;
  };
}

/**
 * Generate VideoObject schema for embedded videos
 * Essential for video SEO and rich snippets
 */
export function generateVideoSchema(
  options: VideoSchemaOptions
): WithContext<VideoObject> {
  const {
    name,
    description,
    thumbnailUrl,
    contentUrl,
    embedUrl,
    uploadDate,
    duration,
    publisher,
  } = options;

  const schema: WithContext<VideoObject> = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: name,
    description: description,
    thumbnailUrl: thumbnailUrl,
    uploadDate: uploadDate,
  };

  // Add content URL if available (direct video file)
  if (contentUrl) {
    schema.contentUrl = contentUrl;
  }

  // Add embed URL if available (YouTube, Vimeo, etc.)
  if (embedUrl) {
    schema.embedUrl = embedUrl;
  }

  // Add duration if available
  if (duration) {
    schema.duration = duration;
  }

  // Add publisher info
  if (publisher) {
    schema.publisher = {
      "@type": "Organization",
      name: publisher.name,
      logo: {
        "@type": "ImageObject",
        url: publisher.logoUrl,
      },
    };
  }

  return schema;
}

/**
 * Generate YouTube-specific VideoObject schema
 * Automatically handles YouTube URL formats
 */
export function generateYouTubeSchema(options: {
  videoId: string;
  title: string;
  description: string;
  uploadDate: string;
  duration?: string;
}): WithContext<VideoObject> {
  const { videoId, title, description, uploadDate, duration } = options;

  return generateVideoSchema({
    name: title,
    description: description,
    thumbnailUrl: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
    embedUrl: `https://www.youtube.com/embed/${videoId}`,
    contentUrl: `https://www.youtube.com/watch?v=${videoId}`,
    uploadDate: uploadDate,
    duration: duration,
    publisher: {
      name: "SipWiki",
      logoUrl: "https://sipwiki.app/logo.png",
    },
  });
}

/**
 * Extract YouTube video ID from various URL formats
 */
export function extractYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\?\/]+)/,
    /youtube\.com\/shorts\/([^&\?\/]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
}
