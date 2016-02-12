var task = {
	title: "My Titke",
	description: "My Description"
};

task.toString = function () {
	return this.title + ' ' + this.description;
}

console.log(task.toString());
