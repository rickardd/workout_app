var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

var serveStatic = require('serve-static');

var index = require('./routes/index');
var auth = require('./routes/auth');
var users = require('./routes/users');
var workouts = require('./routes/workouts');
var exercises = require('./routes/exercises');
var journals = require('./routes/journals');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'dist'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(serveStatic(__dirname + '/dist')); // works
// app.use(express.static(path.join(__dirname, 'dist'))); // does not work. Looking for extra css and js files
app.use(cors());

app.use('/', index);
app.use('/auth', auth);
app.use('/user', users);
app.use('/workout', workouts);
app.use('/exercises', exercises);
app.use('/journal', journals);





// app.use(express.static('/dist', options))

// app.use(serveStatic(__dirname + "/dist"));
// app.use(serveStatic(__dirname + "/dist", {'index': ['index.html', 'index.htm']}));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// this line allows heroku to set the port
var port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});

module.exports = app;



