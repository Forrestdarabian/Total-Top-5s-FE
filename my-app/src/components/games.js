import React from "react";
import { NavLink } from "react-router-dom";
import Accordion from "../functionality/accordion";
import logo from "../icons/joystick.svg";
import "../App.css";

function Games() {
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
            <div className="text-section">
              <h1>Video Game Top 5's!</h1>
              <h3>
                Interested in Making Your Own Top 5's? Click{" "}
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
        <h1>Choose a Video Game Decade Below!</h1>

        <Accordion
          title="2000's"
          content="
          <h3>5. Dead By Daylight</h3>
          <p>Recommended DLC's: The Halloween Chapter, The Saw Chapter</p>
          <h3>4. Batman Arkham Series</h3>
          <p>Recommended Games: Batman Arkham Asylum, Batman Arkham City</p>
          <h3>3. The Sims Series</h3>
          <p>Recommended Games: The Sims 4, The Sims 1</p>
          <h3>2. Bioshock Series</h3>
          <p>Recommended Games: Bioshock Infinite, Bioshock 1</p>
          <h3>1. Kingdom Hearts Series</h3>
          <p>Recommended Games: Kingdom Hearts 1, Kingdom Hearts 2</p>

          "
        />
      </div>
      <br />
      <br />
      <footer class="footer pt-80 pt-xs-60">
        <div class="footer-container">
          <h1>Total Top 5's</h1>
          <div class="copyright">
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
          <div class="left">
            <h4 class="something">Contact / Links</h4>
            <li>
              {" "}
              <a href="mailto:forrestdarabian@gmail.com">
                <i class="ion-ios-email fa-icons"></i>
                Contact Me
              </a>{" "}
            </li>
            <li>
              <a href="https://www.forrestdarabian.com/">
                <i class="fa-angle-double-right"></i>Developers Site
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

export default Games;
