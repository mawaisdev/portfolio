import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  // Visitor tracking
  visitors: defineTable({
    ip: v.string(),
    userAgent: v.optional(v.string()),
    path: v.string(),
    timestamp: v.number(),
    referrer: v.optional(v.string()),
  })
    .index('by_timestamp', ['timestamp'])
    .index('by_path', ['path']),

  // Project views tracking
  projectViews: defineTable({
    projectId: v.string(),
    projectSlug: v.string(),
    timestamp: v.number(),
    ip: v.optional(v.string()),
  })
    .index('by_project', ['projectSlug'])
    .index('by_timestamp', ['timestamp']),

  // Contact form submissions
  contactSubmissions: defineTable({
    name: v.string(),
    email: v.string(),
    message: v.string(),
    timestamp: v.number(),
    read: v.boolean(),
  })
    .index('by_timestamp', ['timestamp'])
    .index('by_read', ['read']),

  // Site analytics
  siteStats: defineTable({
    totalVisitors: v.number(),
    uniqueVisitors: v.number(),
    totalPageViews: v.number(),
    lastUpdated: v.number(),
  }),

  // Blog posts
  blogPosts: defineTable({
    title: v.string(),
    slug: v.string(),
    excerpt: v.string(),
    content: v.string(),
    author: v.string(),
    published: v.boolean(),
    tags: v.array(v.string()),
    views: v.number(),
    likes: v.number(),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index('by_slug', ['slug'])
    .index('by_published', ['published']),
});
