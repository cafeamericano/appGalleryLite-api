const queryExecutor = require("./_queryExecutor");

module.exports = {

    get: function (req, res) {

      let {
        source_uuid
      } = req.params

      var sql = 
      `
        SELECT
          *
        FROM
          entries
        WHERE
          source_uuid = '${source_uuid}'
        ORDER BY
          entry_date DESC
      `
      queryExecutor.queryAndRespond(sql, res);

    },

    add: function (req, res) {
        db.Entry.create(req.body).then(function(result) {
            res.sendStatus(200);
          });
    },

    delete: function (req, res) {

      let {
        id
      } = req.params

      var sql = 
      `
        DELETE FROM
          entries
        WHERE
          id = '${id}'
      `
      queryExecutor.queryAndRespond(sql, res);
      
    },

    sourceDelete: function (req, res) {
        db.Entry.destroy({
            where: {
              id: req.params.id
            }
          }).then(function(result) {
            console.log(result);
            res.json(result);
          });
    }

}