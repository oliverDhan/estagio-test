const Task = require("../models/Task");

const getALLtask = async (req, res) => {
  try {
    const taskList = await Task.find();
    return res.render("index", {taskList});
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const createTask = async (req, res) => {
  const task = req.body;

  if (!task.task) {
    return res.redirect("/api");
  }
  try {
    await Task.create(task);
    return res.redirect("/api");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
module.exports = {
  getALLtask,
  createTask,
};
