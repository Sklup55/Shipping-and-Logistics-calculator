const express = require('express');
const package = express.Router();

let packageData = [
  { size: 'small', rate: 10 },
  { size: 'medium', rate: 20 },
  { size: 'large', rate: 30 }
];

// Task 3
package.get('/', (req, res) => {
    // Add the code
});


// Task 8
package.post('/update', (req, res) => {
    // Add the code

});

module.exports.package = package;
