import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../icons/halloween.svg";
import axiosWithAuth from "../utils/axiosWithAuth";
import { addUser } from "../store/actions/actions";

const Register = (props) => {
  console.log(props);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let user = {
      fullName: e.target[0].value,
      username: e.target[1].value,
      password: e.target[2].value,
      email: e.target[3].value,
    };

    await axiosWithAuth()
      .post(`api/users/register`, {
        fullName: user.fullName,
        username: user.username,
        password: user.password,
        email: user.email,
      })
      .then((res) => {
        console.log(res.data);
        props.history.push(`/login/`);
        return true;
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.message);
        return err;
      });
  };

  return (
    <div className="sign-up-container">
      <h1 className="top-h1">Total Top 5's</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>Sign Up</h1>
        <h3>
          Already Have An Account? Click
          <a href="/login"> Here</a> To Sign In!
        </h3>
        <div className="form-group">
          <label>Full name: </label>
          <input
            type="text"
            className="form-control"
            placeholder=" Full name"
          />
        </div>
        <br />
        <div className="form-group">
          <label>Username: </label>
          <input
            autocapitalize="off"
            type="text"
            className="form-control"
            placeholder=" Username"
          />
        </div>
        <br />

        <div className="form-group">
          <label>Password: </label>
          <input
            type="password"
            className="form-control"
            placeholder=" Enter password"
          />
        </div>
        <br />

        <div className="form-group">
          <label>Email Address: </label>
          <input
            type="email"
            className="form-control"
            placeholder=" Enter email"
          />
        </div>
        <br />

        <button type="submit" className="btn btn-primary btn-block">
          Sign Up
        </button>
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
      <img src={logo} className="App-logo" alt="logo" />
      <br />
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
};

export default connect(null, { addUser: addUser })(Register);
