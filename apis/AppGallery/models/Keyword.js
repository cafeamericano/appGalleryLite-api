var mongoose = require('mongoose');
var thisConnection = require('../../../server').AppGalleryLite

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
var Keyword = thisConnection.model("Keyword", KeywordSchema);

module.exports = Keyword;
