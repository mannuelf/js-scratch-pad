var data = [];
$.ajax({
	dataType: 'json',
	url: "http://api.mobile.superbalist.com/v1/products",
	data: data,
	beforeSend: function( xhr ) {
		xhr.overrideMimeType('text/json; charset=x-user-defiend');
	}
}).done(function( data ) {
	if ( console && console.log ) {
		console.log('Here is data: ', data.slice( 0, 100) );
	}
});
