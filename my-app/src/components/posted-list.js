import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../icons/moon.svg";
import loading from "../icons/giphy.gif";

import "../App.css";
import Card from "./card-view";

import { logOut, fetchList, deleteList } from "../store/actions/actions";

const PostedList = (props) => {
  const { touched, errors, logInUser, history, token } = props;

  if (!token) {
    props.history.push(`/login/`);
  }
  useEffect(() => {
    props.fetchList();
  }, []);

  const handleDelete = (id) => {
    //e.preventDefault();
    console.log("deleted" + id);
    //const id = props.item.id;

    props.deleteList(id);
  };

  return (
    <div className="home-container">
      <h1 className="top-h1">Total Top 5's</h1>
      <div className="Home">
        <div className="nav-container">
          <NavLink to="/create">
            <button className="home">Make a Top 5</button>
          </NavLink>
          <br />
        </div>
        <br />
        <NavLink to="/home">
          <button className="home">Home</button>
        </NavLink>
        <div>
          <br />
          <div className="text-section">
            <h1>Users Posts</h1>
            <h3>
              Below are user submitted posts. If you recently made a post <br />{" "}
              you will find it at the bottom.
            </h3>
          </div>
        </div>
        <br />
        <div>
          {/* <button
            className="icon-delete"
            type="delete"
            key="delete"
            onClick={(e) => handleDelete(e)}
          />
          <NavLink
            className="icon-edit"
            to={`/dashboard/edit-items/`}
            // ${props.item.id}
          >
            <button type="edit" key="edit" />
          </NavLink> */}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              alignContent: "center",
              flexDirection: "column",
              width: "100%",
            }}
          >
            {/* <p>
              {props.itemData.length > 0
                ? props.itemData[0].description
                : "not working"}
            </p> */}
            {props.itemData.map((item) => {
              return (
                <Card
                  item={item}
                  handleDelete={handleDelete}
                  history={history}
                />
              );
            })}
          </div>
          {/* <div
            category={props.itemData.category}
            subcategory={props.itemData.subcategory}
            name={props.itemData.name}
            description={props.itemData.description}
          /> */}
        </div>
        <img src={loading} width="50px" id="hideMe" alt="loading" />

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

const mapStateToProps = (state) => {
  console.log(`THIS IS MSTP STATE IN LOGIN`, state);
  return {
    itemData: state.itemData,
    error: state.error,
    token: state.token,
  };
};
export default connect(mapStateToProps, { fetchList, deleteList })(PostedList);
