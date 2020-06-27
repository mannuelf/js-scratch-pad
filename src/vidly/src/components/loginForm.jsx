import React, { Fragment, Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
	state = {
		account: {
			username: "",
			password: ""
		},
		errors: {}
	};

	username = React.createRef();

	componentDidMount() {
		//	this.username.current.focus();
	}

	handleChange = ({ currentTarget: input }) => {
		const account = { ...this.state.account };
		account[input.name] = input.value;
		this.setState({ account });
	};

	validate = () => {
		const errors = {};

		const { account } = this.state;
		if (account.username.trim() === "")
			errors.username = "username is required";
		if (account.password.trim() === "")
			errors.password = "Password is required";

		return Object.keys(errors).length === 0 ? null : errors;
	};

	handleSubmit = e => {
		e.preventDefault();
		const errors = this.validate();
		console.log(errors);
		this.setState({ errors });
		if (errors) return;
		console.log("submitted");
	};

	render() {
		const { account } = this.state;
		return (
			<Fragment>
				<h1 className="h1">Login</h1>
				<form onSubmit={this.handleSubmit}>
					<Input
						name="username"
						value={account.username}
						label="Username"
						onChange={this.handleChange}
					/>
					<Input
						name="password"
						value={account.password}
						label="Password"
						onChange={this.handleChange}
					/>

					<button type="submit" className="btn btn-primary">
						Login
					</button>
				</form>
			</Fragment>
		);
	}
}
export default LoginForm;
