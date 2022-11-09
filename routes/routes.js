const routes = require("express").Router();
const TaskController = require("../controller/TaskController");

routes.get("/api", TaskController.getALLtask);
routes.post("/create", TaskController.createTask);
routes.get("/getById/:id/:method", TaskController.getById);
routes.post("/api/updateOne/:id", TaskController.updateOneTask);
routes.get("/deleteOne/:id", TaskController.deleteOneTask);
routes.get("/api/check/:id", TaskController.taskCheck);





module.exports = routes;
