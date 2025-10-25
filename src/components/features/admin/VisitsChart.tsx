'use client';

import { useQuery } from 'convex/react';
import { api } from '../../../convex/_generated/api';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function VisitsChart() {
  const recentVisitors = useQuery(api.visitors.getRecentVisitors);
  const totalVisitors = useQuery(api.visitors.getTotalVisitors);

  // Simple bar chart visualization
  const chartData = [
    { label: 'Today', value: recentVisitors ?? 0 },
    { label: 'Total', value: totalVisitors ?? 0 },
  ];

  const maxValue = Math.max(...chartData.map(d => d.value), 1);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Visitor Trends</CardTitle>
        <CardDescription>Overview of visitor statistics</CardDescription>
      </CardHeader>
      <CardContent>
        {recentVisitors === undefined || totalVisitors === undefined ? (
          <Skeleton className="h-64 w-full" />
        ) : (
          <div className="space-y-4">
            {chartData.map((data, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{data.label}</span>
                  <span className="text-muted-foreground">
                    {data.value.toLocaleString()}
                  </span>
                </div>
                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-500"
                    style={{ width: `${(data.value / maxValue) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
