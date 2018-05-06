const mongoose = require('mongoose');
var schema = new mongoose.Schema({ 
  todo: String },
  {
    timestamps: true
  });
var Todo = mongoose.model('Todolist', schema);

module.exports = Todo