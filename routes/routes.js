  
const controller = require("../controllers/controllers");

module.exports = function(app) {
    app.get("/api/allclients", controller.getAll)
    app.get("/api/oneclient", controller.getOne)
}