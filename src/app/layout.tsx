import type { Metadata } from "next";
import "material-symbols";
import "./globals.css";
import localFont from "next/font/local";

const myFont = localFont({ src: "../assets/MuseoModerno.ttf" });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Arcides Ferrao - Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/assets/icon.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
