import ProjectReadme from "@/app/_components/ProjectReadMe";
import db from "@/db/db";
import { notFound } from "next/navigation";
import React from "react";

type id = Promise<{ id: string }>;

export default async function ProjectPage(props: { params: id }) {
  const { id } = await props.params;
  const project = await db.project.findUnique({ where: { id } });

  if (project == null) return notFound();

  const response = await fetch(project.projectLink, {
    headers: { Accept: "application/vnd.github.ve+json" },
  });

  const readmeData = await response.json();
  const readmeContent = Buffer.from(readmeData.content, "base64").toString(
    "utf-8"
  );

  return (
    <div className="project-page adjustSize">
      <ProjectReadme content={readmeContent} />
    </div>
  );
}
