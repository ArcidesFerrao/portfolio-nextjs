import db from "@/db/db";
import Link from "next/link";
import React from "react";

export default function AdminProjectsPage() {
  return (
    <section className="admin-projects">
      <div className="page-title">
        <h2>Projects</h2>
      </div>
      <Link href="/admin/projects/new" className="add-project">
        Add Project
      </Link>
      <ProjectsTable />
    </section>
  );
}

async function ProjectsTable() {
  const projects = await db.project.findMany({
    select: {
      id: true,
      projectName: true,
    },
  });

  if (projects.length === 0) return <div>Not found...</div>;

  return (
    <table className="projects-table">
      <thead>
        <tr>
          <th>Projects</th>
          <th>
            <span className="sr-only">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project) => (
          <tr key={project.id}>
            <td>{project.projectName}</td>
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
