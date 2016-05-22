var Book = function (name, price) {
  this.name = function (val) {
    return name;
  };

  this.price = function (val) {
    return price;
  };

  this.onPriceChanging = function (callback) {

  };

  this.onPriceChanged = function (callback) {

  };
}

var book = new Book('JavaScript: The Good Parts', 233.99);

console.log('The name is: '+ book.name());

console.log('The price is: R' + book.price());

book.onPriceChanging(function (b, price) {
  if (price > 100) {
    console.log('System error, price has gone unexpectedly high');
    return false;
  }
  return true;
});

book.price(233.99);
book.price(200);
