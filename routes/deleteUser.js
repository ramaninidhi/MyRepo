var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var User = require('./db')
var app = express();
app.use(bodyParser.json());
app.use( bodyParser.urlencoded({ extended: false}))
/* GET home page. */
router.get('/', function(req, res, next) {
  User.findOneAndRemove({name: req.query.id},function(err,user){
  console.log(user);
  res.redirect('viewAllUser')
  })



});
module.exports = router;
