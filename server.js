// GENERAL DEPENDENCIES =======================================================

require('dotenv').config(); //Environment variables
const mongoose = require("mongoose"); //Import Mongoose
const cors = require('cors') //Allow cross-origin requests
 
// EXPRESS ====================================================================

//Define express app and port number
var express = require('express');
var app = express();
app.use(cors());
let port = process.env.PORT || 9483;

//Define express public folder
app.use(express.static('public'));

//Allow express to handle post requests with JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// PER PROJECT DATABASE CONNECTIONS AND ROUTING ====================================================================

//Establish db connections for Mongoose
module.exports = {
  AppGalleryLite: mongoose.createConnection(process.env.DB_URL_APPGALLERYLITE || ''),
  ClientManagerApp: mongoose.createConnection(process.env.DB_URL_CLIENTMANAGERAPP || '')
}

//Project specific routes
require("./apis/AppGalleryLite/routes/routes")(app); //App Gallery
require("./apis/ClientManagerApp/routes/routes")(app); //ClientManagerApp

require("./apis/FinanceApp/routes/analytics")(app); //FinanceApp
require("./apis/FinanceApp/routes/frozenAssets")(app); //FinanceApp
require("./apis/FinanceApp/routes/liabilities")(app); //FinanceApp
require("./apis/FinanceApp/routes/liquidAssets")(app); //FinanceApp
require("./apis/FinanceApp/routes/overview")(app); //FinanceApp
require("./apis/FinanceApp/routes/sourceDetail")(app); //FinanceApp

//Endpoint not found
app.get("*", function(req, res) {
  res
  .status(404)
  .json({error: "The requested endpoint does not exist."})
})

// SERVER LISTEN ==============================================================

//Begin listening for requests
app.listen(port, function () {
    console.log(`Listening on port ${port}.`)
})

