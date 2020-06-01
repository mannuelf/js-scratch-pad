import React from 'react';

const NavBar = ({totalCounters}) => {
		console.log("navbar")
		return (
			<nav className="navbar navbar-light bg-light">
				<a
					className="navbar-brand" href="#">
					Navbar {" "}
					 <span className="badge badge-pill badge-secondary">
						{totalCounters}
					</span>
				</a>
			</nav>
		)
}

export default NavBar;
