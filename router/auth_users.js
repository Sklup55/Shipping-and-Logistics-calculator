const express = require('express');
const jwt = require('jsonwebtoken');

const auth_users = express.Router();

let users = [
  { username: 'agent1', password: 'password1' },
  { username: 'agent2', password: 'password2' },
  // Add more users as per your need
];


// Task 6
const authenticatedUser = (username, password) => {
    //  Add the code

  };
  

// Task 7
auth_users.post("/login", (req, res) => {
    // Add the code
  });
  

module.exports.authenticated = auth_users;
module.exports.users = users;
