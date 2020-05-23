import React from "react";
import logo from "../icons/computer.svg";
import "../App.css";
import { NavLink } from "react-router-dom";

function Startup() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="top-h1">Total Top 5's</h1>
        <br />
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <br />
          <p>
            Hello! <br /> Welcome to Total Top 5's!
          </p>
          <NavLink to="/home">
            <button className="home">Enter Site</button>
          </NavLink>
        </div>
      </header>
      <footer className="footer pt-80 pt-xs-60">
        <div className="footer-container">
          <h1>Total Top 5's</h1>
          <div className="copyright">
            <p>
              © 2020
              <a>
                <b> Forrest Darabian </b>
              </a>
              All Rights Reserved.
            </p>
          </div>
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
          <div className="left">
            <h4 className="something">Contact / Links</h4>
            <li>
              {" "}
              <a href="mailto:forrestdarabian@gmail.com">
                <i className="ion-ios-email fa-icons"></i>
                Contact Me
              </a>
            </li>
            <li>
              <a href="https://www.forrestdarabian.com/">
                <i className="fa-angle-double-right"></i>Developers Site
              </a>
            </li>
          </div>
        </div>
      </footer>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Startup;
