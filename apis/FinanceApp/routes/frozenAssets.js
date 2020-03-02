const controller = require("../controllers/frozenAssets.js");

module.exports = function(app) {
  
  app.get("/api/frozenassets/:user_uuid", controller.frozenAssetSourceGet);
  app.post("/api/frozenassets", controller.frozenAssetSourceAdd);
  app.delete("/api/frozenassets/:source_uuid", controller.frozenAssetSourceDelete);

}