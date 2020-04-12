// const fetch = require('node-fetch');
// var redis = require("redis");
// var client = redis.createClient(process.env.WEATHERBUDDY_REDISURL);

// module.exports = {

//     savedCitiesGet: function (req, res) {
//         client.get(req.params.city, function(err, reply) {
//             res.send(reply);
//         });
//     },

//     savedCitiesGetAll: function (req, res) {   
//         client.keys('*', function(err, reply) {
//             var allKeys = [];
//             reply.forEach(key => {
//                 allKeys.push(key)
//             })
//             res.json(allKeys);
//         });
//     },

//     savedCitiesAdd: function (req, res) {
//         client.set(req.params.city, req.params.city, function(err, reply) {
//             res.send('Added city.');
//         });
//     },

//     savedCitiesDelete: function (req, res) {
//         client.del(req.params.city, function(err, reply) {
//             res.send('Deleted city.');
//         });
//     },

//     getCityWeather: function (req, res) {

//         let apiKey = process.env.WEATHERBUDDY_OPENWEATHERAPI_APIKEY;
//         let city = req.params.city;
//         let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

//         fetch(url)
//             .then(response => response.json())
//             .then(jsonFormattedResponse => res.json(jsonFormattedResponse))
        
//     }

// }