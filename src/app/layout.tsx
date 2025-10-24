import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: {
    default: 'Muhammad Awais - Software Engineer',
    template: '%s | Muhammad Awais',
  },
  description: 'Software Engineer specializing in full-stack development with Next.js, React, and modern web technologies. Based in Lahore, Pakistan.',
  keywords: [
    'Muhammad Awais',
    'Software Engineer',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript',
    'Lahore Pakistan',
    'Portfolio',
  ],
  authors: [{ name: 'Muhammad Awais' }],
  creator: 'Muhammad Awais',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mawais.dev',
    siteName: 'Muhammad Awais Portfolio',
    title: 'Muhammad Awais - Software Engineer',
    description: 'Software Engineer specializing in full-stack development with Next.js, React, and modern web technologies.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Muhammad Awais - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Awais - Software Engineer',
    description: 'Software Engineer specializing in full-stack development with Next.js, React, and modern web technologies.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a href="#main" className="skip-link">
            Skip to main content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
