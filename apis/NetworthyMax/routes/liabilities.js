const controller = require("../controllers/liabilities");

module.exports = function(app) {
  
  app.get("/NetworthyMax/api/liabilities/:user_uuid", controller.get);
  app.post("/NetworthyMax/api/liabilities", controller.add);
  app.delete("/NetworthyMax/api/liabilities/:source_uuid", controller.delete);

}