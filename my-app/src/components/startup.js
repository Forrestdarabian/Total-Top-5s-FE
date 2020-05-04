import React from "react";
import logo from "../icons/computer.svg";
import "../App.css";

function Startup() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <br />
          <p>
            Hello! <br /> Come take a look at some of my favorite things!
          </p>
          <a href="./home">Let's go!</a>
        </div>
      </header>
      <div>
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/smalllikeart"
          title="smalllikeart"
        >
          smalllikeart
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </div>
  );
}

export default Startup;
