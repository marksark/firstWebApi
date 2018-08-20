module.exports = (app) => {
    const trip = require('../controllers/trip.controller.js');

    // Create a new Trip
    app.post('/trips', trip.create);

    // Retrieve all Trip
    app.get('/trips', trip.findAll);

    // Retrieve a single Trip with tripId
    app.get('/trips/:tripId', trip.findOne);

    // Update a Trip with tripId
    app.put('/trips/:tripId', trip.update);

    // Delete a Trip with tripId
    app.delete('/trips/:tripId', trip.delete);
}
