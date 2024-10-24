import { Nav, NavLink } from "@/components/Nav";
import "./admin.css";

export const dynamic = "force-dynamic";

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Nav>
        <NavLink href="/admin">Admin</NavLink>

        <div className="page-nav">
          <NavLink href="/admin/blog">Blog</NavLink>

          <NavLink href="/admin/projects">Projects</NavLink>
        </div>

        <div className="nav-menu">
          <span className="gg--dark-mode"></span>
        </div>
      </Nav>
      <div className="page-content">{children}</div>
    </>
  );
}
