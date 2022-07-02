function currencyFormater(num, symbol) {
  return symbol + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

module.exports = currencyFormater;
