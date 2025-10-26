# Convex Setup Instructions

This file contains step-by-step instructions for setting up Convex for your portfolio project.

## Prerequisites

- A Convex account (create one at https://convex.dev)
- Node.js and pnpm installed

## Step-by-Step Setup

### 1. Initialize Convex Project

Open your terminal in the project directory and run:

```bash
npx convex dev
```

This command will:

- Prompt you to log in with GitHub (or create a Convex account)
- Create a new Convex project
- Generate your Convex URL
- Create a `.env.local` file with your Convex URL
- Start the Convex development server

### 2. What Happens During Initialization

1. **Login**: You'll be prompted to log in to Convex
   - If you don't have an account, you can create one via GitHub
   - Choose "Log in with GitHub" for easier setup

2. **Create Project**: Convex will ask if you want to create a new project
   - Select "Yes, create a new project"
   - Choose a project name (e.g., "portfolio")

3. **Configuration**: Convex will automatically:
   - Create a deployment URL
   - Add it to your `.env.local` file as `NEXT_PUBLIC_CONVEX_URL`
   - Start watching your `convex/` folder for changes

### 3. Verify Setup

After initialization, you should see:

```
Convex dashboard: https://dashboard.convex.dev/[your-project-id]
Convex URL: https://[your-project-id].convex.cloud
```

### 4. Check Environment File

Make sure your `.env.local` file contains:

```env
NEXT_PUBLIC_CONVEX_URL=https://[your-project-id].convex.cloud
```

### 5. Start Your Development Server

In a new terminal window, start your Next.js app:

```bash
pnpm dev
```

### 6. Test Convex Integration

Visit http://localhost:3000 and verify that:

- The site loads without errors
- Visitor tracking is working (check browser console)
- Admin dashboard loads at http://localhost:3000/admin

## Troubleshooting

### Issue: "Cannot prompt for input in non-interactive terminals"

This happens in CI/CD environments. To set up Convex manually:

1. Go to https://dashboard.convex.dev
2. Create a new project
3. Copy your deployment URL
4. Add it to `.env.local`:
   ```env
   NEXT_PUBLIC_CONVEX_URL=https://[your-project-id].convex.cloud
   ```

### Issue: "Module not found: convex/\_generated/api"

This means Convex hasn't generated the API types yet. Run:

```bash
npx convex dev
```

And keep it running in a separate terminal.

### Issue: Environment variable not found

Make sure you have a `.env.local` file with:

```env
NEXT_PUBLIC_CONVEX_URL=your-convex-url-here
```

Then restart your development server.

## Convex Functions

Your Convex functions are in the `convex/` directory:

- `schema.ts` - Database schema definitions
- `visitors.ts` - Visitor tracking functions
- `projectViews.ts` - Project analytics functions
- `contact.ts` - Contact form functions
- `blog.ts` - Blog post functions

All functions are automatically synced to your Convex deployment when you run `npx convex dev`.

## Next Steps

After successful setup:

1. **View Dashboard**: Visit https://dashboard.convex.dev to see your data
2. **Add Blog Posts**: Use the admin dashboard to create blog posts
3. **Monitor Analytics**: Check visitor statistics in the admin panel
4. **Deploy**: Follow `DEPLOYMENT.md` for production deployment

## Production Deployment

When deploying to production:

1. Deploy Convex functions:

   ```bash
   npx convex deploy
   ```

2. Get your production URL from the Convex dashboard

3. Add it to your Vercel environment variables:
   - Go to Vercel project settings
   - Add `NEXT_PUBLIC_CONVEX_URL` with your production Convex URL

## More Information

- Convex Documentation: https://docs.convex.dev
- Convex Dashboard: https://dashboard.convex.dev
- Next.js + Convex Guide: https://docs.convex.dev/quickstart/nextjs
