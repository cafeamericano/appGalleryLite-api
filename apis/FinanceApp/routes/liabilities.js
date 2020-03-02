const controller = require("../controllers/liabilities.js");

module.exports = function(app) {
  
  app.get("/api/liabilities/:user_uuid", controller.liabilitySourceGet);
  app.post("/api/liabilities", controller.liabilitySourceAdd);
  app.delete("/api/liabilities/:source_uuid", controller.liabilitySourceDelete);
  // app.delete("/api/sourcedetail/:id", controller.sourceDelete);

}