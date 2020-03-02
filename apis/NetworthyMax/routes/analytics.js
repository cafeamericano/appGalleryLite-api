const controller = require("../controllers/analytics");

module.exports = function(app) {
  
  app.get("/NetworthyMax/api/assetbreakdown/:userid", controller.analyzeAssetBreakdown);
  app.get("/NetworthyMax/api/timeline/:userid", controller.analyzeTimeline);

}