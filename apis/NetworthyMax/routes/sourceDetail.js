const controller = require("../controllers/sourceDetail");

module.exports = function(app) {
  
  app.get("/NetworthyMax/api/sourcedetail/:source_uuid", controller.get);
  app.post("/NetworthyMax/api/sourcedetail", controller.add);
  app.delete("/NetworthyMax/api/entries/:id",  controller.delete);
  app.delete("/NetworthyMax/api/sourcedetail/:id",  controller.sourceDelete);

}