import { Mail, MapPin, Phone, Clock, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@mawais.dev',
    href: 'mailto:hello@mawais.dev',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Lahore, Pakistan',
    href: null,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+92 300 123 4567',
    href: 'tel:+923001234567',
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Within 24 hours',
    href: null,
  },
];

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/mawaisdev',
    icon: Github,
    description: 'Check out my code and projects',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/mawaisdev',
    icon: Linkedin,
    description: 'Connect with me professionally',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/mawaisdev',
    icon: Twitter,
    description: 'Follow me for updates',
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
          <CardDescription>
            Reach out to me through any of these channels
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {contactInfo.map((info) => (
            <div key={info.label} className="flex items-center gap-3">
              <info.icon className="h-5 w-5 text-primary" />
              <div>
                <div className="font-medium">{info.label}</div>
                {info.href ? (
                  <Link
                    href={info.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {info.value}
                  </Link>
                ) : (
                  <div className="text-muted-foreground">{info.value}</div>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Social Links */}
      <Card>
        <CardHeader>
          <CardTitle>Follow Me</CardTitle>
          <CardDescription>
            Connect with me on social media
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {socialLinks.map((social) => (
            <div key={social.name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <social.icon className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">{social.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {social.description}
                  </div>
                </div>
              </div>
              <Button asChild variant="outline" size="sm">
                <Link href={social.href} target="_blank" rel="noopener noreferrer">
                  Visit
                </Link>
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Availability */}
      <Card>
        <CardHeader>
          <CardTitle>Availability</CardTitle>
          <CardDescription>
            Current status and availability
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-medium">Available for new projects</span>
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>• Open to full-time opportunities</p>
            <p>• Available for freelance projects</p>
            <p>• Interested in collaboration</p>
            <p>• Happy to discuss ideas</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
