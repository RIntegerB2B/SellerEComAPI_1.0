var express = require('express'),
  app = express(),
  port = process.env.PORT || 3005,
  bodyParser = require('body-parser');
  var mysql = require('mysql');
var cors = require('cors');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors());
var contentUploadRoutes = require('../api/routes/contentUploadRoutes'); //importing route
var contentViewRoutes = require('../api/routes/contentViewRoute'); //importing route
contentUploadRoutes(app); //register the route
//contentViewRoutes(app);
app.listen(port);


var mongoDbConfig = require('../api/config/mongoDatabase.config');
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



contentUploadRoutes(app);
contentViewRoutes(app);

console.log('Seller ECom RESTful API server started on: ' + port);

