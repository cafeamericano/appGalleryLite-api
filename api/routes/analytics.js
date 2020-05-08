const controller = require("../controllers/analytics");

module.exports = function(app) {
  
  app.get("/NetworthyLite/api/assetbreakdown/:userid", controller.analyzeAssetBreakdown);
  app.get("/NetworthyLite/api/timeline/:userid", controller.analyzeTimeline);

}