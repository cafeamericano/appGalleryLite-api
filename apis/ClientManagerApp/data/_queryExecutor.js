module.exports = {
    queryAndRespond: function(query, res) {
        query.then(function (err, result) {
            if (err) {
                res
                .status(200)
                .json(err);
            }
            else {
                res
                .status(200)
                .json({
                    result: result
                });
            }
        })
    }
}