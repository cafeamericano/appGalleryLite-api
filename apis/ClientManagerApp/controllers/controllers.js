const data = require("../data/data");

module.exports = {

    getOne: function (req, res) {
        data.getOne(req, res);
    },

    getMultiple: function (req, res) {
        data.getMultiple(req, res);
    }

}