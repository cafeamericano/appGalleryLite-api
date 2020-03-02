const controller = require("../controllers/liquidAssets.js");

module.exports = function(app) {

  app.get("/api/liquidassets/:user_uuid", controller.liquidAssetSourceGet);
  app.post("/api/liquidassets", controller.liquidAssetSourceAdd);
  app.delete("/api/liquidassets/:source_uuid", controller.liquidAssetSourceDelete);

}