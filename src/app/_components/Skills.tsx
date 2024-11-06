export default function Skills() {
  return (
    <div className="skills-container">
      <div className="skill">
        <span className="material-symbols-outlined skill-i">html</span>
      </div>
      <div className="skill">
        <span className="material-symbols-outlined skill-i jscript">
          javascript
        </span>
      </div>
      <div className="skill">
        <span className="material-symbols-outlined skill-i cascade">css</span>
      </div>
      <div className="skill">
        <span className="uil--react skill-i">react</span>
      </div>
      <div className="skill">
        {/* <span className="simple-icons--sanity skill-i">sanity</span> */}
        <span className="file-icons--nextjs skill-i"></span>
      </div>
      <div className="skill">
        {/* <span className="simple-icons--sanity skill-i">sanity</span> */}
        <span className="lineicons--prisma skill-i"></span>
      </div>
    </div>
  );
}
