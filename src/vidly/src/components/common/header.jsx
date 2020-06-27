import React from "react";
import { NavLink } from "react-router-dom";

const Header = props => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<NavLink to="/" className="navbar-brand">
				Vidly
			</NavLink>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<NavLink to="/" className="nav-link">
							Home <span className="sr-only">(current)</span>
						</NavLink>
					</li>

					<li className="nav-item">
						<NavLink to="/rentals" className="nav-link">
							Rentals
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/customers" className="nav-link">
							Customers
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/login" className="nav-link">
							Login
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Header;
