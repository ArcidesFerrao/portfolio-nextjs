import type { Metadata } from "next";
import { MuseoModerno } from "next/font/google";
import "material-symbols";
import "./globals.css";

const museomoderno = MuseoModerno({
  subsets: ["latin"],
  weight: "200",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Arcides Ferrao - Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${museomoderno.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
