"use strict"

function slowTask() {
	let now = new Date().getTime()
	while(new Date().getTime() < now + 5000) {
	}
	console.log('slow task finished!')
}

function fastTask() {
	console.log('fast task finished!')
}

fastTask()
slowTask()
fastTask()
fastTask()
fastTask()

