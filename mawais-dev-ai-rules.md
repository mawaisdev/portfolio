# AI Assistant Rules for mawais.dev Portfolio Project

## Project Context

You are assisting Muhammad Awais, a Software Engineer, in building a modern portfolio website at mawais.dev. This document contains all project specifications, technical requirements, and coding standards that must be followed.

### Developer Profile
- **Name**: Muhammad Awais
- **Role**: Software Engineer
- **Location**: Lahore, Pakistan
- **Current Position**: Software Engineer at OCloud Solutions (Jan 2025 - Present)
- **Previous Experience**: Kwanso (Aug 2023 - Jan 2025), VU Solutions (Apr 2022 - Aug 2022)
- **Education**: Bachelor of Computer Science (CGPA: 3.3, Graduated 2023)
- **Domain**: mawais.dev (currently on Cloudflare + GitHub Pages, migrating to new stack)

## Core Project Requirements

### Technical Stack (MUST USE)
```typescript
const REQUIRED_STACK = {
  framework: 'Next.js 15 with App Router',
  backend: 'Convex for real-time features',
  styling: 'Tailwind CSS',
  language: 'TypeScript (strict mode)',
  deployment: 'Vercel',
  dns: 'Cloudflare',
  packageManager: 'pnpm'
};
```

### Performance Targets (NON-NEGOTIABLE)
- Lighthouse Score: 95+ on all metrics
- First Contentful Paint: < 1s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- First Input Delay: < 100ms
- Time to Interactive: < 3.5s

## Code Standards and Conventions

### File Structure
```
src/
├── app/                    # Next.js app directory
│   ├── (marketing)/       # Marketing pages group
│   ├── (admin)/           # Admin dashboard group
│   └── api/               # API routes
├── components/
│   ├── ui/                # Shadcn/ui components
│   ├── features/          # Feature-specific components
│   └── layouts/           # Layout components
├── convex/                # Convex backend
│   ├── functions/         # Convex functions
│   └── schema.ts          # Database schema
├── lib/                   # Utility functions
├── hooks/                 # Custom React hooks
└── styles/               # Global styles
```

### Naming Conventions
- **Components**: PascalCase (e.g., `ProjectCard.tsx`)
- **Utilities**: camelCase (e.g., `formatDate.ts`)
- **Hooks**: camelCase with 'use' prefix (e.g., `useScrollAnimation.ts`)
- **Convex Functions**: camelCase (e.g., `getProjects.ts`)
- **CSS Classes**: kebab-case with component prefix (e.g., `project-card-title`)
- **Environment Variables**: SCREAMING_SNAKE_CASE (e.g., `NEXT_PUBLIC_CONVEX_URL`)

### TypeScript Requirements
```typescript
// ALWAYS use strict typing
interface ProjectProps {
  id: string;
  title: string;
  description: string;
  technologies: readonly string[];
  demoUrl?: string; // Optional properties marked clearly
  githubUrl?: string;
}

// NEVER use 'any' type - use 'unknown' if type is truly unknown
// ALWAYS define return types explicitly
export const formatDate = (date: Date): string => {
  // Implementation
};

// ALWAYS use const assertions for constants
export const ROUTES = {
  home: '/',
  about: '/about',
  projects: '/projects',
  blog: '/blog',
  contact: '/contact',
} as const;
```

## Component Development Rules

### React/Next.js Patterns
```tsx
// ALWAYS use Server Components by default
// Mark client components explicitly
'use client';

// PREFER composition over props drilling
// USE Context API sparingly, Convex state preferred

// ALWAYS handle loading and error states
export default async function ProjectsPage() {
  try {
    const projects = await getProjects();
    return <ProjectsList projects={projects} />;
  } catch (error) {
    return <ErrorBoundary error={error} />;
  }
}

// ALWAYS optimize images
import Image from 'next/image';
<Image 
  src="/hero.jpg" 
  alt="Descriptive alt text" // ALWAYS include meaningful alt text
  width={1920} 
  height={1080}
  priority // for above-fold images
  placeholder="blur"
/>
```

### Convex Integration Rules
```typescript
// ALWAYS define schema with validators
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  projects: defineTable({
    title: v.string(),
    description: v.string(),
    technologies: v.array(v.string()),
    featured: v.boolean(),
    order: v.number(),
  }).index("by_featured", ["featured", "order"]),
});

// ALWAYS use optimistic updates for better UX
const updateProject = useMutation(api.projects.update);
// Implement optimistic UI updates
```

## SEO and Accessibility Requirements

### SEO Checklist
- [ ] Every page MUST have unique meta title and description
- [ ] Use semantic HTML5 elements
- [ ] Implement structured data (JSON-LD)
- [ ] Generate dynamic sitemap.xml
- [ ] Optimize images with proper formats (WebP, AVIF)
- [ ] Use descriptive URLs (no IDs in URLs)
- [ ] Implement Open Graph and Twitter Cards
- [ ] Add canonical URLs for all pages

### Accessibility Standards
- [ ] WCAG 2.1 AA compliance minimum
- [ ] Keyboard navigation for all interactive elements
- [ ] ARIA labels where necessary (but prefer semantic HTML)
- [ ] Color contrast ratio: 4.5:1 for normal text, 3:1 for large text
- [ ] Focus indicators visible and clear
- [ ] Skip navigation link
- [ ] Responsive font sizing (rem/em units)

## Performance Optimization Rules

### Critical Rendering Path
```tsx
// ALWAYS lazy load below-fold components
const ProjectsSection = dynamic(() => import('@/components/ProjectsSection'), {
  loading: () => <ProjectsSkeleton />,
});

// ALWAYS use Next.js font optimization
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});
```

### Bundle Size Management
- Maximum JS bundle size per page: 200KB (gzipped)
- Use dynamic imports for heavy libraries
- Tree-shake all imports
- Analyze bundle with @next/bundle-analyzer regularly

## CI/CD Configuration

### Git Commit Messages
```
feat: add new feature
fix: resolve bug
docs: update documentation
style: formatting changes
refactor: code restructuring
test: add/update tests
chore: maintenance tasks
perf: performance improvements

Example: "feat: implement real-time visitor counter with Convex"
```

### GitHub Actions Required Checks
```yaml
- TypeScript compilation
- ESLint with no errors
- Prettier formatting
- Unit tests passing (>80% coverage)
- Build successful
- Lighthouse CI (performance budget)
```

## Testing Requirements

### Test Coverage Minimums
- Unit Tests: 80% coverage
- Integration Tests: Critical user paths
- E2E Tests: Homepage, Contact form, Project filtering

### Testing Patterns
```typescript
// ALWAYS test user behavior, not implementation
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('user can filter projects by technology', async () => {
  render(<ProjectsPage />);
  const filterButton = screen.getByRole('button', { name: /react/i });
  await userEvent.click(filterButton);
  expect(screen.getByText('Miro Real-time Whiteboard')).toBeInTheDocument();
});
```

## Content and Copy Guidelines

### Tone of Voice
- Professional but approachable
- Technical accuracy without jargon overload
- Action-oriented CTAs
- First-person in About section, third-person in testimonials

### Content Structure
- Headlines: Clear value proposition
- Paragraphs: Maximum 3-4 sentences
- Lists: Use for scannable information
- CTAs: One primary CTA per section

## Real-time Features Implementation

### Convex Real-time Features
1. **Visitor Counter**: Show live visitor count
2. **Project Views**: Track and display project popularity
3. **Blog Reactions**: Real-time emoji reactions
4. **Contact Form**: Instant notification on submission
5. **Admin Dashboard**: Live analytics updates

### Real-time Best Practices
```typescript
// ALWAYS handle connection states
const { isLoading, isAuthenticated } = useConvexAuth();

// ALWAYS implement optimistic updates
const optimisticUpdate = () => {
  // Update UI immediately
  // Sync with Convex
  // Handle rollback on error
};

// ALWAYS clean up subscriptions
useEffect(() => {
  const unsubscribe = subscribeToUpdates();
  return () => unsubscribe();
}, []);
```

## Security Guidelines

### Environment Variables
```bash
# NEVER commit these to git
CONVEX_DEPLOYMENT
NEXT_PUBLIC_CONVEX_URL
GITHUB_TOKEN
ANALYTICS_KEY

# ALWAYS validate environment variables
const env = z.object({
  NEXT_PUBLIC_CONVEX_URL: z.string().url(),
}).parse(process.env);
```

### Content Security Policy
```typescript
// Implement strict CSP headers
const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data: https:;
  font-src 'self' data:;
  connect-src 'self' https://*.convex.cloud;
`;
```

## Monitoring and Analytics

### Required Metrics
- Core Web Vitals
- User engagement (time on site, bounce rate)
- Conversion tracking (contact form submissions)
- Error tracking (Sentry integration)
- Real-time visitor analytics

### Implementation
```typescript
// ALWAYS track meaningful events
trackEvent('project_view', {
  projectId: project.id,
  projectTitle: project.title,
  referrer: document.referrer,
});

// NEVER track PII without consent
```

## Development Workflow

### Branch Strategy
- `main`: Production-ready code
- `develop`: Integration branch
- `feature/*`: New features
- `fix/*`: Bug fixes
- `chore/*`: Maintenance tasks

### Pull Request Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Performance improvement
- [ ] Documentation update

## Testing
- [ ] Unit tests pass
- [ ] E2E tests pass
- [ ] Lighthouse score maintained

## Screenshots (if applicable)
```

## AI Assistant Behavior

### When generating code:
1. ALWAYS follow the established patterns in this document
2. ALWAYS include proper TypeScript types
3. ALWAYS handle error states and loading states
4. ALWAYS optimize for performance
5. ALWAYS include accessibility attributes
6. NEVER use deprecated APIs or patterns
7. NEVER compromise on code quality for speed

### When reviewing code:
1. Check against performance budgets
2. Verify accessibility compliance
3. Ensure proper error handling
4. Validate TypeScript types
5. Confirm SEO best practices
6. Review security implications

### When suggesting improvements:
1. Prioritize user experience
2. Consider performance impact
3. Maintain code consistency
4. Suggest tests for new features
5. Recommend documentation updates

## Project-Specific Context

### Current Focus Areas
1. Building initial Next.js + Convex setup
2. Implementing core portfolio pages
3. Setting up CI/CD pipeline
4. Optimizing for performance
5. Creating real-time features showcase

### Known Constraints
- Limited time for initial launch (4 weeks)
- Must maintain existing domain setup
- Need to showcase full-stack capabilities
- Should demonstrate modern best practices
- Must be mobile-first responsive

### Success Criteria
- Portfolio loads in under 2 seconds
- Achieves 95+ Lighthouse score
- Showcases real-time capabilities effectively
- Provides excellent user experience
- Generates quality leads/opportunities

## Additional Notes

- This is a personal portfolio that should reflect professional excellence
- Every feature should demonstrate technical competence
- The site itself is a portfolio piece - code quality matters
- Real-time features with Convex should feel magical, not gimmicky
- Performance and UX are non-negotiable priorities

---

**Remember**: This portfolio represents Muhammad Awais's professional brand. Every line of code, every pixel, and every interaction should reflect the high standards of a senior software engineer. When in doubt, choose quality over speed, performance over features, and user experience over developer convenience.