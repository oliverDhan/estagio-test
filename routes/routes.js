const routes = require("express").Router();
const TaskController = require("../controller/TaskController");

routes.get("/api", TaskController.getALLtask);
routes.post("/create", TaskController.createTask);

module.exports = routes;
