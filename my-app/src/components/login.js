import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Button, Label } from "reactstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Form, Field, withFormik } from "formik";
import { logInUser } from "../../src/store/actions/actions";
import logo from "../icons/space.svg";
import "../App.css";

const UserLogin = ({ touched, errors, logInUser, history, token }) => {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  useEffect(() => {
    if (token) {
      history.push("/create");
    }
  }, [token]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.username && user.password) {
      logInUser(user);
    }
  };

  return (
    <div className="sign-up-container">
      <h1 className="top-h1">Total Top 5's</h1>
      <div className="form-group">
        <Form className="login-form" onChange={handleChange}>
          <h1>Login</h1>
          <h3>
            Don't Have An Account? Click
            <a href="/register"> Here</a> To Register!
          </h3>
          <Label for="username">Username: </Label>
          <Field
            className="form-control"
            type="text"
            name="username"
            placeholder=" Enter your Username"
            autoComplete="username"
          ></Field>
          {touched.username && errors.username && (
            <p className="error">{errors.username}</p>
          )}{" "}
          <br /> <br />
          <Label for="password">Password: </Label>
          <Field
            className="form-control"
            type="password"
            name="password"
            placeholder=" Enter your Password"
            autoComplete="current-password"
          ></Field>
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}
          <br /> <br />
          <Button
            className="submit"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Sign In
          </Button>
          <br />
          <br />
        </Form>
      </div>
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
      <br />
      <img src={logo} className="App-logo" alt="logo" />
      <br />
      <br />
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

const LoginWithFormik = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || "",
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Please enter a username!"),
    password: Yup.string().required("Please enter a password!"),
  }),
})(UserLogin);

const mapStateToProps = (state) => {
  console.log(`THIS IS MSTP STATE IN LOGIN`, state);
  return {
    token: state.token,
  };
};
export default connect(mapStateToProps, { logInUser: logInUser })(
  LoginWithFormik
);
