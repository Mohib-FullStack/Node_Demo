exports.priceTTC = function (price, tva = 0.2) {
  price = parseFloat(price);

  if (isNaN(price)) {
    console.error("this is not a number");
  }
  return Math.floor((1 + tva) * price * 100) / 100;
};
