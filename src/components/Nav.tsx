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
      {...props}
      className={`nav-link ${currentPath === props.href ? "active" : ""}`}
    />
  );
}
