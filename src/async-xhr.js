// an asynchronous XHR request
function makeRequest() {
	let async = true;
	let xhr = new XMLHttpRequest();
	let apiRequest = 'https://api.cryptonator.com/api/ticker/btc-usd';

	xhr.open('get', apiRequest, async);
	xhr.send();

	// bad for illustrative purpose, not for production code.
	let timestamp = Date.now() + 3000;
	while (Date.now() < timestamp);

	function listener() {
		console.log('listener...');
	}
	xhr.addEventListener('load', listener);
	xhr.addEventListener('error', listener);
}

makeRequest();
