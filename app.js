var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs

// make express look in the public directory for assets (css/js/img)

// set the home page route
app.get('/', function(req, res) {

	// ejs render automatically looks in the views folder
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});
