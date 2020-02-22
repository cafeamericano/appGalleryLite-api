//Dependencies
var express = require('express')

//Define express app and port number
var app = express()
let port = process.env.PORT || 2000

//Define express public folder
app.use(express.static('public'))

//Allow express to handle post requests with JSON data
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//====================================================================

//Routing
app.get('*', function(req, res) {
    res.send('You have landed.')
})

//====================================================================

//Begin listening for requests
app.listen(port, function () {
    console.log(`Listening on port ${port}.`)
})