const mongoose = require('mongoose');
var taskSchema = new mongoose.Schema({ 
  userId:String,
  task: String,
  status: String
   },
  {
    timestamps: true
  });

  var Task = mongoose.model('taskList', taskSchema);

module.exports = { Task }