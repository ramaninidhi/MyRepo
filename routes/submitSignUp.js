var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var User = require('./db')
var app = express()
app.use(bodyParser.json());
app.use( bodyParser.urlencoded({ extended: false}))

/* GET home page. */
router.post('/', function(req, res, next) {
  var user = new User({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    usertype: 'normal'
  })

  user.save(function(err){
    console.log("saved successfully");
  })
  res.render('submitSignUp', { usertype: 'normal' });

});




module.exports = router;
