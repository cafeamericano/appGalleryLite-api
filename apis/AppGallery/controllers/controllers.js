const data = require("../data/data");

module.exports = {

    getApplications: function (req, res) {
        data.getApplications(req, res);
    },

    getKeywords: function (req, res) {
        data.getKeywords(req, res);
    }

}