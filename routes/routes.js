const routes = require ("express").Router();
const TaskController = require ("../controller/TaskController")


routes.get("/api", TaskController.getALL)

module.exports = routes 