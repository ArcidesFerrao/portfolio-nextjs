import React from "react";

export default function Footer() {
  return (
    <div className="footer-container padd">
      <div className="built-container">
        <h4>Built with:</h4>

        <div className="small-skill">
          <span className="skill-icons--nextjs-light"></span>

          <h4>Next</h4>
        </div>

        <div className="small-skill">
          <span className="vscode-icons--file-type-prisma"></span>
          <h4>Prisma</h4>
        </div>
      </div>
      <div className="copy-container">
        <p className="coyrights">
          Copyright © Arcides Ferrao 2024 All rights Reserved
        </p>
      </div>
    </div>
  );
}
