const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//voter Schema
const VoterSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    middle_name: {
        type: String,
        required: true
    },
    serial_number: {
        type: String,
        required: true
    },
    polling_unit: {
        type: String,
        required: true
    },
    ward: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    marital_status: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
})

module.exports = Voter = mongoose.model('voter', VoterSchema); 