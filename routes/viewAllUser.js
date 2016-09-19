var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var User = require('./db');
var app = express();
app.use(bodyParser.json());
app.use( bodyParser.urlencoded({ extended: false}))
/* GET home page. */
router.get('/', function(req, res, next) {
  User.find({usertype: 'normal'},function(err,user){
  console.log(user);
  res.render('viewAllUser',{users: user});
});



});

module.exports = router;
