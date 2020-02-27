  
const controller = require("../controllers/controllers");

module.exports = function(app) {
    app.get("/ClientManagerApp/api/clients/one", controller.getOne)
    app.get("/ClientManagerApp/api/clients/multiple", controller.getMultiple)
}