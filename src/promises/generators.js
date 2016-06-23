// getJSON returns an ES6 Promise, spawn implementation is at
// http://www.html5rocks.com/en/tutorials/es6/promises/
'use strict'

spawn(function *() {
	try {
		let story = yield getJson('story.json');
		addHtmlToPage(story.heading);
		story.chapterUrls.map(getJson).forEach(p => addHtmlToPage((yield p).html));
		addTextToPage("All done");
	} catch (err) { addTextToPage("Argh, broken: " + err.message); }
	document.querySelector('.spinner').style.display = 'none';
});
