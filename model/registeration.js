const mongoose = require("mongoose");

// Create a mongoose model
const RegistrationSchema = new mongoose.Schema({
    name: String,
    email: String,
});

const Registration = mongoose.model('Registration', RegistrationSchema);

module.exports = Registration;
