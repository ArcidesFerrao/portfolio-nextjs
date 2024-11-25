/* eslint-disable react/no-unescaped-entities */
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
    <div className="about-page flexDisplay padd">
      <div className="personal-info">
        <div className="personal-intro">
          <h2 className="introduction">
            {`I'm ${authorData.name}, born and raised in Mozambique...`}
          </h2>
        </div>
        <div className="personal-details">
          <p>
            a passionate frontend developer. My journey in technology has been
            driven by a deep love for creativity and problem-solving. With a
            focus on crafting visually stunning and user-friendly web
            applications.
          </p>
        </div>
        <div className="personal-comment">
          <p>
            <q>
              I believe in the transformative power of technology to solve
              real-world problems. Through my portfolio, I invite you to explore
              the intersection of my technical and creative pursuits. Let's
              connect and build something impactful together!
            </q>
          </p>
        </div>
      </div>

      <div className="personal-image">
        <div className="personal-portrait">
          <img
            alt="Arcides Ferrao"
            src={authorData.image}
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
        <section>
          <h4>Tech Stack</h4>

          <ul>
            <li>
              <strong>Languages:</strong> HTML5, CSS3, JavaScript (ES6+)
            </li>
            <li>
              <strong>Frontend Frameworks:</strong> React 18+, Next.js
            </li>
            <li>
              <strong>Backend & APIs:</strong> Next.js API Routes, Node.js
            </li>
            <li>
              <strong>Database:</strong> PostgreSQL (hosted on Neon Console),
              Prisma ORM
            </li>
            <li>
              <strong>Authentication:</strong> NextAuth.js (Google and GitHub
              providers)
            </li>
            <li>
              <strong>Styling:</strong> Tailwind CSS
            </li>
            <li>
              <strong>DevOps & Hosting:</strong> Vercel, GitHub Actions
            </li>
            <li>
              <strong>Developer Tools:</strong> ESLint, Prettier, Figma
            </li>
          </ul>
        </section>
        <section>
          <h4>Soft Skills</h4>
          <ul>
            <li>
              <strong>Responsive Design</strong>: Delivering user-friendly
              experiences across mobile, tablet, and desktop devices.
            </li>
            <li>
              <strong>User Authentication</strong>: Implementing OAuth-based
              secure login flows.
            </li>
            <li>
              <strong>Database Management</strong>: Schema modeling and
              efficient queries using Prisma.
            </li>
            <li>
              <strong>Problem Solving</strong>: Efficient debugging and
              optimization of applications.
            </li>
            <li>
              <strong>Collaboration</strong>: Teamwork through Git version
              control and code reviews.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
