
function loadData() {

	var $body = $('body');
	var $wikiElem = $('#wikipedia-links');
	var $nytHeaderElem = $('#nytimes-header');
	var $nytElem = $('#nytimes-articles');
	var $greeting = $('#greeting');
	var $mapApiKey = 'AIzaSyBiRvY2XYFyuKlRa0VCGt7XBVwYiBtdm7M';

	// clear out old data before new request
	$wikiElem.text('');
	$nytElem.text('');

	// load streetview
	var $street = $('#street').val();
	var $city = $('#city').val();

	$body.append('<img class="bgimg" src="https://maps.googleapis.com/maps/api/streetview?size=1200x1200&location='+$street+','+$city+'&key='+$mapApiKey+'">');

	// Query the New York Times Api
	var NYTApiKey = '70b82dda59bbdaf109b8ebccabb3509b:15:74111403';
	var NYTBaseURl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?callback=svc_search_v2_articlesearch&q='+$city+'&begin_date=18580101&end_date=20150101&sort=newest&page=2&api-key='+NYTApiKey;

	$.getJSON( NYTBaseURl, function( data ) {
		var items = [];

		$.each( data , function( key, val ) {
			items.push( "<li id='" + key + "'>" + val + "</li>" );
		});

		$( "<ul/>", {
			"id": "nytimes-articlesX",
			html: items.join( "" )
		}).appendTo( "body" );
		console.log(data);
	});


	console.log($street);
	console.log($city);

	return false;
}

$('#form-container').submit(loadData);

