  
const controller = require("../controllers/controllers");

module.exports = function(app) {
    app.get("/projectx/api/clients/one", controller.getOne)
    app.get("/projectx/api/clients/multiple", controller.getMultiple)
}