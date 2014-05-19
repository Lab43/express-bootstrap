var express = require('express');



// =====================
// configure express app
// =====================

var app = express();



// ======
// routes
// ======

app.get('/', function(req, res){
  res.send('hello world');
});



// ======
// server
// ======

var server = app.listen(process.env.PORT || 3000, function() {
  console.log('Express server listening on port ' + server.address().port);
});

module.exports = server;
