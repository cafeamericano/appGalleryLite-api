let db = require('../config/connection')

module.exports = {
    queryAndRespond: function(sqlQuery, res) {
        db.query(sqlQuery, function (err, result) {
            if (err) {
              res.json(err)
            }
            else {
              res.json(result)
            }
          })
    }
}