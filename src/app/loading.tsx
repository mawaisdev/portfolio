import { Skeleton } from '@/components/ui/skeleton';
import { Container } from '@/components/layouts/Container';

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Skeleton */}
      <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <Container>
          <div className="flex items-center justify-between py-4">
            <Skeleton className="h-6 w-48" />
            <div className="hidden md:flex items-center space-x-8">
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-8 w-8 rounded" />
            </div>
            <div className="flex items-center space-x-2 md:hidden">
              <Skeleton className="h-8 w-8 rounded" />
              <Skeleton className="h-8 w-8 rounded" />
            </div>
          </div>
        </Container>
      </div>

      {/* Main Content Skeleton */}
      <main className="flex-1">
        <div className="py-20">
          <Container>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Skeleton className="h-16 w-96 mx-auto" />
              <Skeleton className="h-6 w-80 mx-auto" />
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Skeleton className="h-12 w-32" />
                <Skeleton className="h-12 w-32" />
              </div>
            </div>
          </Container>
        </div>

        {/* Projects Grid Skeleton */}
        <div className="py-20 bg-muted/30">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Skeleton className="h-12 w-64 mx-auto mb-4" />
                <Skeleton className="h-6 w-96 mx-auto" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="rounded-lg border bg-card">
                    <Skeleton className="h-48 w-full rounded-t-lg" />
                    <div className="p-6 space-y-4">
                      <Skeleton className="h-6 w-3/4" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-2/3" />
                      <div className="flex flex-wrap gap-2">
                        <Skeleton className="h-6 w-16" />
                        <Skeleton className="h-6 w-20" />
                        <Skeleton className="h-6 w-14" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </main>

      {/* Footer Skeleton */}
      <footer className="border-t bg-background">
        <Container>
          <div className="py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2 space-y-4">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <div className="flex space-x-4">
                  <Skeleton className="h-5 w-5" />
                  <Skeleton className="h-5 w-5" />
                  <Skeleton className="h-5 w-5" />
                  <Skeleton className="h-5 w-5" />
                </div>
              </div>
              <div className="space-y-4">
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-18" />
                <Skeleton className="h-4 w-14" />
              </div>
              <div className="space-y-4">
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-40" />
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
