import { Nav, NavLink } from "@/components/Nav";
import Footer from "@/components/Footer";

export default function PortfolioLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Nav>
        <NavLink href="/">
          <span className="material-symbols-outlined nav-i">code_off</span>
        </NavLink>

        <div className="page-nav">
          <NavLink href="/projects">Projects</NavLink>

          <NavLink href="/blog">Blog</NavLink>

          {/* <NavLink href="/music">Music</NavLink> */}

          <NavLink href="/about">About</NavLink>
        </div>

        <div className="nav-menu">
          <span className="arcticons--darkmodelivewallpaper skill-i"></span>
        </div>
      </Nav>
      <div className="page-content">{children}</div>

      <Footer />
    </>
  );
}
