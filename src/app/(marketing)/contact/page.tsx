import { Header } from '@/components/layouts/Header';
import { Footer } from '@/components/layouts/Footer';
import { ContactHero } from '@/components/features/contact/ContactHero';
import { ContactForm } from '@/components/features/contact/ContactForm';
import { ContactInfo } from '@/components/features/contact/ContactInfo';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Muhammad Awais for collaboration opportunities, project discussions, or just to say hello.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main" className="flex-1">
        <ContactHero />
        <div className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
