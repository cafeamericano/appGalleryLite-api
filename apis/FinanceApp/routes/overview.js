const controller = require("../controllers/overview.js");

module.exports = function(app) {

  app.get("/api/alluserentries/:user_uuid", controller.getAllForOne);
  app.get("/api/all", controller.getAllForAll);

}