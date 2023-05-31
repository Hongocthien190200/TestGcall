const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    ownerName: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Contact', contactSchema);