
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
				return movies;
			})
			.catch((error) => {
				alert(error);
			});
	}

	const moduleB = () => {
		console.log("module b says hi");
	}

	const moduleC = () => {
		console.log("module c says hi");
	}

	return {
		getTvShows: getTvShows, // public methods exposed to the outside world
		moduleB: moduleB,
		moduleC: moduleC
	}
})();
