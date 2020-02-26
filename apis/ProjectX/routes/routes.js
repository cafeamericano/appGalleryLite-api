  
const controller = require("../controllers/controllers");

module.exports = function(app) {
    app.get("/ProjectX/api/clients/one", controller.getOne)
    app.get("/ProjectX/api/clients/multiple", controller.getMultiple)
}