export type BlogCategoryKey =
  | "buying-guides"
  | "party-tips"
  | "safety"
  | "tutorials"
  | "seasonal";

export interface BlogCategory {
  slug: BlogCategoryKey;
  name: string;
  title: string;
  description: string;
  intro: string[];
  highlights: string[];
  closing: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  description: string;
  category: BlogCategoryKey;
  readTime: string;
}

export const blogCategories: BlogCategory[] = [
  {
    slug: "buying-guides",
    name: "Buying Guides",
    title: "Buying Guides for Drinking Games | SipWiki Blog",
    description:
      "Expert reviews and recommendations for party supplies, game gear, and hosting essentials.",
    intro: [
      "Our buying guides focus on the stuff that makes parties smoother: tables that do not wobble, cups that do not crack, and supplies that are actually worth the money. Each guide is written from a party host perspective, with real-world constraints like storage space, durability, and budget.",
      "We do not just list products. We explain what to look for, why it matters, and how different choices change the game night experience. Whether you are outfitting a dorm, a basement, or a backyard, these guides are meant to save you time and money.",
    ],
    highlights: [
      "Side-by-side comparisons with clear use cases",
      "Budget, mid-range, and premium picks for every category",
      "Practical setup tips for hosting and cleanup",
    ],
    closing:
      "If you are unsure where to start, pick one guide, choose a budget, and build from there. The goal is reliable gear that holds up across multiple nights.",
  },
  {
    slug: "party-tips",
    name: "Party Tips",
    title: "Party Tips for Hosting Drinking Games | SipWiki Blog",
    description:
      "Actionable hosting advice, party planning checklists, and crowd-friendly game ideas.",
    intro: [
      "Great parties are a mix of planning and flexibility. These tips help you handle the details that make a night feel effortless: pacing, food timing, ice math, and game flow. We focus on low-stress hosting so you can spend more time with guests and less time troubleshooting.",
      "Each post includes concrete ideas you can use right away, plus links to games and supplies that match the situation. If you are throwing a milestone birthday, a tailgate, or a small apartment hangout, this section gives you the game plan.",
    ],
    highlights: [
      "Party timelines that keep the night moving",
      "Ideas for small spaces, big groups, and themed nights",
      "Tips for keeping everyone included and comfortable",
    ],
    closing:
      "Use these guides to build a simple plan, then adjust based on your crowd. A clear plan beats over-planning every time.",
  },
  {
    slug: "safety",
    name: "Safety & Responsibility",
    title: "Safe Hosting and Responsible Drinking | SipWiki Blog",
    description:
      "Responsible hosting tips, harm reduction, and ways to keep guests safe.",
    intro: [
      "SipWiki celebrates fun nights out, but safety always comes first. These articles are about building a culture where people feel included and respected, and where no one feels pressured to drink. We cover planning steps that reduce risk without killing the vibe.",
      "From hydration strategies to non-alcoholic options, these guides make it easier to host responsibly. They also link to practical tools and checklists you can use when planning any party size.",
    ],
    highlights: [
      "Clear, practical steps for safe hosting",
      "Non-alcoholic alternatives and pacing tips",
      "Guidance for looking out for friends",
    ],
    closing:
      "Safety does not have to be heavy-handed. The best hosts set the tone early and make it easy for guests to choose what is right for them.",
  },
  {
    slug: "tutorials",
    name: "Tutorials & How-Tos",
    title: "Drinking Game Tutorials & How-Tos | SipWiki Blog",
    description:
      "Step-by-step guides for setting up games, tournaments, and DIY projects.",
    intro: [
      "Tutorials are where the details live. We break down the setup, rules, and logistics so your event runs smoothly. If you want to build a table, host a tournament, or organize a bracket night, these guides walk you through each step.",
      "Expect checklists, equipment recommendations, and specific timelines. The goal is to make every project achievable, even if you are hosting for the first time.",
    ],
    highlights: [
      "Tournament brackets and scoring systems",
      "DIY builds with tools and materials lists",
      "Virtual formats for remote hangouts",
    ],
    closing:
      "Follow the checklist, keep the setup simple, and focus on making the rules easy to explain. Clear structure keeps everyone engaged.",
  },
  {
    slug: "seasonal",
    name: "Seasonal Guides",
    title: "Seasonal Drinking Game Guides | SipWiki Blog",
    description:
      "Holiday and event-based drinking game ideas for the biggest moments of the year.",
    intro: [
      "Seasonal guides help you match your party to the moment. Whether it is a holiday, a big sports event, or a summer cookout, these posts highlight themes, game ideas, and drink setups that fit the occasion.",
      "Each guide includes a mix of structured game formats and flexible ideas so you can scale for casual hangouts or full-on parties. We also include hosting tips that are specific to the event type.",
    ],
    highlights: [
      "Theme ideas and party-friendly games",
      "Event-specific drink and food notes",
      "Tips for hosting indoors or outdoors",
    ],
    closing:
      "Seasonal parties are about shared moments. Pick a theme, add one or two signature games, and let the event set the tone.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: "Best Beer Pong Tables 2025",
    slug: "/blog/buying-guides/best-beer-pong-tables",
    description: "Expert reviews for every budget, from portable to premium.",
    category: "buying-guides",
    readTime: "12 min read",
  },
  {
    title: "Best LED Beer Pong Tables",
    slug: "/blog/buying-guides/best-led-beer-pong-tables",
    description: "Glow-up your party with the best light-up tables.",
    category: "buying-guides",
    readTime: "10 min read",
  },
  {
    title: "Best Outdoor Drinking Games",
    slug: "/blog/buying-guides/best-outdoor-drinking-games",
    description: "Backyard-ready games that are easy to set up and play.",
    category: "buying-guides",
    readTime: "9 min read",
  },
  {
    title: "Best Party Cups for Drinking Games",
    slug: "/blog/buying-guides/best-party-cups",
    description: "Durable, affordable cups that actually last a night.",
    category: "buying-guides",
    readTime: "7 min read",
  },
  {
    title: "Party Supplies Checklist",
    slug: "/blog/buying-guides/party-supplies-checklist",
    description: "Everything you need for a smooth, fun game night.",
    category: "buying-guides",
    readTime: "8 min read",
  },
  {
    title: "21st Birthday Party Ideas",
    slug: "/blog/party-tips/21st-birthday-party-ideas",
    description: "Themes, drinks, and games for an unforgettable night.",
    category: "party-tips",
    readTime: "12 min read",
  },
  {
    title: "House Party Essentials",
    slug: "/blog/party-tips/house-party-essentials",
    description: "The core supplies and setup tips every host should know.",
    category: "party-tips",
    readTime: "9 min read",
  },
  {
    title: "Small Apartment Party Hacks",
    slug: "/blog/party-tips/small-apartment-party-hacks",
    description: "Space-saving ideas that still feel like a real party.",
    category: "party-tips",
    readTime: "7 min read",
  },
  {
    title: "Tailgate Party Guide",
    slug: "/blog/party-tips/tailgate-party-guide",
    description: "Game-day setup tips, coolers, and easy crowd games.",
    category: "party-tips",
    readTime: "8 min read",
  },
  {
    title: "How to Host a Safe Drinking Party",
    slug: "/blog/safety/how-to-host-safe-drinking-party",
    description: "Practical steps for safer hosting without killing the vibe.",
    category: "safety",
    readTime: "8 min read",
  },
  {
    title: "Know Your Limits",
    slug: "/blog/safety/know-your-limits",
    description: "Recognize limits, pace responsibly, and keep friends safe.",
    category: "safety",
    readTime: "6 min read",
  },
  {
    title: "Non-Alcoholic Alternatives",
    slug: "/blog/safety/non-alcoholic-alternatives",
    description: "Inclusive options for guests who are not drinking.",
    category: "safety",
    readTime: "6 min read",
  },
  {
    title: "Beer Pong Tournament Setup",
    slug: "/blog/tutorials/beer-pong-tournament-setup",
    description: "Bracket formats, scoring, and hosting tips.",
    category: "tutorials",
    readTime: "10 min read",
  },
  {
    title: "DIY Beer Pong Table",
    slug: "/blog/tutorials/diy-beer-pong-table",
    description: "Build a solid table with budget materials.",
    category: "tutorials",
    readTime: "9 min read",
  },
  {
    title: "Virtual Drinking Games Guide",
    slug: "/blog/tutorials/virtual-drinking-games",
    description: "Remote-friendly games, tools, and setup ideas.",
    category: "tutorials",
    readTime: "7 min read",
  },
  {
    title: "Super Bowl 2025 Drinking Games",
    slug: "/blog/seasonal/super-bowl-2025-drinking-games",
    description: "Game-day rules and pacing for the big night.",
    category: "seasonal",
    readTime: "9 min read",
  },
  {
    title: "Summer BBQ Drinking Games",
    slug: "/blog/seasonal/summer-bbq-drinking-games",
    description: "Outdoor games and cool drinks for hot days.",
    category: "seasonal",
    readTime: "8 min read",
  },
  {
    title: "March Madness Drinking Games",
    slug: "/blog/seasonal/march-madness-drinking-games",
    description: "Bracket-friendly rules to keep the games moving.",
    category: "seasonal",
    readTime: "8 min read",
  },
  {
    title: "Fourth of July Drinking Games",
    slug: "/blog/seasonal/fourth-of-july-drinking-games",
    description: "Patriotic themes and classic backyard games.",
    category: "seasonal",
    readTime: "8 min read",
  },
  {
    title: "Halloween Drinking Games 2025",
    slug: "/blog/seasonal/halloween-drinking-games-2025",
    description: "Spooky themes, party ideas, and crowd games.",
    category: "seasonal",
    readTime: "8 min read",
  },
  {
    title: "Thanksgiving Drinking Games",
    slug: "/blog/seasonal/thanksgiving-drinking-games",
    description: "Family-friendly twists and post-dinner fun.",
    category: "seasonal",
    readTime: "7 min read",
  },
  {
    title: "New Year's Eve Drinking Games 2025",
    slug: "/blog/seasonal/new-years-eve-drinking-games-2025",
    description: "Countdown games and party pacing tips.",
    category: "seasonal",
    readTime: "9 min read",
  },
];

export const getBlogPostsByCategory = (category: BlogCategoryKey): BlogPost[] =>
  blogPosts.filter((post) => post.category === category);
