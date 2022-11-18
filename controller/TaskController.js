const { Model } = require("mongoose");
const Task = require("../models/Task");
const { route } = require("../routes/routes");

let message = "";
let type = "";

const getALLtask = async (req, res) => {
  try {
    setTimeout(() => {
      message = "";
    }, 1000);
    const taskList = await Task.find();
    console.log(taskList);
    return res.render("index", {
      taskList,
      task: null,
      taskDelete: null,
      message,
      type,
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const createTask = async (req, res) => {
  const task = req.body;

  if (!task.task) {
    message = "Insira um texto valido antes de adicionar a tarefa";
    type = "danger";
    return res.redirect("/api");
  }

  try {
    await Task.create(task);
    message = "tarefa criada com sucesso";
    type = "sucess";
    return res.redirect("/api");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const taskList = await Task.find();
    if (req.params.method == "update") {
      const task = await Task.findOne({ _id: req.params.id });
      res.render("index", { task, taskDelete: null, taskList, message, type });
    } else {
      const taskDelete = await Task.findOne({ _id: req.params.id });
      res.render("index", {
        task: null,
        taskDelete,
        taskList,

        message,
        type,
      });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const updateOneTask = async (req, res) => {
  try {
    const task = req.body;
    await Task.updateOne({ _id: req.params.id }, task);
    message = "tarefa atualizada com sucesso";
    type = "sucess";
    res.redirect("/api");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const deleteOneTask = async (req, res) => {
  try {
    await Task.deleteOne({ _id: req.params.id });
    message = "tarefa apagada com sucesso";
    type = "sucess";
    res.redirect("/api");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
const taskCheck = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id });

    if (task.check) {
      task.check = false;
    } else {
      task.check = true;
    }
    await Task.updateOne({ _id: req.params.id }, task);
    res.redirect("/api");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const model = async (req, res) => {
  const { page, pageSize } = req.params;
  const data = await Task.find()
    .skip(page * pageSize)
    .limit(pageSize);

  return res.json(data);
};

const deleteAllTask = async (req, res) => {
  try {
    await Task.deleteAll({ _id: req.params.id });
    message = "Todas as tarefas apagadas";
    type = "sucess";
    res.redirect("/api");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};
module.exports = {
  getALLtask,
  createTask,
  getById,
  updateOneTask,
  deleteOneTask,
  taskCheck,
  model,
};
