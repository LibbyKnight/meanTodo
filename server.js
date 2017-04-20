//Dependencies

var express = require('express');

var app = express();

var PORT = 3000;



app.get('/', function(req, res) {
	res.sendfile('/meanTodo/index.html');
});

app.use(express.static(''))

app.listen(PORT, function() {
	console.log("Listening on port " + PORT);
})

