import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "../store/actions/actions";
import Accordion from "../functionality/accordion";
import logo from "../icons/alien.svg";
import "../App.css";

function Home(props) {
  const { touched, errors, logInUser, history, token } = props;

  let userName = localStorage.getItem("username");
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
      </header>
      <div className="Home">
        <br />
        <div className="text-section">
          <h1>Welcome to the Home Page{userName ? `, ${userName}` : ""}!</h1>
          <h3>
            &uarr; Click a Category above to see examples of some Top 5's!
          </h3>
          {token ? (
            <div>
              <NavLink to="/create">
                <button className="home">Make a Top 5</button>
              </NavLink>
              <NavLink to="/posted-list">
                <button className="home">Users Posts</button>
              </NavLink>
              <br />
              <button
                className="home"
                onClick={() => {
                  props.logOut();
                  props.history.push(`/login/`);
                }}
              >
                Logout
              </button>
            </div>
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
            Have you ever wanted a place where you could make your own Top 5
            Lists? Well, we've got you covered! With new Categories coming out
            weekly, you'll be able to constantly Upload, Edit, and Delete your
            Top 5 picks for any Category!
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

const mapStateToProps = (state) => {
  console.log(`THIS IS MSTP STATE IN LOGIN`, state);
  return {
    token: state.token,
    logInUser: state.logInUser,
  };
};
export default connect(mapStateToProps, { logOut: logOut })(Home);
