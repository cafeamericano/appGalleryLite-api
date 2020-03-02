const controller = require("../controllers/frozenAssets");

module.exports = function(app) {
  
  app.get("/NetworthyMax/api/frozenassets/:user_uuid", controller.get);
  app.post("/NetworthyMax/api/frozenassets", controller.add);
  app.delete("/NetworthyMax/api/frozenassets/:source_uuid", controller.delete);

}