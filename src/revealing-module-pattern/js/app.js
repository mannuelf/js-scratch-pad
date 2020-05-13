
const app = (() => {
	"use strict"
	console.log("hello world");

	const apiURL = "https://api.tvmaze.com/shows?page=1";

	const moduleA = () => {
		fetch(apiURL)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const movies = data;
				console.log(movies);
			})
			.catch((error) => {
				console.log(error);
			});
		console.log("getting movies");
	}

	const moduleB = () => {
		console.log("module b says hi");
	}

	const moduleC = () => {
		console.log("module c says hi");
	}

	return {
		moduleA: moduleA,
		moduleB: moduleB,
		moduleC: moduleC
	}
})();
