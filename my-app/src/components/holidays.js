import React from "react";
import { NavLink } from "react-router-dom";
import Accordion from "../functionality/accordion";
import logo from "../icons/easter.svg";
import "../App.css";

function Holidays() {
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
        <NavLink to="/animals">
          <button className="games">Animals</button>
        </NavLink>
        <NavLink to="/game-consoles">
          <button className="games">Game Consoles</button>
        </NavLink>
        <NavLink to="/holidays">
          <button className="games">Holidays</button>
        </NavLink>
        <NavLink to="/zombies-maps">
          <button className="zombies">Zombies Maps</button>
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
            <div className="text-section">
              <h1>Holiday Top 5's!</h1>
              <h3>
                Interested in making your own Top 5's? Click{" "}
                <a href="./create">Here!</a>
              </h3>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <br />
        <br />
        <br />
        <h1>Choose a Holiday Below!</h1>
        <Accordion
          title="Holidays"
          content="
          <h3>5. Valentines Day</h3>
          <h3>4. Thanksgiving</h3>
          <h3>3. Easter</h3>
          <h3>2. Christmas</h3>
          <h3>1. Halloween</h3>
          "
        />
      </div>
      <br />
      <br />
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
              </a>{" "}
            </li>
            <li>
              <a href="https://www.forrestdarabian.com/">
                <i className="fa-angle-double-right"></i>Developers Site
              </a>
            </li>
          </div>
        </div>
      </footer>{" "}
      <br />
      <br />
      <br />
    </div>
  );
}

export default Holidays;
