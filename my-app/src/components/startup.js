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
            Hello! <br /> Welcome to Total Top 5's!
          </p>
          <a href="./home">Let's go!</a>
        </div>
      </header>
      <footer class="footer pt-80 pt-xs-60">
        <div class="container">
          <h1>Total Top 5's</h1>

          <h4 class="mb-30">Contact / Links</h4>
          <li>
            {" "}
            <a href="mailto:forrestdarabian@gmail.com">
              <i class="ion-ios-email fa-icons"></i>
              forrestdarabian@gmail.com
            </a>{" "}
          </li>
          <li>
            <a href="forrestdarabian.com">
              <i class="fa fa-angle-double-right"></i>Developers Site
            </a>
          </li>
        </div>{" "}
        <div class="copyright">
          <div class="container">
            <p>
              © 2020
              <a>
                <b> Forrest Darabian </b>
              </a>
              All Rights Reserved.
            </p>
          </div>
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
      </footer>
    </div>
  );
}

export default Startup;
