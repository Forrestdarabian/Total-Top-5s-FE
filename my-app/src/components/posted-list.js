import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../icons/moon.svg";
import "../App.css";
import Card from "./card-view";

import { logOut, fetchList } from "../store/actions/actions";

// const { Meta } = div;

const PostedList = (props) => {
  const { touched, errors, logInUser, history, token } = props;

  if (!token) {
    props.history.push(`/login/`);
  }
  useEffect(() => {
    props.fetchList();
  }, []);

  const handleDelete = (e) => {
    e.preventDefault();
    const id = props.item.id;
    props.deleteList(id);
  };

  return (
    <div className="home-container">
      <h1 className="top-h1">Total Top 5's</h1>
      <div className="Home">
        <NavLink to="/home">
          <button className="home">Home</button>
        </NavLink>
        <div>
          <br />
          <div className="text-section">
            <h1>Users Posts</h1>
            <h3>
              Below Are User Submitted Posts. If you Recently Made A Post <br />{" "}
              You Will Find It At The Bottom
            </h3>
          </div>
        </div>{" "}
        <div
          actions={[
            <button
              className="icon-delete"
              type="delete"
              key="delete"
              onClick={handleDelete}
            />,
            <NavLink
              className="icon-edit"
              // to={`/dashboard/edit-items/${props.item.id}`}
            >
              <button type="edit" key="edit" />
            </NavLink>,
          ]}
        >
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
              return <Card item={item} />;
            })}
          </div>
          {/* <div
            category={props.itemData.category}
            subcategory={props.itemData.subcategory}
            name={props.itemData.name}
            description={props.itemData.description}
          /> */}
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
    itemData: state.itemData,
    error: state.error,
    token: state.token,
  };
};
export default connect(mapStateToProps, { fetchList })(PostedList);
