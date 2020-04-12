var mongoose = require('mongoose');
var thisConnection = require('../../../server').AppGalleryLite;

var Schema = mongoose.Schema;

var AppSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  isFeatured: {
    type: Boolean,
    required: true
  },
  isCollaboration: {
    type: Boolean,
    required: true
  },
  deployedLink: {
    type: String,
  },
  githubLink: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  keywords: {
    type: Array,
    required: true
  },
  imagePath: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  publishDate: {
      type: Date,
      required: true
  },
  supportStatus: {
      type: String,
      required: false
  },
  applicationType: {
      type: String,
      required: false
  }
});

// Create model using defined schema
var App = thisConnection.model("App", AppSchema);

module.exports = App;
