// GENERAL DEPENDENCIES =======================================================

require('dotenv').config(); //Environment variables
const cors = require('cors') //Allow cross-origin requests
 
// EXPRESS ====================================================================

//Define express app and port number
var express = require('express');
var app = express();
app.use(cors());
let port = process.env.PORT || 9484;

//Define express public folder
app.use(express.static('public'));

//Allow express to handle post requests with JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./apis/NetworthyLite/routes/analytics")(app); //NetworthyLite
require("./apis/NetworthyLite/routes/frozenAssets")(app); //NetworthyLite
require("./apis/NetworthyLite/routes/liabilities")(app); //NetworthyLite
require("./apis/NetworthyLite/routes/liquidAssets")(app); //NetworthyLite
require("./apis/NetworthyLite/routes/overview")(app); //NetworthyLite
require("./apis/NetworthyLite/routes/sourceDetail")(app); //NetworthyLite


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

