const mongoose = require("mongoose");

//create schema
const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
});

//create model - instance of the model is called a document
module.exports = mongoose.model("Task", TaskSchema);
