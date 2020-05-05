import React from "react";
import logo from "../icons/alien.svg";
import Accordion from "../functionality/accordion";
import { NavLink } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <div className="home-container">
      <h1 className="top-h1">Total Top 5's</h1>
      <div className="nav-container">
        <NavLink to="/movies">
          <button className="movies">Movies</button>
        </NavLink>
        <NavLink to="/music">
          <button className="music">Music</button>
        </NavLink>
        <NavLink to="/tv">
          <button className="tv">T.V. Shows</button>
        </NavLink>
        <NavLink to="/games">
          <button className="games">Video Games</button>
        </NavLink>
      </div>

      <br />

      <div className="second-nav-container">
        <NavLink to="/home">
          <button className="home">Home</button>
        </NavLink>
      </div>

      <div className="Home">
        <header className="Home-header">
          <div>
            <br />
            <h1>Welcome to the Home Page!</h1>
            <br /> <h3>Click a Category Above or Scroll Down for More Info!</h3>
          </div>
          <br />
          <br />
          <br />
          <img src={logo} className="App-logo" alt="logo" />
          <br />
          <br />
          <br />
          <h1>So What's This App All About?</h1>
          <br />
          <h3>
            Have You Ever Wondered What The Best Movies, Artists, Games, or T.V.
            Shows Were? <br /> Well You've Come to the Right Place!
          </h3>
          <Accordion
            title="Meet The Creator"
            content="
          <h3>Forrest Darabian</h3>
          <p>Is a Full-Stack Web Developer from Thousand Oaks, California. He enjoys Music, Art, and Coding awesome sites like this!</p>
    "
          />
        </header>
      </div>
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

export default Home;
