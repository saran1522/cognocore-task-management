import React, { useState } from "react";
import { FaTrash, FaPen } from "react-icons/fa6";
import AddTaskModal from "./AddTaskModal";
import { useTask } from "../Providers/TaskProvider";

function Task({ task }) {
  const [show, setShow] = useState(false);
  const { handleDeleteTask } = useTask();
  task.due = new Date(task.due);
  return (
    <>
      <div
        className={`bg-white flex flex-col gap-4 shadow-lg rounded-lg p-3 w-full text-slate-500 text-sm dark:bg-[#060610]`}
      >
        <div className="flex justify-between items-center">
          <h4 className="text-lg font-medium text-gray-800 dark:text-gray-100">
            {task.title}
          </h4>
          <span
            className={`text-gray-800 px-2 py-1 rounded-md focus:outline-none ${
              task.priority === "low"
                ? "bg-green-400"
                : task.priority === "medium"
                ? "bg-orange-300"
                : "bg-red-400"
            }`}
          >
            {task.priority}
          </span>
        </div>
        <p>{task.description}</p>
        <div className="flex flex-col gap-1">
          <p>Due: {task.due.toDateString()}</p>
          <p>Assignee: {task.assignee}</p>
        </div>
        <div className="flex gap-6 justify-end text-gray-800 dark:text-gray-100">
          <FaPen onClick={() => setShow(true)} className="cursor-pointer" />
          <FaTrash
            onClick={() => handleDeleteTask(task._id)}
            className="cursor-pointer"
          />
        </div>
      </div>
      {show && <AddTaskModal task={task} setShow={setShow} />}
    </>
  );
}

export default Task;
