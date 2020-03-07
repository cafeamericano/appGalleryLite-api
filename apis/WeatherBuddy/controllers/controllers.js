const data = require("../data/data");

module.exports = {

    savedCitiesGet: function (req, res) {
        data.savedCitiesGet(req, res);
    },

    savedCitiesGetAll: function (req, res) {
        data.savedCitiesGetAll(req, res);
    },

    savedCitiesAdd: function (req, res) {
        data.savedCitiesAdd(req, res);
    },

    savedCitiesDelete: function (req, res) {
        data.savedCitiesDelete(req, res);
    },

    getCityWeather: function (req, res) {

        //Replace spaces in city name with plus symbols
        let city = req.params.city;
        for (let i = 0; i < city.length; i++) {
            if (city[i] === ' ') {
                req.params.city[i] = '+'
            }
        }

        data.getCityWeather(req, res);
    }

}