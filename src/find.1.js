let coins = [{
		"id": 1,
		"name": "XRP",
		"high": "1426.93",
		"last": "1404.99",
		"timestamp": "1524828407",
		"bid": "1405.01",
		"vwap": "1374.86",
		"volume": "4059.99565190",
		"low": "1313.33",
		"ask": "1406.39",
		"open": "1425.21"
	},
	{
		"id": 2,
		"name": "BTC",
		"high": "566.84",
		"last": "562.43",
		"timestamp": "1524828410",
		"bid": "562.66",
		"vwap": "536.05",
		"volume": "16951.19556837",
		"low": "515.43",
		"ask": "562.99",
		"open": "544.87"
	},
	{
		"id": 3,
		"name": "ETH",
		"high": "0.15359999",
		"last": "0.15032205",
		"timestamp": "1524828410",
		"bid": "0.15035031",
		"vwap": "0.15073687",
		"volume": "2000.14556286",
		"low": "0.14780028",
		"ask": "0.15094600",
		"open": "0.15352960"
	},
]

let xrp = { id: 1 }
let bitcoin = { id: 2 }
let etherium  = { id: 3 }

function getBitcoin(coins) {
	return coins.find((coin) => {
		return coin.id === bitcoin.id
	})
}

getBitcoin(coins)

console.log(getBitcoin(coins));