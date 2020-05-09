import React from "react";
import { NavLink } from "react-router-dom";
import Accordion from "../functionality/accordion";
import logo from "../icons/skull.svg";
import "../App.css";

function Zombies() {
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
              <h1>Call Of Duty Zombies Maps Top 5's!</h1>
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
        <h1>Choose a Game Below!</h1>
        <Accordion
          title="World At War"
          content="
          <h3>5. N/A</h3>
          <p></p>
          <h3>4. Shi No Numa</h3>
          <p>Pros: Introduced the PPSH, Dog Rounds, and Wunderwaffe DG-2, Great Atmosphere</p>
          <p>Cons: No Pack-A-Punch, Map Layout is Very Basic</p>
          <h3>3. Veruckt</h3>
          <p>Pros: One of the Scariest Maps, Introduced Perk Machines and Traps</p>
          <p>Cons: Map Layout is Tedious, No Pack-A-Punch or Dog Rounds</p>
          <h3>2. Nacht Der Untoten</h3>
          <p>Pros: Most Classic Zombies Experience, Paved the Road For Every Amazing Map Ahead</p>
          <p>Cons: Only 3 Rooms, Gets Boring After Camping Forever</p>
          <h3>1. Der Riese</h3>
          <p>Pros: Very Innovative Map, Introduced Pack-A-Punch, Great Camping Spots</p>
          "
        />
        <Accordion
          title="Black Ops 1"
          content="
          <h3>5. N/A</h3>
          <p></p>
          <h3>4. Five</h3>
          <p>Pros: Introduced the PPSH, Dog Rounds, and Wunderwaffe DG-2, Great Atmosphere</p>
          <p>Cons: No Pack-A-Punch, Map Layout is Very Basic</p>
          <h3>3. Shangri-La</h3>
          <p>Pros: Most Visually-Stunning Map, Best Wonder Weapon (Baby Gun)</p>
          <p>Cons: Map Layout is Very Tedious, Need Communication For Pack-A-Punch</p>
          <h3>2. Ascension</h3>
          <p>Pros: Very Well-Structured Map, Great Camping Spots</p>
          <p>Cons: Monkey Rounds Can Be Hard With Lack Of Communication, Gets Boring After Camping Forever</p>
          <h3>1. Call Of The Dead</h3>
          <p>Pros: Very Nostalgic Experience, Best Easter-Egg Song, Keeps You On Your Feet</p>
          "
        />
        <Accordion
          title="Black Ops 2"
          content="
          <h3>5. Halloween (2007)</h3>
          <p>Pros: </p>
          <p>Cons: </p>
          "
        />
        <Accordion
          title="Black Ops 3"
          content="
          <h3>5. Halloween (2007)</h3>
          <p>Pros: </p>
          <p>Cons: </p>
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

export default Zombies;
