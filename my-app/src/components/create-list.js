import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logOut, addLists } from "../store/actions/actions";
import logo from "../icons/hammer.svg";
import "../App.css";

const Create = ({
  touched,
  errors,
  logInUser,
  history,
  token,
  addLists,
  category,
  subcategory,
  nameFive,
  descriptionFive,
  nameFour,
  descriptionFour,
  nameThree,
  descriptionThree,
  nameTwo,
  descriptionTwo,
  name,
  description,
}) => {
  if (!token) {
    history.push(`/login/`);
  }

  const [listItem, setListItem] = useState({
    category: "Movies",
    subcategory: "Action",
    nameFive: "",
    descriptionFive: "",
    nameFour: "",
    descriptionFour: "",
    nameThree: "",
    descriptionThree: "",
    nameTwo: "",
    descriptionTwo: "",
    name: "",
    description: "",
  });

  const [selectedCategory, setCategory] = useState("Movies");

  const CategoryMapping = {
    Movies: [
      "Action",
      "Drama",
      "Horror",
      "Romance",
      "Sci-Fi",
      "Animation",
      "Thriller",
    ],
    Music: ["Alternative", "Rap", "Metal", "Pop", "Classic Rock"],
    TV: ["Comedy", "Drama", "Cartoon"],
    Games: ["90's", "2000's", "2010's"],
    Animals: ["Land", "Sea", "Air"],
    Holidays: ["Holidays"],
    Consoles: ["SEGA", "Nintendo", "Playstation"],
  };

  const handleChanges = (e) => {
    if (e.currentTarget.id == "category") {
      setCategory(e.target.value);
      let currentlistItem = listItem;
      listItem.category = e.target.value;
      listItem.subcategory = CategoryMapping[e.target.value][0];

      setListItem();
    }
    setListItem({ ...listItem, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(listItem);
    addLists(listItem);
    history.push(`/posted-list`);
  };

  return (
    <div className="home-container">
      <h1 className="top-h1">Total Top 5's</h1>
      <div className="Home">
        <form id="clear-input" onSubmit={(e) => handleSubmit(e)}>
          <h1>Create a Top 5 List</h1>
          <h3>Users Will Be Able To See Your Top 5's</h3>
          <div className="form-group">
            <label>Pick a Category: </label>
            <select
              className="form-control"
              id="category"
              type="text"
              name="category"
              placeholder="Pick a Category"
              value={category}
              onChange={handleChanges}
              required
            >
              {Object.keys(CategoryMapping).map((item) => {
                return <option value={item}> {item}</option>;
              })}
            </select>
          </div>
          <br />
          <div className="form-group">
            <label>Pick a Subcategory: </label>
            <select
              className="form-control"
              id="subcategory"
              type="text"
              name="subcategory"
              placeholder="Choose a Subcategory"
              value={subcategory}
              onChange={handleChanges}
              required
            >
              {CategoryMapping[selectedCategory].map((item) => {
                return <option value={item}> {item}</option>;
              })}
            </select>
          </div>
          <br />
          <div className="form-group">
            <label>5th Pick: </label>
            <input
              className="form-control"
              id="nameFive"
              type="text"
              name="nameFive"
              maxLength={50}
              placeholder="Name"
              value={nameFive}
              onChange={(e) => handleChanges(e)}
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label>Description: </label>
            <input
              className="form-control"
              id="descriptionFive"
              type="text"
              name="descriptionFive"
              maxLength={200}
              placeholder="Description"
              value={descriptionFive}
              onChange={(e) => handleChanges(e)}
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label>4th Pick: </label>
            <input
              className="form-control"
              id="nameFour"
              type="text"
              name="nameFour"
              maxLength={50}
              placeholder="Name"
              value={nameFour}
              onChange={(e) => handleChanges(e)}
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label>Description: </label>
            <input
              className="form-control"
              id="descriptionFour"
              type="text"
              name="descriptionFour"
              maxLength={200}
              placeholder="Description"
              value={descriptionFour}
              onChange={(e) => handleChanges(e)}
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label>3rd Pick: </label>
            <input
              className="form-control"
              id="nameThree"
              type="text"
              name="nameThree"
              maxLength={50}
              placeholder="Name"
              value={nameThree}
              onChange={(e) => handleChanges(e)}
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label>Description: </label>
            <input
              className="form-control"
              id="descriptionThree"
              type="text"
              name="descriptionThree"
              maxLength={200}
              placeholder="Description"
              value={descriptionThree}
              onChange={(e) => handleChanges(e)}
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label>2nd Pick: </label>
            <input
              className="form-control"
              id="nameTwo"
              type="text"
              name="nameTwo"
              maxLength={50}
              placeholder="Name"
              value={nameTwo}
              onChange={(e) => handleChanges(e)}
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label>Description: </label>
            <input
              className="form-control"
              id="descriptionTwo"
              type="text"
              name="descriptionTwo"
              maxLength={200}
              placeholder="Description"
              value={descriptionTwo}
              onChange={(e) => handleChanges(e)}
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label>1st Pick: </label>
            <input
              className="form-control"
              id="name"
              type="text"
              name="name"
              maxLength={50}
              placeholder="Name"
              value={name}
              onChange={(e) => handleChanges(e)}
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label>Description: </label>
            <input
              className="form-control"
              id="description"
              type="text"
              name="description"
              maxLength={200}
              placeholder="Description"
              value={description}
              onChange={(e) => handleChanges(e)}
              required
            />
          </div>
          <br />
          <button type="submit" className="home">
            Submit
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
  console.log(`THIS IS MSTP FORM`, state);
  return {
    state: state,
    token: state.token,
  };
};
export default connect(mapStateToProps, { addLists })(Create);
