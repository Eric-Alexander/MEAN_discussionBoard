
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static(__dirname+'/bower_components'));

app.use(express.static(__dirname+"/client"));

// Require mongoose config file
require('./server/config/mongoose.js')

require('./server/config/routes.js')(app);

// Requiring mongoose controllers for use in routes
// var Users = require('./server/controllers/usersController.js');
// var Topic = require('./server/controllers/topicsController.js');
// var Post = require('./server/controllers/postsController.js');
// var Comment = require('./server/controllers/commentsController.js');


var server = app.listen(8000, function(){
	console.log("APPLICATION IS DEFINITLEY LISTENING...8000");
});
