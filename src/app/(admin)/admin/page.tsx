import { Metadata } from 'next';
import { Container } from '@/components/layouts/Container';
import { Header } from '@/components/layouts/Header';
import { Footer } from '@/components/layouts/Footer';
import { AdminDashboard } from '@/components/features/admin/AdminDashboard';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Portfolio analytics and contact management',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return (
    <>
      <Header />
      <main id="main" className="min-h-screen py-16">
        <Container>
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">
              View analytics and manage contact submissions
            </p>
          </div>
          <AdminDashboard />
        </Container>
      </main>
      <Footer />
    </>
  );
}
