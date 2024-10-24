import type { Metadata } from "next";
import "material-symbols";
import "./globals.css";
import localFont from "next/font/local";

const myFont = localFont({ src: "../assets/Museomoderno.ttf" });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Arcides Ferrao - Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
