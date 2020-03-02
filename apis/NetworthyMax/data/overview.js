const db = require("../models");

module.exports = {

    getAllForAll: function (req, res) {
        db.Entry.findAll({
            order: [["entry_date", "DESC"]]
          }).then(function(result) {
            res.json(result);
          });
    },

    getAllForOne: function (req, res) {
        db.Entry.findAll({
            where: {
              user_uuid: req.params.user_uuid
            },
            order: [["entry_date", "DESC"]]
          }).then(function(result) {
            res.json(result);
          });
    }

}