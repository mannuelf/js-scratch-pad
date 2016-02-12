var task = Object.create(Object.prototype);

task.title = "My Task";
task.description = "My Description";
task.toString = function () {
	return this.title + ' ' + this.description;
};

console.log(task.toString());
