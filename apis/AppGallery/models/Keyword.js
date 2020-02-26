var mongoose = require("mongoose");
var AppGallery = mongoose.createConnection(process.env.DB_URL_APPGALLERY);

var Schema = mongoose.Schema;

var KeywordSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  }
});

// Create model using defined schema
var Keyword = AppGallery.model("Keyword", KeywordSchema);

module.exports = Keyword;
