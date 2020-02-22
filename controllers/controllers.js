const data = require("../data/data");

module.exports = {

    getAll: function (req, res) {
        data.getAll(req, res);
    },

    getOne: function (req, res) {
        data.getOne(req, res);
    }

}