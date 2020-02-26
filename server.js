// GENERAL DEPENDENCIES =======================================================

require('dotenv').config(); //Environment variables
const mongoose = require("mongoose"); //Import Mongoose

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

// PER PROJECT DATABASE CONNECTIONS AND ROUTING ====================================================================

module.exports = {
  AppGallery: mongoose.createConnection(process.env.DB_URL_APPGALLERY),
  ProjectX: mongoose.createConnection(process.env.DB_URL_PROJECTX)
}

//App Gallery
require("./apis/AppGallery/routes/routes")(app);

//ProjectX
require("./apis/ProjectX/routes/routes")(app);

//API not found
app.get("*", function(req, res) {
  res.json({error: "The requested endpoint does not exist."})
})

// SERVER LISTEN ==============================================================

//Begin listening for requests
app.listen(port, function () {
    console.log(`Listening on port ${port}.`)
})

