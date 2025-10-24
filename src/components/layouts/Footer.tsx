import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

import { Container } from './Container';
import { ROUTES } from '@/types';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/mawaisdev',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/mawaisdev',
    icon: Linkedin,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/mawaisdev',
    icon: Twitter,
  },
  {
    name: 'Email',
    href: 'mailto:hello@mawais.dev',
    icon: Mail,
  },
];

const quickLinks = [
  { name: 'Home', href: ROUTES.home },
  { name: 'About', href: ROUTES.about },
  { name: 'Projects', href: ROUTES.projects },
  { name: 'Contact', href: ROUTES.contact },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Muhammad Awais</h3>
              <p className="text-muted-foreground mb-4 max-w-md">
                Software Engineer specializing in full-stack development with modern web technologies.
                Building scalable applications and solving complex problems.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={link.name}
                  >
                    <link.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Lahore, Pakistan</p>
                <p>
                  <Link
                    href="mailto:hello@mawais.dev"
                    className="hover:text-primary transition-colors"
                  >
                    hello@mawais.dev
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Muhammad Awais. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground">
                Built with Next.js, TypeScript, and Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
