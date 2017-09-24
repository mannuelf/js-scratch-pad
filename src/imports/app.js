//  var TaskCollection = require('./TaskCollection'); // common js modules

import { TaskCollection } from './TaskCollection.js'; // es imports

new TaskCollection([
	'Learn ES6',
	'Learn Laravel',
	'Learn Software Development'
]).dump();
