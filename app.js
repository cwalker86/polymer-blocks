var express = require('express');

var app = express();

app.use(express.static('public'));
app.get('/cities', function(req, res) {
  var cities = ['New York', 'Miami', 'Denver', 'Seoul', 'Richmond'];
  res.json(cities);
});


module.exports = app;

