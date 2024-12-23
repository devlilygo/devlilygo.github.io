import type { Metadata } from 'next';
import '../styles/globals.css';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import { ThemeProvider } from '@/components/context/ThemeContext';
export const metadata: Metadata = {
  title: 'Lily Go - Frontend Developer ',
  description: 'Thank you for visiting :)',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {/* Header */}
          <Header />

          {/* Content Area */}
          <main>{children}</main>

          {/* Footer */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
