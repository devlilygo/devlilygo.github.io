import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lily's Lab",
  description: "Frontend Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
