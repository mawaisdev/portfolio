import { mutation, query } from './_generated/server';
import { v } from 'convex/values';

// Track a project view
export const trackProjectView = mutation({
  args: {
    projectId: v.string(),
    projectSlug: v.string(),
    ip: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const timestamp = Date.now();
    await ctx.db.insert('projectViews', {
      projectId: args.projectId,
      projectSlug: args.projectSlug,
      timestamp,
      ip: args.ip,
    });
    return { success: true };
  },
});

// Get total views for a project
export const getProjectViews = query({
  args: { projectSlug: v.string() },
  handler: async (ctx, args) => {
    const views = await ctx.db
      .query('projectViews')
      .withIndex('by_project', q => q.eq('projectSlug', args.projectSlug))
      .collect();
    return views.length;
  },
});

// Get views for all projects
export const getAllProjectViews = query({
  args: {},
  handler: async ctx => {
    const views = await ctx.db.query('projectViews').collect();
    const viewsByProject = views.reduce(
      (acc, view) => {
        acc[view.projectSlug] = (acc[view.projectSlug] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );
    return viewsByProject;
  },
});

// Get popular projects (most viewed)
export const getPopularProjects = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const limit = args.limit || 5;
    const views = await ctx.db.query('projectViews').collect();
    const viewsByProject = views.reduce(
      (acc, view) => {
        acc[view.projectSlug] = (acc[view.projectSlug] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );

    return Object.entries(viewsByProject)
      .sort(([, a], [, b]) => b - a)
      .slice(0, limit)
      .map(([slug, views]) => ({ slug, views }));
  },
});
