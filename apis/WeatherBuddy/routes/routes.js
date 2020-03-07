const controller = require("../controllers/controllers");

module.exports = function(app) {

    //Redis routes
    app.get("/WeatherBuddy/api/savedCitiesGet/:city", controller.savedCitiesGet);
    app.get("/WeatherBuddy/api/savedCitiesGetAll", controller.savedCitiesGetAll);
    app.get("/WeatherBuddy/api/savedCitiesAdd/:city", controller.savedCitiesAdd);
    app.get("/WeatherBuddy/api/savedCitiesDelete/:city", controller.savedCitiesDelete);

    //Openweatherapi routes
    app.get("/WeatherBuddy/api/:city", controller.getCityWeather);
    
}