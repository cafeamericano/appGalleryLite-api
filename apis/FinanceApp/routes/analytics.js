const controller = require("../controllers/analytics.js");

module.exports = function(app) {
  
  app.get("/api/assetbreakdown/:userid", controller.analyzeAssetBreakdown);
  app.get("/api/timeline/:userid", controller.analyzeTimeline);

}