const express = require('express');
const package = express.Router();

let packageData = [
  { size: 'small', rate: 10 },
  { size: 'medium', rate: 20 },
  { size: 'large', rate: 30 }
];

package.get('/', (req, res) => {
  res.status(200).json(packageData);
});

package.post('/update', (req, res) => {
  const { size, rate } = req.body;
  if (!size || !rate) {
    return res.status(400).json({ message: "Invalid input. Size and rate are required." });
  }
  let existingPackage = packageData.find((item) => item.size === size);
  if (existingPackage) {
    existingPackage.rate = rate;
    return res.status(200).json({ message: "Package updated successfully" });
  } else {
    packageData.push({ size, rate });
    return res.status(201).json({ message: "New package added successfully" });
  }
});

module.exports.package = package;
