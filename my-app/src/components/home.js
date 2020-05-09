import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "../store/actions/actions";
import Accordion from "../functionality/accordion";
import logo from "../icons/alien.svg";
import "../App.css";

function Home(props) {
  const { touched, errors, logInUser, history, token } = props;
  return (
    <div className="home-container">
      <header className="Home-header">
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
      </header>
      <div className="Home">
        <br />
        <div className="text-section">
          <h1>Welcome to the Home Page!</h1>
          <h3>
            &uarr; Click a Category Above To See Examples of Some Top 5's!
          </h3>
          {token ? (
            <button
              className="home"
              onClick={() => {
                props.logOut();
                props.history.push(`/login/`);
              }}
            >
              Logout
            </button>
          ) : (
            <>
              {" "}
              <h3>&darr; Or Signup Now to Create Your Own! &darr;</h3>
              <NavLink to="/register">
                <button className="home">Create an Account</button>
              </NavLink>
              <NavLink to="/login">
                <button className="home">Login</button>
              </NavLink>
              <br />
            </>
          )}
        </div>
        <br />
        <br />
        <br />
        <br />
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="text-section">
          <h1>So What's This App All About?</h1>
          <p className="about">
            Have You Ever Wanted a Place Where You Can Make Your Own Top 5
            Lists? Well, We've Got You Covered! With New Categories Coming out
            Weekly, You Can Constantly Upload, Edit, and Delete Your Top 5 Picks
            for Any Category!
          </p>
        </div>
        <br />{" "}
        <Accordion
          title="Meet The Creator"
          content="
          <h3>Forrest Darabian</h3>
          <p>Is a Full-Stack Web Developer From Thousand Oaks, California. He Enjoys Music, Art, and Coding Awesome Sites Like This!</p>
    "
        />
        <br />
        <br />
      </div>
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

const mapStateToProps = (state) => {
  console.log(`THIS IS MSTP STATE IN LOGIN`, state);
  return {
    token: state.token,
  };
};
export default connect(mapStateToProps, { logOut: logOut })(Home);
