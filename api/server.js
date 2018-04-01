var express = require('express'),
  app = express(),
  port = process.env.PORT || 3006,
  bodyParser = require('body-parser');
  var cors = require('cors');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors());
//var contentUploadRoutes = require('../api/routes/contentUploadRoutes'); //importing route
var contentRoutes = require('./content/contentRoute');
var buyerAccountRoutes = require('./buyerAccount/buyerAccountRoute'); //importing route
var adminAccountRoutes = require('./adminAccount/adminAccountRoute');
contentRoutes(app); //register the route
buyerAccountRoutes(app);
adminAccountRoutes(app);
app.listen(port);


var mongoDbConfig = require('./config/mongoDatabase.config');
var mongoose = require('mongoose');

mongoose.connect(mongoDbConfig.url, {
});

mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
})
app.get('/listUsers', function (req, res) {
  res.end( "Asd" );
})

app.use(function (err, req, res, next) {
  console.error(err.stack);
  next(err);
})

console.log('Seller ECom RESTful API server started on: ' + port);

