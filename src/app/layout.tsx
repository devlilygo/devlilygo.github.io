import type { Metadata } from 'next';
import '../styles/globals.css';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import SnowfallWrapper from '@/components/organisms/SnowfallWrapper';
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
          <div className="h-screen min-h-screen flex flex-col">
            {/* Header */}
            <Header />

            {/* Content Area */}
            <main className="flex-grow w-full p-4">
              <SnowfallWrapper /> {/* 클라이언트 컴포넌트로 눈 효과 추가 */}
              {children}
            </main>

            {/* Footer */}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
