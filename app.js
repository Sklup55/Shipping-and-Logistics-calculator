const express = require('express');
const jwt = require('jsonwebtoken');
const session = require('express-session');
const auth_routes = require('./router/auth_users').authenticated;
const package_routes = require('./router/package').package;
const rates_routes = require('./router/rates').rates;

const app = express();

app.use(express.json());

app.use("/api", session({ secret: "shipping_calculator", resave: true, saveUninitialized: true }));

app.use("/api/auth/*", function auth(req, res, next) {
  let token = req.session.authorization;
  if (token) {
    token = token['accessToken'];
    jwt.verify(token, "access", (err, user) => {
      if (!err) {
        req.user = user;
        next();
      } else {
        return res.status(403).json({ message: "User not authenticated" });
      }
    });
  } else {
    return res.status(403).json({ message: "User not logged in" });
  }
});

app.use("/api/auth", auth_routes);
app.use("/api/package", package_routes);
app.use("/api/rates", rates_routes);

const PORT = 5000;

app.listen(PORT, () => console.log("Server is running"));
