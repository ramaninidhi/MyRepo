var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create schema
var taskSchema = new Schema({
  taskName: String,
  taskStart: Date,
  taskEnd: Date
});

var Task = mongoose.model('Task',taskSchema);
module.exports = Task;
