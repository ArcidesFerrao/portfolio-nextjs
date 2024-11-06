import db from "@/db/db";
import Image from "next/image";
// import Image from "next/image";
import Link from "next/link";

export default async function ProjectsPage() {
  const projectsData = getProjects();

  return (
    <section className="projects-page flexDisplay padd">
      <div className="projects-head">
        <h2>Projects</h2>
        <h4>{`I've worked on tons of little projects over the years but these are the ones that I'm most proud of.`}</h4>
      </div>

      <div className="projects adjustPadd">
        {(await projectsData).length === 0 ? (
          <div>0 projects found...</div>
        ) : (
          (await projectsData).map((project, index) => (
            <div className="project-container" key={index}>
              <div className="project-image">
                {/* <Image src={project.imagePath} alt={project.projectName} /> */}
                <Image
                  src={project.imagePath}
                  alt={project.projectName}
                  width={300}
                  height={300}
                />
              </div>

              <div className="project-detail">
                <Link href={`/projects/${project.id}`}>
                  <div className="project-name">
                    <h3>{project.projectName}</h3>
                  </div>
                </Link>

                <div className="project-description">
                  <p className="description-text">{project.description}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

async function getProjects() {
  const projects = await db.project.findMany({
    select: {
      id: true,
      projectName: true,
      description: true,
      imagePath: true,
    },
  });

  return projects;
}
