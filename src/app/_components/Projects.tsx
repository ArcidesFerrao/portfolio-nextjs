import React from "react";
import scRelogio1 from "../../assets/Sc-1.png";
import scRelogio2 from "../../assets/Sc-2.png";
import scCard from "../../assets/Sc-card.png";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="projects-container">
      <div className="title-projects">
        <Link href="/projects">
          <h2>Projects</h2>
        </Link>
      </div>
      <div className="project flexDisplay">
        <div className="pr1 project-box">
          <div className="pr-title">
            <span className="material-symbols-outlined pr-i">
              farsight_digital
            </span>
            <a href="https://arcidesferrao.github.io/relogio-digital/">
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
        </div>
      </div>
    </div>
  );
}
