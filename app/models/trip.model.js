const mongoose = require('mongoose');

const TripSchema = mongoose.Schema({
    location: String,
    riders: String,
    duration: String,
    driver: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Trip', TripSchema);
