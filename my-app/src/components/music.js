import React from "react";
import logo from "../icons/musician.svg";
import Accordion from "../functionality/accordion";
import { NavLink } from "react-router-dom";
import "../App.css";

function Music() {
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
              <h1>Music Artist Top 5's!</h1>
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
          <br />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <br />
        <br />
        <br />
        <h1>Choose a Decade Below!</h1>

        <Accordion
          title="1980's - 1990's"
          content="
          <h3>5. Mr. Bungle</h3>
          <p>Best Albums: California, Mr. Bungle</p>
          <h3>4. Iron Maiden</h3>
          <p>Best Albums: Brave New World, Seventh Son of a Seventh Son</p>
          <h3>3. Nirvana</h3>
          <p>Best Albums: In Utero, Nevermind </p>
          <h3>2. Nine Inch Nails</h3>
          <p>Best Albums: The Downward Spiral, Broken</p>
          <h3>1. Pink Floyd</h3>
          <p>Best Albums: Animals, The Wall </p>

          "
        />
        <Accordion
          title="2000's"
          content="
          <h3>5. Eminem</h3>
          <p>Best Albums: Relapse, Recovery </p>
          <h3>4. Avenged Sevenfold</h3>
          <p>Best Albums: Nightmare, Avenged Sevenfold </p>
          <h3>3. Blink-182</h3>
          <p>Best Albums: Enema Of The State, Take Off Your Pants And Jacket </p>
          <h3>2. Brand New</h3>
          <p>Best Albums: The Devil and God Are Raging Inside Me, Deja Entendu </p>
          <h3>1. Slipknot</h3>
          <p>Best Albums: Slipknot, We Are Not Your Kind </p>

          "
        />
        <Accordion
          title="2010's"
          content="
          <h3>5. AWOLNATION</h3>
          <p>Best Albums: Megalithic Symphony, Run </p>
          <h3>4. The Neighbourhood</h3>
          <p>Best Albums: Wiped Out!, The Neighbourhood </p>
          <h3>3. The 1975</h3>
          <p>Best Albums: The 1975, I Like it When You Sleep, for You Are So Beautiful yet So Unaware of It </p>
          <h3>2. Cage The Elephant</h3>
          <p>Best Albums: Thank You, Happy Birthday, Melophobia</p>
          <h3>1. Arctic Monkeys</h3>
          <p>Best Albums: Humbug, Favourite Worst Nightmare </p>

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

export default Music;
