const controller = require("../controllers/overview");

module.exports = function(app) {

  app.get("/NetworthyLite/api/alluserentries/:user_uuid", controller.getAllForOne);
  app.get("/NetworthyLite/api/all", controller.getAllForAll);

}