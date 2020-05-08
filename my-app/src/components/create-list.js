import React from "react";
import logo from "../icons/hammer.svg";
import Accordion from "../functionality/accordion";
import { NavLink } from "react-router-dom";
import "../App.css";
import { connect } from "react-redux";

import { logOut } from "../store/actions/actions";

const Create = (props) => {
  const { touched, errors, logInUser, history, token } = props;
  if (!token) {
    props.history.push(`/login/`);
  }

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
            <h1>Create a Top 5</h1>
            <br />{" "}
            <h3>
              If You Would Like To Create Your Own Top 5's, Please Make An
              Account With Us! <br />
              (Don't Worry, It's Free and We Won't Spam Your Inbox!)
            </h3>
          </div>
          <br />
          <br />
          <br />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <br />
        <br />
        <br />
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
            <h1>Create An Account or Login Here!</h1>
            <NavLink to="/register">
              <button className="home">Create An Account</button>
            </NavLink>
            <NavLink to="/login">
              <button className="home">Login</button>
            </NavLink>
          </>
        )}
        <div>
          <br />
          <br />
          <br />
          <NavLink to="/home">
            <button className="home">Home</button>
          </NavLink>
        </div>
      </div>
      <footer className="footer pt-80 pt-xs-60">
        <div className="container">
          <h1>Total Top 5's</h1>

          <h4 className="mb-30">Contact / Links</h4>
          <li>
            {" "}
            <a href="mailto:forrestdarabian@gmail.com">
              <i className="ion-ios-email fa-icons"></i>
              forrestdarabian@gmail.com
            </a>{" "}
          </li>
          <li>
            <a href="forrestdarabian.com">
              <i className="fa fa-angle-double-right"></i>Developers Site
            </a>
          </li>
        </div>{" "}
        <div className="copyright">
          <div className="container">
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
};

const mapStateToProps = (state) => {
  console.log(`THIS IS MSTP STATE IN LOGIN`, state);
  return {
    token: state.token,
  };
};
export default connect(mapStateToProps, { logOut: logOut })(Create);
