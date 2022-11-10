const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    require: true,
  },

  check: {
    type: Boolean,
    default: false,
  },
  completeAt: {
    type: Date,
    default: Date.now(),
  },

  date: {
    type: Date,
    default: Date.now(),
  },

  updateAt: {
    type: Date,

    default: Date.now(),
  },
});


module.exports = mongoose.model("Task", taskSchema);
