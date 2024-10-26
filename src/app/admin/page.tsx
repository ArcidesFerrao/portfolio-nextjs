import Link from "next/link";
import React from "react";
import AuthorForm from "./_components/AuthorForm";

export default function AdminPage() {
  return (
    <>
      <div className="admin-home">
        <Link href="/admin/blog">
          <h3>Create New Blog Post</h3>
        </Link>
        <Link href="/admin/projects/new">
          <h3>New Project</h3>
        </Link>
      </div>

      <AuthorForm />
    </>
  );
}
