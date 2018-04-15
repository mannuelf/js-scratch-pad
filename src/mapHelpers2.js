"use strict";

let cryptos = [
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
	}
];

const prices = cryptos.map((price) => {
	return price.high;
});

console.log(prices);
