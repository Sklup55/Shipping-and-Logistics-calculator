const express = require('express');
const rates = express.Router();

let shippingRates = [
  { weight: 1, rate: 5 },
  { weight: 5, rate: 10 },
  { weight: 10, rate: 15 }
];

// Task 5
rates.get('/', (req, res) => {
//   Add the code
});



// Task 9
rates.post('/update', (req, res) => {
    // Add the code

});

module.exports.rates = rates;
