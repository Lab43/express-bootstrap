var express = require('express')
  , morgan = require('morgan')
  , path = require('path')
  , favicon = require('serve-favicon')
  , bodyParser = require('body-parser')
  , cookieParser = require('cookie-parser')
  , swig = require('swig')
;



// =====================
// configure express app
// =====================

var app = express();

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
// disable swig template cache. express automatically caches templates in production
swig.setDefaults({ cache: false });

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
  res.render('index', {});
});

// send 404s to error handler
app.use(function(req, res, next) {
    var err = new Error('Page not found');
    err.status = 404;
    next(err);
});



// =============
// error handler
// =============

// development, include stack trace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production, no stacktrace
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});



// ======
// server
// ======

var server = app.listen(process.env.PORT || 3000, function() {
  console.log('Express server listening on port ' + server.address().port);
});

module.exports = server;
