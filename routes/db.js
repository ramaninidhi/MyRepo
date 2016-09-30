var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create schema
var userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  usertype: String
});

//var User = mongoose.model('User',userSchema);
//module.exports = User;
