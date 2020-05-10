import React from "react";
import { NavLink } from "react-router-dom";
import Accordion from "../functionality/accordion";
import logo from "../icons/cow.svg";
import "../App.css";

function Animals() {
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
              <h1>Animal Top 5's!</h1>
              <h3>
                Interested in Making Your Own Top 5's? Click{" "}
                <a href="./create">Here!</a>
              </h3>
            </div>
          </div>
          <br />
          <br />
          <br />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <br />
        <br />
        <br />
        <h1>Choose an Animal Type Below!</h1>
        <Accordion
          title="Sea"
          content="
          <h3>5. Killer Whales</h3>
          <h3>4. Dolphins</h3>
          <h3>3. Jellyfish</h3>
          <h3>2. Octopus</h3>
          <h3>1. Sharks</h3>

          "
        />
        <Accordion
          title="Land"
          content="
          <h3>5. Cats</h3>
          <h3>4. Panthers</h3>
          <h3>3. Ostriches</h3>
          <h3>2. Dogs</h3>
          <h3>1. Wolves</h3>

          "
        />
        <Accordion
          title="Air"
          content="
          <h3>5. Blue Jays</h3>
          <h3>4. Mockingbirds</h3>
          <h3>3. Hawks</h3>
          <h3>2. Falcons</h3>
          <h3>1. Vultures</h3>
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

export default Animals;
