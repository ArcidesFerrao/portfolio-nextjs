// import scRelogio1 from "../../assets/Sc-1.png";
// import scRelogio2 from "../../assets/Sc-2.png";
// import scCard from "../../assets/Sc-card.png";
import Image from "next/image";
import Link from "next/link";
import db from "@/db/db";

export default function Projects() {
  return (
    <div className="projects-container padd">
      <div className="title-projects">
        <Link href="/projects">
          <h2>Projects</h2>
        </Link>
      </div>
      <div className="project flexDisplay">
        {/* <div className="pr1 project-box">
          <div className="pr-title">
            <span className="material-symbols-outlined pr-i">
              farsight_digital
            </span>
            <a href="https://arcidesferrao.github.io/clock-timer/">
              <h3>Digital Clock</h3>
            </a>
          </div>
          <div className="pr-screen">
            <div className="pr-block"></div>
            <div className="pr-img clock">
              <Image
                src={scRelogio2}
                alt="relogio digital"
                className="sc hover"
              />
              <Image
                src={scRelogio1}
                alt="relogio digital"
                className="sc main"
              />
            </div>
          </div>
        </div>

        <div className="pr2 project-box">
          <div className="pr-title">
            <span className="material-symbols-outlined pr-i">id_card</span>

            <a href="https://arcidesferrao.github.io/business-card/">
              <h3>Business Card</h3>
            </a>
          </div>
          <div className="pr-screen">
            <div className="pr-block"></div>
            <div className="pr-img card">
              <Image src={scCard} alt="business card" className="sc hover" />
              <Image src={scCard} alt="business card" className="sc main" />
            </div>
          </div>
        </div>
        <div className="pr3 project-box">
          <div className="pr-title">
            <span className="material-symbols-outlined pr-i">assignment</span>

            <a href="https://arcidesferrao.github.io/application/">
              <h3>CV Application</h3>
            </a>
          </div>
          <div className="pr-screen">
            <div className="pr-block"></div>
            <div className="pr-img application"></div>
          </div>
        </div>
        <div className="pr4 project-box">
          <div className="pr-title">
            <span className="material-symbols-outlined pr-i">assignment</span>

            <a href="https://arcidesferrao.github.io/resume/">
              <h3>Resume</h3>
            </a>
          </div>
          <div className="pr-screen">
            <div className="pr-block"></div>
            <div className="pr-img resume"></div>
          </div>
        </div> */}
        <ProjectList />
      </div>
    </div>
  );
}

async function ProjectList() {
  const projectsData = getProjects();

  if ((await projectsData).length === 0)
    return <div className="project-box">0 projects available...</div>;

  return (
    <>
      {projectsData &&
        (await projectsData).map((project, id) => (
          <div className="project-box" key={id}>
            <div className="pr-title">
              <span className="material-symbols-outlined pr-i">assignment</span>

              <a href={`/projects/${project.id}`}>
                <h3>{project.projectName}</h3>
              </a>
            </div>
            <div className="pr-screen">
              <div className="pr-block"></div>
              <div className="pr-img clock">
                <Image
                  src={project.imagePath}
                  alt={project.projectName}
                  className="sc hover"
                  width={300}
                  height={300}
                />
                <Image
                  src={project.imagePath}
                  alt={project.projectName}
                  width={300}
                  height={300}
                  className="sc main"
                />
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

async function getProjects() {
  const projects = await db.project.findMany({
    select: {
      id: true,
      projectName: true,
      imagePath: true,
      description: true,
      projectLink: true,
    },
    orderBy: { projectName: "desc" },
  });

  return projects;
}
