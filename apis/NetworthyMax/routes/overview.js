const controller = require("../controllers/overview");

module.exports = function(app) {

  app.get("/NetworthyMax/api/alluserentries/:user_uuid", controller.getAllForOne);
  app.get("/NetworthyMax/api/all", controller.getAllForAll);

}