import React, { Fragment, Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import Input from "./common/input";

class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: ""
    },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = () => {
    // call server
    console.log("submitted");
  };

  render() {
    const { data } = this.state;
    return (
      <Fragment>
        <h1 className="h1">Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            type="text"
            value={data.username}
            label="Username"
            onChange={this.handleChange}
          />
          <Input
            name="password"
            type="password"
            value={data.password}
            label="Password"
            onChange={this.handleChange}
          />
          <button
            disabled={this.validate(this.validate())}
            type="submit"
            className="btn btn-primary"
          >
            Login
          </button>
        </form>
      </Fragment>
    );
  }
}
export default LoginForm;
