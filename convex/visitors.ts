import { mutation, query } from './_generated/server';
import { v } from 'convex/values';

// Track a new visitor
export const trackVisitor = mutation({
  args: {
    ip: v.string(),
    userAgent: v.optional(v.string()),
    path: v.string(),
    referrer: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const timestamp = Date.now();
    await ctx.db.insert('visitors', {
      ip: args.ip,
      userAgent: args.userAgent,
      path: args.path,
      timestamp,
      referrer: args.referrer,
    });
    return { success: true };
  },
});

// Get total visitor count
export const getTotalVisitors = query({
  handler: async ctx => {
    const visitors = await ctx.db.query('visitors').collect();
    return visitors.length;
  },
});

// Get unique visitor count (based on IP)
export const getUniqueVisitors = query({
  handler: async ctx => {
    const visitors = await ctx.db.query('visitors').collect();
    const uniqueIPs = new Set(visitors.map(v => v.ip));
    return uniqueIPs.size;
  },
});

// Get visitors by path
export const getVisitorsByPath = query({
  args: { path: v.string() },
  handler: async (ctx, args) => {
    const visitors = await ctx.db
      .query('visitors')
      .withIndex('by_path', q => q.eq('path', args.path))
      .collect();
    return visitors.length;
  },
});

// Get recent visitors (last 24 hours)
export const getRecentVisitors = query({
  handler: async ctx => {
    const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000;
    const visitors = await ctx.db
      .query('visitors')
      .withIndex('by_timestamp', q => q.gte('timestamp', oneDayAgo))
      .collect();
    return visitors.length;
  },
});
