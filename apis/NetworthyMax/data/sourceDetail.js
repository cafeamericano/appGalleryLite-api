const db = require("../models");

module.exports = {

    get: function (req, res) {
        db.Entry.findAll({
            where: {
              source_uuid: req.params.source_uuid
            },
            order: [["entry_date", "DESC"]]
          }).then(function(result) {
            res.json(result);
          });
    },

    add: function (req, res) {
        db.Entry.create(req.body).then(function(result) {
            res.sendStatus(200);
          });
    },

    delete: function (req, res) {
        db.Entry.destroy({
            where: {
              id: req.params.id
            }
          }).then(function(result) {
            console.log(result);
            res.json(result);
          });
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