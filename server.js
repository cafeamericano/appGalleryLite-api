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
  AppGalleryLite: mongoose.createConnection(process.env.APPGALLERYLITE_DBURL|| 'mongodb://localhost:27017/appGalleryLiteDb'),
  ClientManagerApp: mongoose.createConnection(process.env.CLIENTMANAGERAPP_DBURL || 'mongodb://localhost:27017/clientManagerDb')
}

//Project specific routes
require("./apis/AppGalleryLite/routes/routes")(app); //App Gallery
require("./apis/ClientManagerApp/routes/routes")(app); //ClientManagerApp

require("./apis/NetworthyMax/routes/analytics")(app); //NetworthyMax
require("./apis/NetworthyMax/routes/frozenAssets")(app); //NetworthyMax
require("./apis/NetworthyMax/routes/liabilities")(app); //NetworthyMax
require("./apis/NetworthyMax/routes/liquidAssets")(app); //NetworthyMax
require("./apis/NetworthyMax/routes/overview")(app); //NetworthyMax
require("./apis/NetworthyMax/routes/sourceDetail")(app); //NetworthyMax

// require("./apis/WeatherBuddy/routes/routes")(app); //WeatherBuddy

//Home route
app.get("/", function(req, res) {
    res
    .status(200)
    .send(`
        <h2>Grand Central API</h2>
        <p>Version 2.0.1</p>
        <p>The server is listening for requests.</p>
    `)
})

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

