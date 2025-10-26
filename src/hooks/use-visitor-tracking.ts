'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useMutation } from 'convex/react';
import { api } from 'convex/_generated/api';

export function useVisitorTracking() {
  const pathname = usePathname();
  const trackVisitor = useMutation(api.visitors.trackVisitor);

  useEffect(() => {
    const trackVisit = async () => {
      try {
        // Get visitor information
        const userAgent = navigator.userAgent;
        const referrer = document.referrer || undefined;

        // Get IP address (simplified - for production, use a service like ipify)
        // For now, we'll use a placeholder
        const ip = 'unknown'; // In production, fetch from an IP service

        await trackVisitor({
          ip,
          userAgent,
          path: pathname,
          referrer,
        });
      } catch (error) {
        // Silently fail - don't interrupt user experience
        console.error('Failed to track visitor:', error);
      }
    };

    trackVisit();
  }, [pathname, trackVisitor]);
}
