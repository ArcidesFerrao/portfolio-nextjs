import type { Metadata } from "next";
import { MuseoModerno } from "next/font/google";
import "material-symbols";
import "./globals.css";
import { Nav, NavLink } from "@/components/Nav";
import Footer from "@/components/Footer";

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
        <Nav>
          <NavLink href="/">
            <span className="material-symbols-outlined nav-i">code_off</span>
          </NavLink>

          <section className="page-nav">
            <NavLink href="/projects">Projects</NavLink>

            <NavLink href="/blog">Blog</NavLink>

            <NavLink href="/about">About</NavLink>
          </section>

          <section className="nav-menu">
            <span className="gg--dark-mode"></span>
          </section>
        </Nav>
        <section className="page-content">{children}</section>

        <Footer />
      </body>
    </html>
  );
}
