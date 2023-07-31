const express = require('express');
const session = require('express-session');
const auth_routes = require('./router/auth_users').authenticated;
const package_routes = require('./router/package').package;
const rates_routes = require('./router/rates').rates;

const app = express();

// Parse incoming JSON data
app.use(express.json());


// Add the code for Task XY
app.use("/api/auth", auth_routes);



// Add the code for Task 2



// Add the code for Task 4



const PORT = 5000;

app.listen(PORT, () => console.log("Server is running"));
