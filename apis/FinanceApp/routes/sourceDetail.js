const controller = require("../controllers/sourceDetail.js");

module.exports = function(app) {
  
  app.get("/api/sourcedetail/:source_uuid", controller.entryGet);
  app.post("/api/sourcedetail", controller.entryAdd);
  app.delete("/api/entries/:id",  controller.entryDelete);

}