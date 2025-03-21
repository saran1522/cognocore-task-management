import { Router } from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  updateTask,
} from "../controllers/task.controller.js";

const router = Router();

router.route("/alltasks").get(getAllTasks);
router.route("/createtask").post(createTask);
router.route("/updatetask/:id").patch(updateTask);
router.route("/deletetask/:id").delete(deleteTask);

export default router;
