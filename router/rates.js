const express = require('express');
const rates = express.Router();

let shippingRates = [
  { weight: 1, rate: 5 },
  { weight: 5, rate: 10 },
  { weight: 10, rate: 15 }
];

rates.get('/', (req, res) => {
  res.status(200).json(shippingRates);
});

rates.post('/update', (req, res) => {
  const { weight, rate } = req.body;
  if (!weight || !rate) {
    return res.status(400).json({ message: "Invalid input. Weight and rate are required." });
  }
  let existingRate = shippingRates.find((item) => item.weight === weight);
  if (existingRate) {
    existingRate.rate = rate;
    return res.status(200).json({ message: "Shipping rate updated successfully" });
  } else {
    shippingRates.push({ weight, rate });
    return res.status(201).json({ message: "New shipping rate added successfully" });
  }
});

module.exports.rates = rates;
