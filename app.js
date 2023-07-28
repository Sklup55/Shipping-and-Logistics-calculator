const express = require('express');
const session = require('express-session');
const auth_routes = require('./router/auth_users').authenticated;
const package_routes = require('./router/package').package;
const rates_routes = require('./router/rates').rates;

const app = express();

// Parse incoming JSON data
app.use(express.json());

// Configure express-session middleware
app.use(session({
  secret: "agent-key-270723",
  resave: true,
  saveUninitialized: true
}));

// Route handlers for different paths
app.use("/api/auth", auth_routes);
app.use("/api/package", package_routes);
app.use("/api/rates", rates_routes);

const PORT = 5000;

app.listen(PORT, () => console.log("Server is running"));
