import React from "react";

const MovieForm = ({ match, history }) => {
	return (
		<div>
			<h1 className="h1">Movie Form {match.params.id}</h1>
			<button
				className="btn btn-secondary"
				onClick={() => history.push("/movies")}
			>
				Back
			</button>
		</div>
	);
};

export default MovieForm;
