
const app = (() => {
	"use strict"
	console.log("hello world");

	const getTvShows = (apiURL) => {
		fetch(apiURL)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const movies = data;
				console.log(movies);
				return movies;
			})
			.catch((error) => {
				alert(error);
			});
	}

	const moduleB = (someString) => {
		console.log("module b says", someString);
	}

	const moduleC = (someString) => {
		console.log("module c says", someString);
	}

	return {
		getTvShows: getTvShows, // public methods exposed to the outside world
		moduleB: moduleB,
		moduleC: moduleC
	}
})();
