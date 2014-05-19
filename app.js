var express = require('express')
  , morgan = require('morgan')
  , path = require('path')
  , favicon = require('serve-favicon')
  , bodyParser = require('body-parser')
  , cookieParser = require('cookie-parser')
;



// =====================
// configure express app
// =====================

var app = express();

app.use(favicon(path.join(__dirname, 'public/favicon.ico')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use('/public', express.static(path.join(__dirname, 'public')));



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
