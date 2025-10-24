import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/layouts/Container';
import { ROUTES } from '@/types';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-primary">404</h1>
            <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
            <p className="text-xl text-muted-foreground mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href={ROUTES.home}>
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" onClick={() => window.history.back()}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
