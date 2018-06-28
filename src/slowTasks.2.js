"use strict"
// https://courses.edx.org/courses/course-v1:Microsoft+DEV234x+1T2018a/courseware/d2230f74f2ec482cace613dcf2f68532/291e24fd4ed84d32b8a7318b5fb4bf95/?child=first

function slowTask() {
	console.log('slow task finished')
}

function asyncSlowTask() {
	setTimeout(slowTask, 2000)
}

function fastTask() {
	console.log('fast task finished')
}

fastTask()
asyncSlowTask()
fastTask()
asyncSlowTask()
fastTask()
fastTask()
