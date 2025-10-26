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
import { VisitsChart } from './VisitsChart';
import { ContactSubmissions } from './ContactSubmissions';
import { AdvancedAnalytics } from './AdvancedAnalytics';
import { Visitors } from '@/components/features/analytics/VisitorCounter';

export function AdminDashboard() {
  const totalVisitors = useQuery(api.visitors.getTotalVisitors);
  const uniqueVisitors = useQuery(api.visitors.getUniqueVisitors);
  const recentVisitors = useQuery(api.visitors.getRecentVisitors);
  const unreadSubmissions = useQuery(api.contact.getUnreadSubmissions);

  return (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Visitors
            </CardTitle>
          </CardHeader>
          <CardContent>
            {totalVisitors === undefined ? (
              <Skeleton className="h-8 w-24" />
            ) : (
              <div className="text-2xl font-bold">
                {totalVisitors.toLocaleString()}
              </div>
            )}
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Unique Visitors
            </CardTitle>
          </CardHeader>
          <CardContent>
            {uniqueVisitors === undefined ? (
              <Skeleton className="h-8 w-24" />
            ) : (
              <div className="text-2xl font-bold">
                {uniqueVisitors.toLocaleString()}
              </div>
            )}
            <p className="text-xs text-muted-foreground">Based on IP</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Recent Visitors
            </CardTitle>
          </CardHeader>
          <CardContent>
            {recentVisitors === undefined ? (
              <Skeleton className="h-8 w-24" />
            ) : (
              <div className="text-2xl font-bold">
                {recentVisitors.toLocaleString()}
              </div>
            )}
            <p className="text-xs text-muted-foreground">Last 24 hours</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Unread Messages
            </CardTitle>
          </CardHeader>
          <CardContent>
            {unreadSubmissions === undefined ? (
              <Skeleton className="h-8 w-24" />
            ) : (
              <div className="text-2xl font-bold">
                {unreadSubmissions.length}
              </div>
            )}
            <p className="text-xs text-muted-foreground">Contact submissions</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts and Data */}
      <div className="grid gap-4 md:grid-cols-2">
        <VisitsChart />
        <Card>
          <CardHeader>
            <CardTitle>Popular Projects</CardTitle>
            <CardDescription>Most viewed projects</CardDescription>
          </CardHeader>
          <CardContent>
            <PopularProjects />
          </CardContent>
        </Card>
      </div>

      {/* Advanced Analytics */}
      <AdvancedAnalytics />

      {/* Contact Submissions */}
      <ContactSubmissions />
    </div>
  );
}

function PopularProjects() {
  const popularProjects = useQuery(api.projectViews.getPopularProjects, {
    limit: 5,
  });

  if (popularProjects === undefined) {
    return (
      <div className="space-y-2">
        {[1, 2, 3].map(i => (
          <Skeleton key={i} className="h-12 w-full" />
        ))}
      </div>
    );
  }

  if (popularProjects.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">No project views yet</p>
    );
  }

  return (
    <div className="space-y-2">
      {popularProjects.map((project, index) => (
        <div
          key={project.slug}
          className="flex items-center justify-between p-3 rounded-lg border"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
              {index + 1}
            </div>
            <div>
              <p className="font-medium">{project.slug}</p>
            </div>
          </div>
          <div className="text-sm font-semibold">{project.views}</div>
        </div>
      ))}
    </div>
  );
}
