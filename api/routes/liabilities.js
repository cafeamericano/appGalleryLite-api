const controller = require("../controllers/liabilities");

module.exports = function(app) {
  
  app.get("/NetworthyLite/api/liabilities/:user_uuid", controller.get);
  app.post("/NetworthyLite/api/liabilities", controller.add);
  app.delete("/NetworthyLite/api/liabilities/:source_uuid", controller.delete);

}