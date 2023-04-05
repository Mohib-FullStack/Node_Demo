
const user = require("./user.js");

const { priceTTC } = user;

const products = [
  { name: "Apple", priceHT: 1.0, priceTTC: null },
  { name: "Orange", priceHT: 1.2, priceTTC: null },
  { name: "Rasberry", priceHT: 2.5, priceTTC: null },
];

products.forEach(function (product) {
  product.peiceTTC = priceTTC(product.priceHT);
});

console.table(products);
