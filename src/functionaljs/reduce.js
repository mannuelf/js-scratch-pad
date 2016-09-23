// Reduce

var orders = [
    { amount: 250 },
    { amount: 121 },
    { amount: 2350 },
    { amount: 9088 },
    { amount: 9088 },
    { amount: 9088 },
];

var totalAmount = orders.reduce(function(sum, order) {
    console.log('reducer:', sum, order);
    return sum + order.amount;
}, 0);

/*
var totalAmount = 0;
for (var i = 0; i < orders.length; i++) {
    totalAmount += orders[i].amount
}
*/
console.log(totalAmount);