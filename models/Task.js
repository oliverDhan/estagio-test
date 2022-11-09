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

/*const model = new Schema({
  body: {
    type: String,
    require: true,
  },
  completed: {
    type: String,
    require: true,
  },
  comepletedAt: {
    type: Date,
    default: Date.now(),
  },

  createAt: {
    type: Date,
  },
});*/

module.exports = mongoose.model("Task", taskSchema);
