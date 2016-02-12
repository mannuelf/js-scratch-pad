var task = new Object();

task.title = "My Title";
task.description = "My Description";
task.toString = function () {
	return this.title + ' ' + this.description;
}

console.log(task.toString());
