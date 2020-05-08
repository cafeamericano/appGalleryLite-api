const queryExecutor = require("./_queryExecutor");
const { v4: uuidv4 } = require('uuid');

module.exports = {

    get: function (req, res) {
      
        let {
          user_uuid
        } = req.params

        var sql = 
        `
          SELECT
            *
          FROM
            sources
          WHERE
            user_uuid = '${user_uuid}' AND
            type = 'Liability'
          ORDER BY
            source_name ASC
        `
        queryExecutor.queryAndRespond(sql, res);
    },

    add: function (req, res) {

      let {
        user_uuid,
        source_name,
        type
      } = req.body

      var sql = 
      `
        INSERT INTO
          sources
          (
            user_uuid,
            source_name,
            uuid,
            type
          )
        VALUES
          (
            '${user_uuid}',
            '${source_name}',
            '${uuidv4()}',
            '${type}'
          )
      `
      queryExecutor.queryAndRespond(sql, res);
      
    },

    delete: function (req, res) {

        let {
          source_uuid
        } = req.params

        var sql = 
        `
          DELETE FROM
            sources
          WHERE
            uuid = '${source_uuid}'
        `
        queryExecutor.queryAndRespond(sql, res);

    }

}