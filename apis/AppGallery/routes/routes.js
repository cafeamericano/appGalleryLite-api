  
const controller = require("../controllers/controllers");

module.exports = function(app) {
    app.get("/AppGallery/api/applications", controller.getApplications);
    app.get("/AppGallery/api/keywords", controller.getKeywords);
}