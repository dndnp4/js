var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.set('trust proxy', 1) // trust first proxy
// app.use(object) => req.object 이렇게 모든 코드에서 접근이 가능함
app.use(session({
  secret: 'sfjlw350fka04j1j4dnf94ndf939snmZ1',
  resave: false,
  saveUninitialized: true,
  //cookie: { secure: true }
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
// app.use((req,res,next)=>{
//   if(typeof req.session.uid === 'undefined' || req.session.uid === null){
//     res.redirect('/users/login')
//     return
//   }
//   next()
// })
//블루프린트
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;
