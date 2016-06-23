
function getStockSymbols(stocks) {

	return stocks.map(function(stock) {
		return stock.symbol;
	});

}

//Array.prototype.map = function(projection) {
//	var symbols = [];
//
//	this.forEach(function(item) {
//		results.push(projection(item));
//	});
//
//	return results;
//};

var symbols = getStockSymbols([
	{ symbol: "XFX", price: 240.22, volume: 2343 },
	{ symbol: "FYC", price: 140.22, volume: 7889 },
	{ symbol: "TNZ", price: 540.22, volume: 5087 },
	{ symbol: "JXJ", price: 740.22, volume: 32145 }
]);


console.log(JSON.stringify(symbols));
