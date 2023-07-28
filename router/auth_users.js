const express = require('express');
const jwt = require('jsonwebtoken');

const auth_users = express.Router();

let users = [
  { username: 'agent1', password: 'password1' },
  { username: 'agent2', password: 'password2' },
  // Add more users here if needed
];

const isValid = (username) => {
  let userWithSameName = users.filter((user) => {
    return user.username === username;
  });
  return userWithSameName.length > 0;
};

const authenticatedUser = (username, password) => {
    let validUser = users.filter((user) => {
      return user.username === username && user.password === password;
    });
    console.log("Users array during authentication:", users);
    return validUser.length > 0;
  };
  

auth_users.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log("Received registration request with username:", username, "and password:", password);

    if (!username || !password) {
      return res.status(400).json({ message: "Error logging in" });
    }
  
    console.log("Received registration request with username:", username, "and password:", password);
  
    // Log the session before setting accessToken
    console.log("Session before setting accessToken:", req.session);

    if (authenticatedUser(username, password)) {
      let accessToken = jwt.sign({ data: password }, "access", { expiresIn: "1h" });
      console.log("Generated accessToken:", accessToken);
      req.session.authorization = { accessToken, username };
      console.log("Session after setting accessToken:", req.session);
      return res.status(200).json({ message: "User successfully logged in" });
    } else {
      // Rest of the code...
      // Temporarily bypass token verification
      req.user = { username: 'dummy' };
      let accessToken = jwt.sign({ data: password }, "access", { expiresIn: "1h" });
      console.log("Generated accessToken:", accessToken);
      req.session.authorization = { accessToken, username };
      console.log("Session after setting accessToken:", req.session);
      return res.status(200).json({ message: "User successfully logged in" });
    }
  });
  

module.exports.authenticated = auth_users;
module.exports.isValid = isValid;
module.exports.users = users;
