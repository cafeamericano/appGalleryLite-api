const db = require("../models");
const queryExecutor = require("./_queryExecutor");

module.exports = {

    getOne: function (req, res) {

        // ex. http://localhost:9483/projectx/api/clients/one?searchTermKey=gender&searchTermValue=Female
        
        let {
            searchTermKey,
            searchTermValue
        } = req.query

        const query = (
            db.Clients.find({
                [searchTermKey]: searchTermValue
            })
            .limit(1)
        )

        queryExecutor.queryAndRespond(query, res);

    },

    getMultiple: function (req, res) {

        let {
            pageNumber,
            recordsPerPage,
            sortByColumn,
            sortOrder,
            searchTermKey,
            searchTermValue
        } = req.query

        pageNumber = parseInt(pageNumber);
        recordsPerPage = parseInt(recordsPerPage);

        const query = (
            db.Clients.find({
                [searchTermKey]: searchTermValue
            })
            .sort({
                [sortByColumn]: sortOrder
            })
            .skip((pageNumber - 1) * recordsPerPage)
            .limit(recordsPerPage)
        )

        queryExecutor.queryAndRespond(query, res);

    }

}