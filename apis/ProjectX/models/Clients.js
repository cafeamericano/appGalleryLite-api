var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ClientsSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    middle_name: {
        type: String,
        required: false
    },
    last_name: {
        type: String,
        required: true
    },
    birthday: {
        type: String,
        required: false
    },
    ssn: {
        type: String,
        required: false
    },
    gender: {
        type: String,
        required: false
    },
    home_phone: {
        type: String,
        required: false
    },
    cell_phone: {
        type: String,
        required: false
    },
    work_phone: {
        type: String,
        required: false
    },
    street_address: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    state: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    },
    credit_card_number: {
        type: String,
        required: false
    },
    credit_card_type: {
        type: String,
        required: false
    },
    credit_card_name: {
        type: String,
        required: false
    },
    credit_card_expiration: {
        type: String,
        required: false
    },
    credit_card_bank: {
        type: String,
        required: false
    }
});

// Create model using defined schema
var Clients = mongoose.model("Clients", ClientsSchema);

module.exports = Clients;