var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var User = require('./db')
var app = express()
app.use(bodyParser.json());
app.use( bodyParser.urlencoded({ extended: false}))
/* GET home page. */
router.post('/', function(req, res, next) {
  User.find({name: req.body.username,password: req.body.password,usertype:req.body.usertype},function(err,user){
    if(user.length>0){
        if(user[0].usertype=='normal'){
          console.log(user);
          res.render('normalUser', { usertype: 'normal' })

        }
        else{

            res.render('adminUser', { usertype: 'normal' })
        }
      //  res.render('submitLogIn', { usertype: 'normal' });
    }
    else{
      console.log('not valid');
      res.render('normalLogIn', { usertype: 'normal' })
    }
  })



});

module.exports = router;
