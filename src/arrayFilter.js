"use strict";

let cryptoCurrencies = [
	{
		symbol: "BTC",
		high: "8417.00",
		last: "8306.51",
		timestamp: "1523813933",
		bid: "8303.70",
		vwap: "8207.62",
		volume: "7350.51656110",
		low: "7929.88",
		ask: "8310.70",
		open: "8003.39"
	},
	{
		symbol: "ETH",
		high: "530.00",
		last: "526.71",
		timestamp: "1523813898",
		bid: "526.71",
		vwap: "514.79",
		volume: "18594.40022376",
		low: "493.19",
		ask: "526.97",
		open: "503.14"
	},
	{
		symbol: "XRP",
		high: "0.69670",
		last: "0.68082",
		timestamp: "1523815500",
		bid: "0.68082",
		vwap: "0.66775",
		volume: "14597443.52888544",
		low: "0.63002",
		ask: "0.68189",
		open: "0.64001"
	},
	{
		symbol: "LITECOIN",
    high: "133.23",
    last: "128.35",
    timestamp: "1523854941",
    bid: "128.32",
    vwap: "130.97",
    volume: "30228.82407859",
    low: "127.45",
		ask: "128.37",
		open: "132.34"
	}
];

let filteredCurrency = [];

// old way with a for loop
for (let i = 0; i < cryptoCurrencies.length; i++) {
	if (cryptoCurrencies[i].symbol === 'BTC') {
		filteredCurrency.push(cryptoCurrencies[i]);
	}
}
console.log(filteredCurrency);
