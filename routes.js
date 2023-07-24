const express = require('express');
const router = express.Router();

// Sample package data for demonstration purposes
let packageData = [
  { size: 'small', rate: 10 },
  { size: 'medium', rate: 20 },
  { size: 'large', rate: 30 },
];

// Route to fetch the current package data
router.get('/packages', (req, res) => {
  res.json(packageData);
});

// Route to update the package data (restricted to authenticated users only)
router.post('/packages', authenticateToken, (req, res) => {
  const { size, rate } = req.body;

  // Assuming the input data is valid, update the packageData array with the new package information.
  packageData.push({ size, rate });
  res.json({ message: 'Package data updated successfully' });
});

// Function to authenticate JWT token
function authenticateToken(req, res, next) {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Access denied' });

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.user = user;
    next();
  });
}

module.exports = router;
