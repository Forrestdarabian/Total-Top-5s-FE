import React from "react";
import { Form, Input, Button } from "antd";
import { connect } from "react-redux";
import axiosWithAuth from "../utils/axiosWithAuth";

import { addUser } from "../store/actions/actions";

// import "./Register.scss";

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
    //  props.form.validateFieldsAndScroll((err, values) => {

    // if (!err) {
    //let res = await props.addUser(tempUser);
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
        // dispatch({ type: REGISTRATION_SUCCESS, payload: res.data });
        return true;
      })
      .catch((err) => {
        console.log(err);
        // dispatch({ type: REGISTRATION_FAILURE, payload: err.response });
        alert(err.response.data.message);
        return err;
      });

    //props.form.setFieldsValue({ username: "", password: "" });
    //props.history.push(`/login/`);
    // }
    // });
  };

  // const { getFieldDecorator } = props.form;

  // const formItemLayout = {
  //   labelCol: {
  //     xs: { span: 24 },
  //     sm: { span: 8 },
  //   },
  //   wrapperCol: {
  //     xs: { span: 24 },
  //     sm: { span: 16 },
  //   },
  // };

  // const tailFormItemLayout = {
  //   wrapperCol: {
  //     xs: {
  //       span: 24,
  //       offset: 0,
  //     },
  //     sm: {
  //       span: 16,
  //       offset: 8,
  //     },
  //   },
  // };

  return (
    <div className="sign-up-container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>Full name</label>
          <input type="text" className="form-control" placeholder="Full name" />
        </div>

        <div className="form-group">
          <label>User name</label>
          <input type="text" className="form-control" placeholder="User name" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Sign Up
        </button>
      </form>
    </div>
  );
};

// const WrappedRegistrationForm = Form.create({ name: "register" })(Register);

export default connect(null, { addUser: addUser })(Register);
