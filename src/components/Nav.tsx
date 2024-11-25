"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export function Nav({ children }: { children: ReactNode }) {
  return <nav className="nav-bar">{children}</nav>;
}

export function NavLink({ ...props }) {
  const currentPath = usePathname();
  // console.log({ ...props });

  return (
    <Link
      href={props.href}
      className={`nav-link ${currentPath === props.href ? "active" : ""}`}
    >
      {props.children}
    </Link>
  );
}

export function NavButton() {
  // const [menu, setMenu] = useState(false);

  return (
    <div className="nav-button">
      <button>
        <span className="line-md--close-to-menu-transition"></span>
      </button>

      <ul>
        <li>
          <NavLink href="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink href="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink href="/about">About</NavLink>
        </li>
      </ul>
    </div>
  );
}
