const controller = require("../controllers/liquidAssets");

module.exports = function(app) {

  app.get("/NetworthyLite/api/liquidassets/:user_uuid", controller.get);
  app.post("/NetworthyLite/api/liquidassets", controller.add);
  app.delete("/NetworthyLite/api/liquidassets/:source_uuid", controller.delete);

}