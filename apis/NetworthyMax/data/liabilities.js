const db = require("../models");
var uuid = require("uuid/v4");

module.exports = {

    get: function (req, res) {
        db.Source.findAll({
            where: {
              user_uuid: req.params.user_uuid,
              type: "Liability"
            },
            order: [["source_name", "ASC"]]
          }).then(function(result) {
            res.json(result);
          });
    },

    add: function (req, res) {
        req.body.uuid = uuid(); //Assign a UUID
        db.Source.create(req.body).then(function(result) {
          res.sendStatus(200);
        });
    },

    delete: function (req, res) {
        db.Source.destroy({
            where: {
              uuid: req.params.source_uuid
            }
          }).then(function(result) {
            res.json(result);
          });
    }

}