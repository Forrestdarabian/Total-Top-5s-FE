import React from "react";
import { NavLink } from "react-router-dom";
import Accordion from "../functionality/accordion";
import logo from "../icons/ps4.svg";
import "../App.css";

function Consoles() {
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
        <NavLink to="/foods">
          <button className="Foods">Foods</button>
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
              <h1>Game Console Top 5's!</h1>
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
          <br />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>Choose a Brand Below!</h1>
        <Accordion
          title="Nintendo"
          content="
          <h3>5. Wii</h3>
          <p>This console was revolutionary when it was first introduced.<p>
          <h3>4. SNES</h3>
          <p>This console has so many classic games!<p>
          <h3>3. Switch</h3>
          <p>Theres nothing like getting together with your friends for a fun game of Mariokart!<p>
          <h3>2. Gamecube</h3>
          <p>My first console I've ever owned.<p>
          <h3>1. Nintendo 64</h3>
          <p>Everyone knows these were the good ol' days!<p>


          "
        />
        <Accordion
          title="Playstation"
          content="
          <h3>5. PSP</h3>
          <p>Way ahead of it's time<p>
          <h3>4. Playstation 1</h3>
          <p>Definitely outdated, but it introduced so many great platformers that are still relevant today!<p>
          <h3>3. PS3</h3>
          <p>So many great games on this console!<p>
          <h3>2. PS4</h3>
          <p>Those graphics though...<p>
          <h3>1. Playstation 2</h3>
          <p>The best-selling console of all time!<p>
          "
        />
        <Accordion
          title="Sega"
          content="
          <h3>5. Game Gear</h3>
          <p>You gotta have this one on the list...<p>
          <h3>4. Master System</h3>
          <p>Good ol' classic Sega!<p>
          <h3>3. Saturn</h3>
          <p>Definitely a slept on console.<p>
          <h3>2. Genesis</h3>
          <p>90's all the way!<p>
          <h3>1. Dreamcast</h3>
          <p>The aesthetics of this console are insane!<p>
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

export default Consoles;
