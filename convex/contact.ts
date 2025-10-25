import { mutation, query } from './_generated/server';
import { v } from 'convex/values';

// Submit a contact form
export const submitContact = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const timestamp = Date.now();
    const id = await ctx.db.insert('contactSubmissions', {
      name: args.name,
      email: args.email,
      message: args.message,
      timestamp,
      read: false,
    });
    return { id, success: true };
  },
});

// Get all contact submissions
export const getContactSubmissions = query({
  handler: async ctx => {
    const submissions = await ctx.db
      .query('contactSubmissions')
      .withIndex('by_timestamp', q => q.gte('timestamp', 0))
      .order('desc')
      .collect();
    return submissions;
  },
});

// Get unread submissions
export const getUnreadSubmissions = query({
  handler: async ctx => {
    const submissions = await ctx.db
      .query('contactSubmissions')
      .withIndex('by_read', q => q.eq('read', false))
      .collect();
    return submissions;
  },
});

// Mark submission as read
export const markAsRead = mutation({
  args: { id: v.id('contactSubmissions') },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, { read: true });
    return { success: true };
  },
});

// Get submission by ID
export const getSubmissionById = query({
  args: { id: v.id('contactSubmissions') },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});
