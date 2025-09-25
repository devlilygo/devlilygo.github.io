import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import type { Metadata } from "next";
import CustomCursor from "@/components/v3/atoms/CustomCursor";

export const metadata: Metadata = {
  title: "Lily Go | Frontend Developer",
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
        <CustomCursor />
      </body>
    </html>
  );
}
