import React from "react";

export default function Welcome() {
  return (
    <div className="well flexDisplay padd">
      <div className="greet">
        <h1>Hi there!</h1>
        <h1>I am Arcides Henriques Ferrão</h1>
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
