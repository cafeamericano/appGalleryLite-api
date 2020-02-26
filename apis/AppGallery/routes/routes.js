  
const controller = require("../controllers/controllers");

module.exports = function(app) {
    app.get("/AppGalleryLite/api/applications", controller.getApplications);
    app.get("/AppGalleryLite/api/keywords", controller.getKeywords);
}