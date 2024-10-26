import React from "react";
import db from "@/db/db";
// import Image from "next/image";

async function getAuthorData() {
  const author = await db.author.findFirst({
    select: {
      id: true,
      name: true,
      email: true,
      imagePath: true,
      resumeLink: true,
    },
  });

  return {
    name: author?.name,
    email: author?.email,
    image: author?.imagePath,
    resumeLink: author?.resumeLink,
  };
}

export default async function AboutPage() {
  const authorData = await getAuthorData();

  return (
    <div className="about-page flexDisplay">
      <div className="personal-info">
        <div className="personal-intro">
          <h2 className="introduction">
            {`I'm ${authorData.name}, born and raised in Mozambique...`}
          </h2>
        </div>
        <div className="personal-details"></div>
        <div className="personal-comment"></div>
      </div>

      <div className="personal-image">
        <div className="personal-portrait">
          <img
            src={authorData.image}
            alt="Arcides Ferrao"
            width={300}
            height={300}
          />
        </div>
        <div className="personal-resume">
          <a
            className="res-button cont"
            href={authorData.resumeLink}
            target="_blank"
          >
            View Résumé
          </a>
          <div className="download-res">
            <button className="dowload btn cont">
              <span className="oui--download"></span>
            </button>
          </div>
        </div>
        <div className="personal-email">
          <span className="fluent--mail-16-regular"></span>
          <h4 className="gmail-personal">{authorData.email}</h4>
        </div>
      </div>

      <div className="personal-skills">
        <div className="title-skills">
          <h3 className="pr-page-title">Soft Skills</h3>
        </div>
        <div className="skills-block">
          <p></p>
        </div>
      </div>

      <div className="personal-setup">
        <h3 className="pr-page-title">Setup</h3>

        <div className="block-setup"></div>
        <div className="setup-img"></div>
      </div>

      <div className="personal-tech">
        <div className="title-tech">
          <h3 className="pr-page-title">Technologies</h3>
        </div>
      </div>
    </div>
  );
}
