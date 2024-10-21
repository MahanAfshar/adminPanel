import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

export const metadata: Metadata = {
  title: "Droplinked",
  description: "Droplinked task",
};

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700']
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} max-w-screen-2xl mx-auto bg-blackOne text-white scrollbar`}
      >
        {children}
      </body>
    </html>
  );
}
