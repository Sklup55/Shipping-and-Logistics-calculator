const express = require('express');
const jwt = require('jsonwebtoken');

const rates = express.Router();

let shippingRates = [
  { weight: 1, rate: 5 },
  { weight: 5, rate: 10 },
  { weight: 10, rate: 15 }
];


// Task 10
const jwtAuthMiddleware = (req, res, next) => {
//   Add the code

};
  

// Task 5
rates.get('/', (req, res) => {
//   Add the code
});


// Task 11
rates.post('/update', jwtAuthMiddleware, (req, res) => {
//   Add the code
});

module.exports.rates = rates;
