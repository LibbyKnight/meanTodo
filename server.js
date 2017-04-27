//Dependencies

var express = require('express');

var app = express();
var bodyParser = require('body-parser');
var PORT = 3000;

// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/meanTodos", function(err, db) {
	if(!err) {
		console.log("We are connected, y0");
	}

  	app.use(express.static('public'));
  	app.use(bodyParser.json());

	app.post('/api/todos', function(req, res) {
		if (!req.body) {
			return res.sendStatus(400)
		}	

		var collection = db.collection("todos");
		var doc = {
			task: req.body.task, 
			dueDate: req.body.dueDate
		};

		collection.insert(doc, function(err, result){
			res.send("Added stuff, y0");
		});
	});

// Endpoint to get data from db
	app.get('/api/todos', function(req, res) {
		var collection = db.collection("todos");
		collection.find({}).toArray(function(err, result){
			res.send(result);
		});
	});

	app.listen(PORT, function() {
		console.log("Listening on port " + PORT);
	});
});





