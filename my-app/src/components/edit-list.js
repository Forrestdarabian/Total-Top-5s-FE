import React, { useEffect, useState } from "react";
import axiosWitAuth from "../utils/axiosWithAuth";
import { connect } from "react-redux";
import { updateList } from "../store/actions/actions";
import { NavLink } from "react-router-dom";
import logo from "../icons/hammer.svg";

const EditList = (props) => {
  let cardData = props.location.state ? props.location.state.carddata : null;

  if (!cardData) {
    props.history.push("posted-list");
  }

  let initialState = {
    category: cardData.category,
    subcategory: cardData.subcategory,
    nameFive: cardData.nameFive,
    descriptionFive: cardData.descriptionFive,
    nameFour: cardData.nameFour,
    descriptionFour: cardData.descriptionFour,
    nameThree: cardData.nameThree,
    descriptionThree: cardData.descriptionThree,
    nameTwo: cardData.nameTwo,
    descriptionTwo: cardData.descriptionTwo,
    name: cardData.name,
    description: cardData.description,
  };

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

  const [selectedCategory, setCategory] = useState(cardData.category);
  const [editing, setEditing] = useState(initialState);
  console.log(editing);

  const handleChanges = (e) => {
    if (e.currentTarget.id == "category") {
      setCategory(e.target.value);
      let currentlistItem = editing;
      editing.category = e.target.value;
      editing.subcategory = CategoryMapping[e.target.value][0];

      setEditing();
    }
    setEditing({ ...editing, [e.target.name]: e.target.value });
  };

  const saveEdit = (e) => {
    e.preventDefault();

    // const id = props.itemData.id;
    props.updateList(editing, cardData.id);
    props.history.push(`/posted-list`);
  };

  return (
    <div className="home-container">
      <h1 className="top-h1">Total Top 5's</h1>
      <div className="Home">
        <form id="clear-input">
          <h1>Edit a Top 5 List</h1>
          <h3>
            If you made a mistake or simply want to edit your list, you've come
            to the right place!
          </h3>
          <div className="form-group">
            <label>Pick a Category: </label>
            <select
              className="form-control"
              id="category"
              type="text"
              name="category"
              placeholder="Pick a Category"
              value={editing.category}
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
              value={editing.subcategory}
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
              value={editing.nameFive}
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
              value={editing.descriptionFive}
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
              value={editing.nameFour}
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
              value={editing.descriptionFour}
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
              value={editing.nameThree}
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
              value={editing.descriptionThree}
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
              value={editing.nameTwo}
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
              value={editing.descriptionTwo}
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
              value={editing.name}
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
              value={editing.description}
              onChange={(e) => handleChanges(e)}
              required
            />
          </div>
          <br />
          <button type="primary" onClick={(e) => saveEdit(e)} className="home">
            Update List
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
  return {
    itemData: state.itemData,
    username: state.username,
    changed: state.changed,
  };
};
export default connect(mapStateToProps, { updateList })(EditList);
