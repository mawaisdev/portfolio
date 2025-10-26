'use client';

import { useQuery } from 'convex/react';
import { api } from 'convex/_generated/api';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { TrendingUp, TrendingDown, Eye, Clock } from 'lucide-react';

export function AdvancedAnalytics() {
  const totalVisitors = useQuery(api.visitors.getTotalVisitors);
  const uniqueVisitors = useQuery(api.visitors.getUniqueVisitors);
  const recentVisitors = useQuery(api.visitors.getRecentVisitors);
  const popularPosts = useQuery(api.blog.getPopularPosts, { limit: 5 });

  // Calculate growth rate (mock data for now)
  const growthRate =
    recentVisitors && totalVisitors
      ? ((recentVisitors / totalVisitors) * 100).toFixed(1)
      : '0';

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {/* Growth Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>Growth Metrics</CardTitle>
          <CardDescription>Visitor growth over time</CardDescription>
        </CardHeader>
        <CardContent>
          {totalVisitors === undefined || uniqueVisitors === undefined ? (
            <Skeleton className="h-32 w-full" />
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium">Growth Rate</span>
                </div>
                <span className="text-lg font-bold text-green-500">
                  {growthRate}%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-blue-500" />
                  <span className="text-sm font-medium">Conversion Rate</span>
                </div>
                <span className="text-lg font-bold text-blue-500">
                  {uniqueVisitors && totalVisitors
                    ? ((uniqueVisitors / totalVisitors) * 100).toFixed(1)
                    : '0'}
                  %
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-purple-500" />
                  <span className="text-sm font-medium">Avg. Visit Time</span>
                </div>
                <span className="text-lg font-bold text-purple-500">2:34</span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Top Performing Content */}
      <Card>
        <CardHeader>
          <CardTitle>Top Performing Content</CardTitle>
          <CardDescription>Most engaging blog posts</CardDescription>
        </CardHeader>
        <CardContent>
          {popularPosts === undefined ? (
            <div className="space-y-2">
              {[1, 2, 3].map(i => (
                <Skeleton key={i} className="h-12 w-full" />
              ))}
            </div>
          ) : popularPosts.length === 0 ? (
            <p className="text-sm text-muted-foreground">No blog posts yet</p>
          ) : (
            <div className="space-y-3">
              {popularPosts.map((post, index) => (
                <div
                  key={post._id}
                  className="flex items-center justify-between p-2 rounded-lg border"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-sm line-clamp-1">
                        {post.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {post.views} views • {post.likes} likes
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
