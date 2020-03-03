const queryExecutor = require("./_queryExecutor");

module.exports = {

    getAllForAll: function (req, res) {

      var sql = 
      `
        SELECT
          *
        FROM
          entries
      `
      queryExecutor.queryAndRespond(sql, res);

    },

    getAllForOne: function (req, res) {

      let {
        user_uuid
      } = req.params

      var sql = 
      `
        SELECT
          *
        FROM
          entries
        WHERE
          user_uuid = '${user_uuid}'
        ORDER BY
          entry_date DESC
      `
      queryExecutor.queryAndRespond(sql, res);

    }

}