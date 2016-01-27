
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

		$nytHeaderElem.text('New York Times Articles About '+$city);

		var articles = data.response.docs;
		var webUrl = data.response.docs.web_url;
		for (var i = 0; i < articles.length; i++) {
			// iterate through array object
			var article = articles[i];
			var webUrl = webUrls[i];

			$nytElem.append('<li class="article">'+'<a href="'+webUrl+'">'+article.headline.main+'</a>'+
				'<p>'+article.snippet+'</p>'+
				'</li>');
		}
	}).error(function(e){
		$nytHeaderElem.text('New York times could not be loaded, sorry');
	});

	console.info($street);
	console.info($city);

	return false;
}

$('#form-container').submit(loadData);

