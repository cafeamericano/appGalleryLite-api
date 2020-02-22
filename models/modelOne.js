var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ClientSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    }
});

// Create model using defined schema
var Client = mongoose.model("Client", ClientSchema);

module.exports = Client;