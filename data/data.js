const db = require("../models");
const queryExecutor = require("./_queryExecutor");

module.exports = {

    getAll: function (req, res) {

        var query = (
            db.Client.find({})
            .sort({
                last_name: 1
            })
            .limit(10)
        )

        res.send('Greetings from Apple World!')
        // queryExecutor.queryAndRespond(query, res)

    },

    getOne: function (req, res) {

        var query = (
            db.Client.find({
                credit_card_type: req.query.credit_card_type
            })
            .limit(10)
        )

        // queryExecutor.queryAndRespond(query, res)

    }

}