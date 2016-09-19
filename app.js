var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');
var signUp = require('./routes/signUp');
var normalLogIn = require('./routes/normalLogIn');
var adminLogIn = require('./routes/adminLogIn');
var submitLogIn = require('./routes/submitLogIn');
var submitSignUp = require('./routes/submitSignUp');
var normalUser = require('./routes/normalUser');
var adminUser = require('./routes/adminUser');
var createTask = require('./routes/createTask');
var submitCreateTask = require('./routes/submitCreateTask');
var viewAllTask = require('./routes/viewAllTask');
var viewAllUser = require('./routes/viewAllUser');
var viewExpiredTask = require('./routes/viewExpiredTask');
var viewRunningTask = require('./routes/viewRunningTask');
var config = require('./routes/config');
var deleteUser = require('./routes/deleteUser')

var app = express();

mongoose.connect('mongodb://localhost/myappdatabase');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/login',login);
app.use('/normalLogIn',normalLogIn);
app.use('/adminLogIn',adminLogIn);
app.use('/signUp',signUp);
app.use('/submitLogIn',submitLogIn);
app.use('/submitSignUp',submitSignUp);
app.use('/normalUser',normalUser);
app.use('/adminUser',adminUser);
app.use('/createTask',createTask);
app.use('/submitCreateTask',submitCreateTask);
app.use('/viewAllTask',viewAllTask);
app.use('/viewAllUser',viewAllUser);
app.use('/viewExpiredTask',viewExpiredTask);
app.use('/viewRunningTask',viewRunningTask);
app.use('/deleteUser',deleteUser)
app.use('/config',config);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


/*config is our configuration variable.*/
passport.use(new FacebookStrategy({
    clientID: config.facebook_api_key,
    clientSecret:config.facebook_api_secret ,
    callbackURL: config.callback_url
  },
  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
      //Check whether the User exists or not using profile.id
      if(config.use_database==='true')
      {
         //Further code of Database.
      }
      return done(null, profile);
    });
  }
));



// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(8081,function(){
  console.log("starting at 8081");
})

module.exports = app;
