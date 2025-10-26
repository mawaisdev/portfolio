import { mutation, query } from './_generated/server';
import { v } from 'convex/values';

// Create a new blog post
export const createPost = mutation({
  args: {
    title: v.string(),
    slug: v.string(),
    excerpt: v.string(),
    content: v.string(),
    author: v.string(),
    published: v.boolean(),
    tags: v.array(v.string()),
  },
  handler: async (ctx, args) => {
    const timestamp = Date.now();
    const id = await ctx.db.insert('blogPosts', {
      title: args.title,
      slug: args.slug,
      excerpt: args.excerpt,
      content: args.content,
      author: args.author,
      published: args.published,
      tags: args.tags,
      views: 0,
      likes: 0,
      createdAt: timestamp,
      updatedAt: timestamp,
    });
    return { id, success: true };
  },
});

// Get all published blog posts
export const getPublishedPosts = query({
  handler: async ctx => {
    const posts = await ctx.db
      .query('blogPosts')
      .withIndex('by_published', q => q.eq('published', true))
      .order('desc')
      .collect();
    return posts;
  },
});

// Get post by slug
export const getPostBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const post = await ctx.db
      .query('blogPosts')
      .withIndex('by_slug', q => q.eq('slug', args.slug))
      .first();
    return post;
  },
});

// Increment post views
export const incrementViews = mutation({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const post = await ctx.db
      .query('blogPosts')
      .withIndex('by_slug', q => q.eq('slug', args.slug))
      .first();

    if (post) {
      await ctx.db.patch(post._id, { views: post.views + 1 });
    }
  },
});

// Like a post
export const likePost = mutation({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const post = await ctx.db
      .query('blogPosts')
      .withIndex('by_slug', q => q.eq('slug', args.slug))
      .first();

    if (post) {
      await ctx.db.patch(post._id, { likes: post.likes + 1 });
    }
  },
});

// Get posts by tag
export const getPostsByTag = query({
  args: { tag: v.string() },
  handler: async (ctx, args) => {
    const posts = await ctx.db
      .query('blogPosts')
      .withIndex('by_published', q => q.eq('published', true))
      .collect();

    return posts.filter(post => post.tags.includes(args.tag));
  },
});

// Get popular posts
export const getPopularPosts = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const limit = args.limit || 5;
    const posts = await ctx.db
      .query('blogPosts')
      .withIndex('by_published', q => q.eq('published', true))
      .order('desc')
      .collect();

    return posts.sort((a, b) => b.views - a.views).slice(0, limit);
  },
});
