# Deployment Guide

This guide will help you deploy your portfolio to Vercel with Convex integration.

## Prerequisites

- GitHub account
- Vercel account
- Convex account

## Deployment Steps

### 1. Initialize Convex

First, initialize your Convex project:

```bash
pnpm exec convex dev
```

This will:

- Prompt you to log in or create a Convex account
- Create a new Convex project
- Generate your Convex URL
- Add it to your `.env.local` file

### 2. Deploy Convex Functions

Once Convex is initialized, deploy your functions:

```bash
pnpm exec convex deploy
```

### 3. Deploy to Vercel

#### Option A: Using Vercel CLI

1. Install Vercel CLI:

```bash
npm i -g vercel
```

2. Deploy:

```bash
vercel
```

3. Follow the prompts to connect your project to Vercel

#### Option B: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure environment variables:
   - `NEXT_PUBLIC_CONVEX_URL` - Your Convex deployment URL
5. Click "Deploy"

### 4. Configure Custom Domain

1. In Vercel project settings, go to "Domains"
2. Add your custom domain (e.g., `mawais.dev`)
3. Update your DNS records as instructed by Vercel
4. Wait for DNS propagation (usually 24-48 hours)

### 5. Set Up Environment Variables

In Vercel project settings:

1. Go to "Settings" > "Environment Variables"
2. Add the following:
   - `NEXT_PUBLIC_CONVEX_URL` - Your Convex URL
   - Any other required environment variables

### 6. Configure Production Build

Vercel will automatically:

- Detect Next.js
- Run `pnpm build`
- Deploy your site

## Post-Deployment Checklist

- [ ] Verify site is accessible
- [ ] Test all pages (Home, About, Projects, Blog, Contact)
- [ ] Test admin dashboard at `/admin`
- [ ] Verify visitor tracking is working
- [ ] Test contact form submissions
- [ ] Check analytics in admin dashboard
- [ ] Verify SSL certificate is active
- [ ] Test custom domain

## Troubleshooting

### Convex Not Working

If Convex isn't working in production:

1. Check environment variables in Vercel
2. Verify `NEXT_PUBLIC_CONVEX_URL` is set correctly
3. Re-deploy Convex functions: `pnpm exec convex deploy`

### Build Errors

If you encounter build errors:

1. Check Vercel build logs
2. Run `pnpm build` locally to debug
3. Ensure all dependencies are in `package.json`

### Missing Pages

If pages are 404:

1. Check that all routes are in `src/app` directory
2. Verify `next.config.js` is configured correctly
3. Re-deploy to Vercel

## CI/CD Setup

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [master]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
          cache: 'pnpm'
      - run: pnpm install
      - run: pnpm build
```

## Monitoring

### Vercel Analytics

Enable Vercel Analytics in your project settings for:

- Page views
- Performance metrics
- Error tracking

### Convex Dashboard

Monitor your Convex backend at:

- https://dashboard.convex.dev

## Support

For issues or questions:

- Vercel: https://vercel.com/docs
- Convex: https://docs.convex.dev
- Next.js: https://nextjs.org/docs
