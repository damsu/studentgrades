
var express = require('express');
var bodyParser = require('body-parser');
//var books = require('./routes/books.js');
//var authors = require('./routes/authors.js');
var students = require('./routes/students.js');
var courses = require('./routes/courses.js');
var grades = require('./routes/grades.js');
var app = express();

// You can store key-value pairs in express, here we store the port setting
app.set('port', (process.env.PORT || 80));

// bodyParser needs to be configured for parsing JSON from HTTP body
app.use(bodyParser.json());

// Mount our routes behind /api/ prefix
//app.use('/api', books);
//app.use('/api', authors);
app.use('/api', students);
app.use('/api', courses);
app.use('/api', grades);

// Simple hello world route
app.get('/', function(req, res) {
    res.send("Hello world");
});

// start listening for incoming HTTP connections
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
