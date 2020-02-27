  
const controller = require("../controllers/controllers");

module.exports = function(app) {
    app.get("/AppGalleryLite/api/clients/one", controller.getOne)
    app.get("/AppGalleryLite/api/clients/multiple", controller.getMultiple)
}