      //require packages
const express     = require('express'),
      bodyParser  = require('body-parser'),
      //creates the express app
      app         = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//configure database
const dbConfig = require('./config/db.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Testing connection
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Mark's Web First API"});
});

//connecting to the db
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

// Require Trip routes
require('./app/routes/trip.routes.js')(app);

app.listen(process.env.PORT || 3000 , () => {
    console.log("Server has started");
});
