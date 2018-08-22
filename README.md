# My First Web Api

This is the skeleton of a RESTful webAPI I have created for a client.
The web API will be used to track a client's employees as they conduct 'trips' for business.
Each trip consists of a Location, Driver, # of Passengers, and trip duration.
A timestamp is also added to see when each trip was created and last updated.

## Requirements

  This project requires that users have a localized version of `MongoDB` installed as well as `NodeJS`.

## Deployment Instructions

1. Please clone or download this repo.
2. Use the command line to cd into the firstWebApi folder.
3. Run a local instance of MongoDB using the `mongod` command where the db is stored.
4. Run `node server.js` or `npm run start`.
5. (Install then) Use Postman to begin testing the connectivity of the API.

## General Endpoints

### Testing Connectivity

  ` GET / `

  This should return a JSON object with the message

  `{"message": "Welcome to Mark's First Web API"}`

### Retrieve All Trips

  ` GET /trips `

  This should return a JSON object with all of the trips taken

### Post A New Trip

  ` POST /trips `

 This will post a new trip to the Web API.
 Each trip that POSTs is required to have the following input data:

  ```  
    1. location   - or in what location the trip began
    2. riders     - number of passengers in the vehicle for this trip
    3. duration   - the duration, in minutes, that the trip took upon it's conclusion
    4. driver     - the name of the driver who was in charge of the vehicle
  ```

  Each trip will then post to the DB with a unique ID that can be accessed in the `GET` requests below

  This data is received by the API as follows:

  ```
  1. location   - req.body.location
  2. riders     - req.body.riders
  3. duration   - req.body.duration
  4. driver     - req.body.driver
  ```

### Retrieve Specific Trip

  ` GET /trips/:tripId `

  This should retrieve a JSON object with a specific trip Id

### Update A Trip

  ` PUT /trips/:tripId `

  This should will allow a user to update a specific trip ID

### Delete A Trip

  ` DELETE /trips/:tripId `

 This will delete a specific trip whose tripId is passed inside
