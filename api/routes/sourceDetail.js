const controller = require("../controllers/sourceDetail");

module.exports = function(app) {
  
  app.get("/NetworthyLite/api/sourcedetail/:source_uuid", controller.get);
  app.post("/NetworthyLite/api/sourcedetail", controller.add);
  app.delete("/NetworthyLite/api/entries/:id",  controller.delete);

}