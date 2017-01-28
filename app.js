// Require Express
var express = require('express');

// Create a webbserver "app" with express
var app = express();

app.use(express.static('www'));

app.listen(3000, function () {
  console.log('Express app listening on port 3000!');
});
