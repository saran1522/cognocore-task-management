import { Task } from "../models/task.model.js";

export async function getAllTasks(req, res) {
  try {
    const allTasks = await Task.find();
    res.status(200).json(allTasks);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
}

export async function createTask(req, res) {
  try {
    const { title, description, assignee, status, priority, due } = req.body;
    if (!title || !description || !assignee || !status || !priority || !due) {
      return res.status(400).json({ message: "All fields are required" });
    }

    await Task.create({
      title,
      description,
      assignee,
      status,
      priority,
      due,
    });

    const allTasks = await Task.find();

    res
      .status(201)
      .json({ data: allTasks, message: "Task created successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
}

export async function updateTask(req, res) {
  try {
    const { id } = req.params;
    const existedTask = req.body;
    if (!existedTask) {
      return res.status(400).json({ message: "Task is required" });
    }
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    task.title = existedTask.title || task.title;
    task.description = existedTask.description || task.description;
    task.assignee = existedTask.assignee || task.assignee;
    task.status = existedTask.status || task.status;
    task.priority = existedTask.priority || task.priority;
    task.due = existedTask.due || task.due;
    await task.save();

    const allTasks = await Task.find();
    res
      .status(200)
      .json({ data: allTasks, message: "Task status updated successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
}

export async function deleteTask(req, res) {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    await task.deleteOne();

    const allTasks = await Task.find();
    res
      .status(200)
      .json({ data: allTasks, message: "Task deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
}
