var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var Task = require('./taskSchema')
var app = express();
app.use(bodyParser.json());
app.use( bodyParser.urlencoded({ extended: false}))
/* GET home page. */
router.get('/', function(req, res, next) {
  Task.find({},function(err,task){
  console.log(task);
  res.render('viewAllTask',{tasks: task})
  })



});

module.exports = router;
