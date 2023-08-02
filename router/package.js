const express = require('express');
const jwt = require('jsonwebtoken');

const package = express.Router();

let packageData = [
  { size: 'small', rate: 10 },
  { size: 'medium', rate: 20 },
  { size: 'large', rate: 30 }
];


// Task 8
const jwtAuthMiddleware = (req, res, next) => {
    // Add the code

  };

// Task 3
package.get('/', (req, res) => {
    // Add the code
});


// Task 9
package.post('/update', jwtAuthMiddleware, (req, res) => {
    // Add the code

});

module.exports.package = package;
