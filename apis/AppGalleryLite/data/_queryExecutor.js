module.exports = {
    queryAndRespond: function(query, res) {
        query.then(function (err, result) {
            if (err) {
                res.json(err);
            }
            else {
                console.log(result)
                res.json({
                    result: result
                });
            }
        })
    }
}