const Trip = require('../models/trip.model.js');

// Create a new Trip
exports.create = (req, res) => {
  if(!req.body.riders) {
    return res.status(400).send({
      message: "Number of riders may not be empty"
    })
  }

  const trip = new Trip({
      location: req.body.location,
      riders: req.body.riders,
      duration: req.body.duration,
      driver: req.body.driver
  });

  //Save a new Trip
  trip.save()
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Oops! An error occured while submitting the trip"
      });
    });
};

// Retrieve and return all trips from the database.
exports.findAll = (req, res) => {
  Trip.find()
    .then(trips => {
      res.send(trips);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Oops! An error occured while retrieving the trips"
      });
    });
};

// Find a single Trip with a tripId
exports.findOne = (req, res) => {
  Trip.findById(req.params.tripId)
  .then(trip => {
    if(!trip) {
      return res.status(404).send({
        message: "Trip not found with the id " + req.params.tripId
      });
    }
    res.send(trip);
  }).catch(err => {
    if(err.kind === 'ObjectId') {
      return res.status(404).send({
           message: "Trip not found with id " + req.params.tripId
      });
    }
    return res.status(500).send({
         message: "Trip not found with id " + req.params.tripId
    })
  })
};

// Update a trip identified by the tripId in the request
exports.update = (req, res) => {
  //validate the request to be sure it exists
  if(!req.body.driver) {
    return res.status(400).send({
      message: "Name of driver can not be empty"
    });
  }

  Trip.findByIdAndUpdate(req.params.tripId, {
    location: req.body.location,
    riders: req.body.riders,
    duration: req.body.duration
  }, {new: true})
  .then(trip => {
    if(!trip) {
      return res.status(404).send({
        message: "Trip not found with id" + req.params.tripId
      });
    }
    res.send(trip);
  }).catch(err => {
    if(err.kind === 'ObjectId') {
      return res.status(404).send({
        message: "Trip not found with id" + req.params.tripId
      });
    }
    return res.status(500).send({
      message: "Error updating trip with id " + req.params.tripId
    });
  });
};

// Delete a trip with the specified tripId in the request
exports.delete = (req, res) => {
  Trip.findByIdAndRemove(req.params.tripId)
  .then(trip => {
    if(!trip) {
      return res.status(404).send({
        message: "Trip not found with the id " + req.params.tripId
      });
    }
    res.send({message: "Trip Deleted Successfully"});
  }).catch(err => {
    if(err.kind === 'ObjectId' || err.name === "NotFound") {
      return res.status(404).send({
        message: "Trip not found with id " +req.params.tripId
      });
    }
    return res.status(500).send({
      message: "Unable to delete trip with the id " + req.params.tripId
    });
  });
};
