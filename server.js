//Dependencies

var express = require('express');

var app = express();

var PORT = 3000;

// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/meanTodos", function(err, db) {
  if(!err) {
    console.log("We are connected, y0");
  }

  	app.use(express.static('public'));


	app.post('/api/todos', function(req, res) {
		var collection = db.collection("todos");
		var doc = {task: 'test1', dueDate: 'today', completed: false};

			/*collection.insert(doc, function(err, ressult){
				res.send("added, yo");
			});*/

	});


	app.listen(PORT, function() {
		console.log("Listening on port " + PORT);
	});
});




