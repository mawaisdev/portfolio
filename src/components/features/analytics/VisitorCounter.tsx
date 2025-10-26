'use client';

import { useQuery } from 'convex/react';
import { api } from 'convex/_generated/api';
import { Skeleton } from '@/components/ui/skeleton';

export function VisitorCounter() {
  const totalVisitors = useQuery(api.visitors.getTotalVisitors);
  const uniqueVisitors = useQuery(api.visitors.getUniqueVisitors);

  if (totalVisitors === undefined || uniqueVisitors === undefined) {
    return (
      <div className="flex items-center gap-2">
        <Skeleton className="h-4 w-16" />
        <span className="text-muted-foreground">visitors</span>
      </div>
    );
  }

  return (
    <div className="text-sm text-muted-foreground">
      <span className="font-semibold text-foreground">
        {totalVisitors.toLocaleString()}
      </span>{' '}
      total •{' '}
      <span className="font-semibold text-foreground">
        {uniqueVisitors.toLocaleString()}
      </span>{' '}
      unique visitors
    </div>
  );
}
