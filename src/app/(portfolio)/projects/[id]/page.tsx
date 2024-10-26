import db from "@/db/db";
import { notFound } from "next/navigation";
import React from "react";

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const project = await db.project.findUnique({ where: { id } });

  if (project == null) return notFound();

  return (
    <div className="page-container adjustSize">
      <div className="head-project">
        <h2>{project?.projectName}</h2>
        <div className="url-container">{/* <a href={}>Explore</a> */}</div>
      </div>

      <div className="image-project">
        <img src={project?.imagePath} alt="" />
      </div>

      <div className="overview-project sec">
        <div className="over-title">
          <h3 className="pr-page-title">Overview</h3>
        </div>

        <div className="over-block">
          <p>{project?.description}</p>
        </div>
      </div>

      <div className="tec-project sec">
        <div className="technology-title">
          <h3 className="pr-page-title">Technologies</h3>
        </div>
        <div className="technology-list">{project?.tech}</div>
      </div>
    </div>
  );
}
