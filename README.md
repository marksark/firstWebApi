# My First Web Api

This is the skeleton of a RESTful webAPI I have created for a client.
The web API will be used to track a client's employees as they conduct 'trips' for business.
Each trip consists of a Location, Driver, # of Passengers, and trip duration.
A timestamp is also added to see when each trip was created and last updated.

## General Endpoints

### Test Connectivity

  ` GET / `

  This should return a JSON object with the message

  `{"message": "Welcome to Mark's First Web API"}`

### Retrieve All Trips

  ` GET /trips `
  
  This should return a JSON object with all of the trips taken

### Post A New Trip

  ` POST /trips `
 
 This will post a new trip to the Web API

### Retrieve Specific Trip

  ` GET /trips/:tripId `
  
  This should retrieve a JSON object with a specific trip Id

### Update A Trip

  ` PUT /trips/:tripId `
  
  This should will allow a user to update a specific trip ID

### Delete A Trip

  ` Delete /trips/:tripId `
 
 This will delete a specific trip whose tripId is passed inside
