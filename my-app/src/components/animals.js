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
              <h1>Animal Top 5's!</h1>
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
        <h1>Choose an Animal Type Below!</h1>
        <Accordion
          title="Sea"
          content="
          <h3>5. Killer Whales</h3>
          <p>They're cool, thats all.<p>
          <h3>4. Dolphins</h3>
          <p>Such intelligent gentle creatures!<p>
          <h3>3. Jellyfish</h3>
          <p>Always wanted a pet jellyfish as a kid...<p>
          <h3>2. Octopus</h3>
          <p>8 Tentacles? Awesome...Just awesome.<p>
          <h3>1. Sharks</h3>
          <p>Gotta love sharks...<p>

          "
        />
        <Accordion
          title="Land"
          content="
          <h3>5. Cats</h3>
          <p>Fun to pet and cuddle with.<p>
          <h3>4. Panthers</h3>
          <p>NOT fun to pet or cuddle with.<p>
          <h3>3. Ostriches</h3>
          <p>They look like dinosaur birds.<p>
          <h3>2. Dogs</h3>
          <p>Loyal and loving.<p>
          <h3>1. Wolves</h3>
          <p>Just an overall awesome animal.<p>

          "
        />
        <Accordion
          title="Air"
          content="
          <h3>5. Blue Jays</h3>
          <p>Seeing them in my garden is always fun!<p>
          <h3>4. Mockingbirds</h3>
          <p>I love their colors!<p>
          <h3>3. Hawks</h3>
          <p>Not as cool as falcons...<p>
          <h3>2. Falcons</h3>
          <p>Not as cool as vultures...<p>
          <h3>1. Vultures</h3>
          <p>They eat dead things...Nice.<p>
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

export default Animals;
