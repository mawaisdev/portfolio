# Portfolio - Muhammad Awais

A modern, responsive portfolio website built with Next.js 15, TypeScript, and shadcn/ui.

## 🚀 Features

### Core Pages

- **Home**: Hero section, featured projects, skills showcase, and call-to-action
- **About**: Professional introduction, work experience, education, and skills
- **Projects**: Filterable project grid with detailed project cards
- **Contact**: Validated contact form with React Hook Form and Zod

### Design & UX

- ✅ Dark/Light mode with next-themes
- ✅ Fully responsive design (mobile-first approach)
- ✅ WCAG 2.1 AA accessibility compliance
- ✅ shadcn/ui component library
- ✅ Tailwind CSS with custom design tokens

### Performance & SEO

- ✅ Image optimization with Next.js Image component
- ✅ Loading states and skeleton components
- ✅ SEO metadata with Open Graph tags
- ✅ Sitemap.xml and robots.txt
- ✅ Structured data (JSON-LD) for search engines
- ✅ Bundle analyzer integration

### Developer Experience

- ✅ TypeScript with strict mode
- ✅ ESLint + Prettier for code quality
- ✅ Husky pre-commit hooks
- ✅ Jest + React Testing Library for unit tests
- ✅ Playwright for E2E tests
- ✅ Path aliases with `@/` imports

### Real-time Features (Phase 2)

- ✅ Convex integration for real-time data
- ✅ Visitor tracking and analytics
- ✅ Contact form submissions storage
- ✅ Project view tracking
- ✅ Admin dashboard for analytics
- ✅ Real-time visitor counter

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Forms**: React Hook Form + Zod
- **Theme**: next-themes
- **Icons**: lucide-react
- **Database**: Convex (real-time backend)
- **Package Manager**: pnpm

## 📦 Installation

1. Clone the repository:

```bash
git clone git@github.com:mawaisdev/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
pnpm install
```

3. Copy environment variables:

```bash
cp env.example .env.local
```

4. Initialize Convex (one-time setup):

```bash
pnpm exec convex dev
```

This will:

- Prompt you to log in or create a Convex account
- Create a new Convex project
- Generate your Convex URL
- Add it to your `.env.local` file

5. Run the development server:

```bash
pnpm dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

**Note**: For the admin dashboard, visit [http://localhost:3000/admin](http://localhost:3000/admin)

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm type-check` - Run TypeScript type checking
- `pnpm test` - Run unit tests
- `pnpm test:e2e` - Run E2E tests
- `pnpm test:coverage` - Generate test coverage report
- `pnpm analyze` - Analyze bundle size
- `pnpm convex:dev` - Start Convex development server
- `pnpm convex:deploy` - Deploy Convex functions

## 🗂️ Project Structure

```
portfolio/
├── public/                 # Static assets
├── convex/                 # Convex backend functions
│   ├── schema.ts          # Database schema
│   ├── visitors.ts        # Visitor tracking functions
│   ├── projectViews.ts    # Project analytics functions
│   └── contact.ts         # Contact form functions
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── (marketing)/   # Marketing pages (Home, About, Projects, Contact)
│   │   ├── (admin)/       # Admin dashboard
│   │   ├── layout.tsx     # Root layout with providers
│   │   ├── sitemap.ts     # Sitemap generation
│   │   └── robots.ts      # robots.txt generation
│   ├── components/        # React components
│   │   ├── features/      # Feature-specific components
│   │   ├── layouts/       # Layout components (Header, Footer, Container)
│   │   ├── ui/            # shadcn/ui components
│   │   └── analytics/     # Analytics components
│   ├── providers/         # Context providers
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── types/             # TypeScript type definitions
│   └── __tests__/         # Unit tests
├── tests/                 # E2E tests
└── ...config files        # Configuration files
```

## 🎨 Customization

### Theme Colors

Edit `tailwind.config.ts` to customize the color scheme.

### Content

Update content in the component files:

- Home: `src/app/(marketing)/page.tsx`
- About: `src/app/(marketing)/about/page.tsx`
- Projects: `src/app/(marketing)/projects/page.tsx`
- Contact: `src/app/(marketing)/contact/page.tsx`

### SEO

Update metadata in:

- `src/app/layout.tsx` - Site-wide metadata
- Individual page files - Page-specific metadata

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy!

The site will be live at `https://your-project.vercel.app`

### Configure Custom Domain

1. Add your domain in Vercel project settings
2. Update DNS records as instructed by Vercel
3. Wait for DNS propagation

## 📊 Testing

### Unit Tests

```bash
pnpm test
```

### E2E Tests

```bash
pnpm test:e2e
```

### Test Coverage

```bash
pnpm test:coverage
```

## 🎯 Future Enhancements

- [x] Convex integration for real-time features ✅
- [x] Visitor counter with real-time tracking ✅
- [x] Project view tracking and analytics ✅
- [x] Contact form submissions storage ✅
- [x] Admin dashboard with analytics ✅
- [ ] MDX blog system with reactions
- [ ] Performance optimization (95+ Lighthouse scores)
- [ ] Email notifications for contact submissions
- [ ] Advanced analytics with charts and graphs

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 👤 Author

**Muhammad Awais**

- Website: [mawais.dev](https://mawais.dev)
- GitHub: [@mawaisdev](https://github.com/mawaisdev)
- LinkedIn: [mawaisdev](https://linkedin.com/in/mawaisdev)
- Twitter: [@mawaisdev](https://twitter.com/mawaisdev)

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com) for the amazing component library
- [Next.js](https://nextjs.org) for the incredible framework
- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework
