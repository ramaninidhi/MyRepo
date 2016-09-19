var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var Task = require('./taskSchema')
var app = express()
app.use(bodyParser.json());
app.use( bodyParser.urlencoded({ extended: false}))

/* GET home page. */
router.post('/', function(req, res, next) {
  var task = new Task({
    taskName: req.body.taskName,
    taskStart: req.body.taskStart,
    taskEnd: req.body.taskEnd,
  })

  task.save(function(err){
    console.log("saved successfully");
  })
  res.render('normalUser', { usertype: 'normal' });

});
module.exports = router;
