import React from "react";

export default function Welcome() {
  return (
    <div className="well gridAuto">
      <div className="greet">
        <h1>Hi there!</h1>
        <h1>I am John Doe</h1>
        <h4>A passionate Frontend Web Developer</h4>
        <h4>
          when it comes to learning, building software and delivering an
          intuitive web experience.{" "}
        </h4>
      </div>
      <div className="front-img hideOnMobile">
        {/* <img src="../assets/dialog-axiata.png" alt="" /> */}
      </div>
    </div>
  );
}
