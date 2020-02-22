// GENERAL DEPENDENCIES =======================================================

//Environment variables
// require('dotenv').config()

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

// //Import Mongoose
// const mongoose = require("mongoose");

// //Import DB models
// var db = require("./models");

// //Connect to database
// var dbURL = process.env.DB_URL || '';
// mongoose.connect(dbURL, {
//   useNewUrlParser: true
// }, function() {
//   console.log('Connected to database.')
// });

// DATABASE CREATION ==========================================================

// const db = require("./models");

// var john = {
//   firstName: "John",
//   lastName: "Smith",
//   phone: 12345678901
// };

// db.Client.create(john)

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