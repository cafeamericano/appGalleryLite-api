const controller = require("../controllers/frozenAssets");

module.exports = function(app) {
  
  app.get("/NetworthyLite/api/frozenassets/:user_uuid", controller.get);
  app.post("/NetworthyLite/api/frozenassets", controller.add);
  app.delete("/NetworthyLite/api/frozenassets/:source_uuid", controller.delete);

}