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
  title: {
    default: "Faris Maulana Saputra | Web Developer",
    template: "%s | Faris Maulana Saputra",
  },
  description:
    "Portfolio of Faris Maulana Saputra, a Web Developer focused on building practical web applications with React, Next.js, Node.js, and PostgreSQL.",
  keywords: [
    "Web Developer",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Portfolio",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
