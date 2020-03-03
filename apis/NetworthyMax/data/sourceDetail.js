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

      let {
        user_uuid,
        entry_date,
        source_uuid,
        amount,
        comments
      } = req.body

      var sql = 
      `
        INSERT INTO
          entries
          (
            user_uuid,
            entry_date,
            source_uuid,
            amount,
            comments
          )
        VALUES
          (
            '${user_uuid}',
            '${entry_date}',
            '${source_uuid}',
            ${amount},
            '${comments}'
          )
      `
      queryExecutor.queryAndRespond(sql, res);
      
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

    }
    
}