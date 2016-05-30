var Book = function (name, price) {
  // price changing array to push values to
  var priceChanging = [],
      priceChanged = [];
  this.name = function (val) {
    return name;
  };

  this.price = function (val) {
    // check if value is undefined and has a value
    if (val !== undefined && val !== price) {
      for (var i = 0; i < priceChanging.length; i++) {
        if (!priceChanging[i](this, val)) {
          return price;
        };
      }
      price = val;
      for (var i = 0; i < priceChanged.length; i++) {
        priceChanged[i]
      }
    }
    return price;
  };

  this.onPriceChanging = function (callback) {
    priceChanging.push(callback);
  };

  this.onPriceChanged = function (callback) {
    priceChanged.push(callback);
  };
}

// create a new instance of a book
var book = new Book('JavaScript: The Good Parts', 233.99);
var book2 = new Book('JavaScript: The Definitive Guide', 199.99);

console.log('The name is: '+ book.name());
console.log('The price is: R' + book.price());

console.log('The name is: '+ book2.name());
console.log('The price is: R' + book2.price());

book.onPriceChanging(function (b, price) {
  if (price > 100) {
    console.log('System error, price has gone unexpectedly high');
    return false;
  }
  return true;
});

// set book price
book.price(233.99);
book.price(200);

book2.price(88.99);
