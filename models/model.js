const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    description: {
        required: false,
        type: String
    },
    day: {
        required: false,
        type: String
    },
    reminder: {
        required: false,
        type: Boolean
    }
});

module.exports = mongoose.model('Data', dataSchema)