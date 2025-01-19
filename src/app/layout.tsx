import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff", // Adjust this to match your app's theme color
};

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"), // Replace with your actual domain
  title: {
    default: "Age Journey - Birthday & Age Calculator",
    template: "%s | Age Journey"
  },
  description: "Calculate and track ages with our simple birthday calculator. Save multiple birthdays, view age statistics, and get instant calculations. Perfect for family, friends, and personal use.",
  keywords: ["age calculator", "birthday tracker", "age tracking", "birthday calculator", "PWA", "age statistics"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  publisher: "Your Name",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    title: "Age Journey - Birthday & Age Calculator",
    description: "Calculate and track ages with our simple birthday calculator. Save multiple birthdays and get instant calculations.",
    siteName: "Age Journey",
    images: [
      {
        url: "/og-image.png", // Create this 1200x630 image
        width: 1200,
        height: 630,
        alt: "Age Journey Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Age Journey - Birthday & Age Calculator",
    description: "Calculate and track ages with our simple birthday calculator",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://your-domain.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/icons/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content="Age Journey" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Age Journey" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}