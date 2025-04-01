import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ISO Gap Assessment",
  description: "ISO Gap Assessment Tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased relative min-h-screen`}>
        {children}
        <div className="fixed bottom-4 left-4 z-50">
          <img src="/logo.jpg" alt="Company Logo" className="h-12 w-auto" />
        </div>
      </body>
    </html>
  );
}
