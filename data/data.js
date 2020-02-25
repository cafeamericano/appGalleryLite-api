const db = require("../models");
const queryExecutor = require("./_queryExecutor");

module.exports = {

    getAll: function (req, res) {
        console.log('Hit getAll route.')
        var query = (
            db.Clients.find({})
            .limit(10)
        )
        queryExecutor.queryAndRespond(query, res)

    },

    getOne: function (req, res) {

        var query = (
            db.Clients.find({
                credit_card_type: req.query.credit_card_type
            })
            .limit(10)
        )

        queryExecutor.queryAndRespond(query, res)

    }

}