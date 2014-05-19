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



// ======
// server
// ======

var server = app.listen(process.env.PORT || 3000, function() {
  console.log('Express server listening on port ' + server.address().port);
});

module.exports = server;
