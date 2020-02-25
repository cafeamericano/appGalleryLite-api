// GENERAL DEPENDENCIES =======================================================

//Environment variables
require('dotenv').config()

// EXPRESS ====================================================================

//Define express app and port number
var express = require('express')
var app = express()
let port = process.env.PORT || 9483

//Define express public folder
app.use(express.static('public'))

//Allow express to handle post requests with JSON data
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// DATABASE ===================================================================

//Import Mongoose
const mongoose = require("mongoose");

//Connect to database
var dbURL = process.env.DB_URL || '';
mongoose.connect(dbURL, function() {
  console.log('Connected to database.')
});

// INITIAL DATABASE CREATION ==========================================================

// const db = require("./models");

// // var sally = {
// //   first_name: "Sally",
// //   last_name: "Smith",
// // };

// db.Clients.create(sally)

// ROUTING ====================================================================

//Define route locations
require("./routes/routes")(app);
app.get("*", function(req, res) {
    res.json({error: "The requested endpoint does not exist."})
})

// SERVER LISTEN ==============================================================

//Begin listening for requests
app.listen(port, function () {
    console.log(`Listening on port ${port}.`)
})