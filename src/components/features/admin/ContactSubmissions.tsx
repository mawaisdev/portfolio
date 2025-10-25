'use client';

import { useQuery, useMutation } from 'convex/react';
import { api } from '../../../convex/_generated/api';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Mail, Check, Clock } from 'lucide-react';
import { formatRelativeTime } from '@/lib/utils';

export function ContactSubmissions() {
  const submissions = useQuery(api.contact.getContactSubmissions);
  const markAsRead = useMutation(api.contact.markAsRead);

  const handleMarkAsRead = async (id: string) => {
    await markAsRead({ id: id as any });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Submissions</CardTitle>
        <CardDescription>Manage messages from the contact form</CardDescription>
      </CardHeader>
      <CardContent>
        {submissions === undefined ? (
          <div className="space-y-3">
            {[1, 2, 3].map(i => (
              <Skeleton key={i} className="h-24 w-full" />
            ))}
          </div>
        ) : submissions.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <Mail className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No contact submissions yet</p>
          </div>
        ) : (
          <div className="space-y-4">
            {submissions.map(submission => (
              <div
                key={submission._id}
                className="p-4 border rounded-lg space-y-3"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold">{submission.name}</h4>
                      {submission.read ? (
                        <Badge variant="secondary" className="gap-1">
                          <Check className="h-3 w-3" />
                          Read
                        </Badge>
                      ) : (
                        <Badge variant="default" className="gap-1">
                          <Clock className="h-3 w-3" />
                          New
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {submission.email}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {formatRelativeTime(new Date(submission.timestamp))}
                    </p>
                  </div>
                  {!submission.read && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleMarkAsRead(submission._id)}
                    >
                      Mark as read
                    </Button>
                  )}
                </div>
                <div className="pt-2 border-t">
                  <p className="text-sm whitespace-pre-wrap">
                    {submission.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
