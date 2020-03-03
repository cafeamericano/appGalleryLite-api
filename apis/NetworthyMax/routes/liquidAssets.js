const controller = require("../controllers/liquidAssets");

module.exports = function(app) {

  app.get("/NetworthyMax/api/liquidassets/:user_uuid", controller.get);
  app.post("/NetworthyMax/api/liquidassets", controller.add);
  app.delete("/NetworthyMax/api/liquidassets/:source_uuid", controller.delete);

}