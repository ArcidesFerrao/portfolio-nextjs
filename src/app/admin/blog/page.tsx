import db from "@/db/db";
import Link from "next/link";
import React from "react";

export default function AdminPostsPage() {
  return (
    <section className="admin-projects">
      <div className="page-title">
        <h2>Posts</h2>
      </div>
      <Link href="/admin/blog/new" className="add-post">
        Add Post
      </Link>
      <PostsTable />
    </section>
  );
}

async function PostsTable() {
  const posts = await db.post.findMany({
    select: {
      id: true,
      title: true,
      createdAt: true,
    },
  });

  if (posts.length === 0) return <div>No posts available</div>;

  return (
    <table className="products-table">
      <thead>
        <tr>
          <th>Posts</th>
          <th>Created At</th>
          <th>
            <span className="sr-only">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td>{post.title}</td>
            <td>{post.createdAt.toDateString()}</td>
            <td>
              {/* <Menu
                id={product.id}
                isAvailable={product.isAvailable}
                disabled={product._count.orders > 0}
              /> */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
