import type { Metadata } from 'next';
import '../styles/globals.css';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="h-screen min-h-screen flex flex-col">
          {/* Header */}
          <Header />

          {/* Content Area */}
          <main className="flex-grow w-full p-4">{children}</main>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
