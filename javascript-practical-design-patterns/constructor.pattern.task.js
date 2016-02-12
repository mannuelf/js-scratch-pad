var Task = function (name) {
	this.name = name;
	this.completed = false;

	this.complete = function () {
		console.log('completing task: ' + this.name);
		this.completed = true;
	}

	this.save = function () {
		console.log('Saving task: ' + this.name);
	}
}

// create a new instance of this task
var task1 = new Task('create a demo for constructors');
var task2 = new Task('create a demo for modules');
var task3 = new Task('create a demo for singltons');
var task4 = new Task('create a demo for prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();
