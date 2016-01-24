
function loadData() {

	var $body = $('body');
	var $wikiElem = $('#wikipedia-links');
	var $nytHeaderElem = $('#nytimes-header');
	var $nytElem = $('#nytimes-articles');
	var $greeting = $('#greeting');
	var $mapApiKey = 'AIzaSyBiRvY2XYFyuKlRa0VCGt7XBVwYiBtdm7M';
	var $street = $('#street').val();
	var $city = $('#city').val();

	// clear out old data before new request
	$wikiElem.text('');
	$nytElem.text('');

	// load streetview
	$body.append('<img class="bgimg" src="https://maps.googleapis.com/maps/api/streetview?size=1200x1200&location='+$street+','+$city+'&key='+$mapApiKey+'">');
	// YOUR CODE GOES HERE!

	console.log($street);
	console.log($city);

	return false;
}

$('#form-container').submit(loadData);

