import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { MenuProvider } from "@/contexts/MenuContext";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '64x64',
      url: '/64.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/16.png',
    }
  ],
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body >
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <MenuProvider>
        <main className="min-h-screen flex flex-col items-center">
        <Header />
          {children}
          <Footer />
        </main>
        </MenuProvider>
        <Toaster />
        </ThemeProvider>
      </body>
    </html>
    // </ClerkProvider>
  );
}
