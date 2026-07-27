import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Quinn Agas | Junior Full-Stack Developer",
  description:
    "Portfolio of Quinn Agas, a Junior Full-Stack Developer focused on database-driven web and mobile applications.",
  keywords: [
    "Quinn Agas",
    "Junior Full-Stack Developer",
    "React Developer",
    "Django Developer",
    "PostgreSQL",
    "Portfolio",
    "Makati Developer",
  ],
  authors: [{ name: "Quinn Agas" }],
  creator: "Quinn Agas",
  openGraph: {
    title: "Quinn Agas | Junior Full-Stack Developer",
    description: "Database-driven web applications, backend systems, and clean user interfaces.",
    url: "https://portfolio-quintuckyy.vercel.app/",
    siteName: "Quinn Agas Portfolio",
    type: "website",
  },
};
  

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
