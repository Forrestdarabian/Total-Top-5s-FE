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
      <div className="Home">
        <form>
          <h1>Create a Top 5 List</h1>
          <h3>Users Will Be Able To See Your Top 5's</h3>
          <div className="form-group">
            <label>Pick a Category: </label>
            <select id="category" name="category">
              <option value="Movies">Movies</option>
              {/* <option value="Music">Music</option>
              <option value="T.V. Shows">T.V. Shows</option>
              <option value="Video Games">Video Games</option> */}
            </select>
          </div>
          <br />
          <div className="form-group">
            <label>Pick a Genre / Decade: </label>
            <select id="genre" name="genre">
              <option value="Movies">Action</option>
              <option value="Movies">Drama</option>
              <option value="Movies">Horror</option>
              {/* <option value="Music">1980's - 1990's</option>
              <option value="Music">2000's</option>
              <option value="Music">2010's</option>
              <option value="T.V. Shows">Drama</option>
              <option value="T.V. Shows">Comedy</option>
              <option value="Video Games">2000's</option> */}
            </select>
          </div>
          <br />
          <div className="form-group">
            <label>5th Pick: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Movie Name"
            />
          </div>
          <br />
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Movie Description"
            />
          </div>
          <br />
          <div className="form-group">
            <label>4th Pick: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Movie Name"
            />
          </div>
          <br />
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Movie Description"
            />
          </div>
          <br />
          <div className="form-group">
            <label>3rd Pick: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Movie Name"
            />
          </div>
          <br />
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Movie Description"
            />
          </div>
          <br />
          <div className="form-group">
            <label>2nd Pick: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Movie Name"
            />
          </div>
          <br />
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Movie Description"
            />
          </div>
          <br />
          <div className="form-group">
            <label>1st Pick: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Movie Name"
            />
          </div>
          <br />
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Movie Description"
            />
          </div>
          <br />
          <NavLink to="/posted-list">
            <button className="home">Submit</button>
          </NavLink>{" "}
          <br />
          <br />
        </form>
        <br />
        <div className="second-nav-container">
          <NavLink to="/home">
            <button className="home">Home</button>
          </NavLink>
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
};

const mapStateToProps = (state) => {
  console.log(`THIS IS MSTP STATE IN LOGIN`, state);
  return {
    token: state.token,
  };
};
export default connect(mapStateToProps, { logOut: logOut })(Create);
