import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useTask } from "../Providers/TaskProvider";

function AddTaskModal({ task, setShow }) {
  const [currTask, setTask] = useState(
    task || {
      title: "",
      description: "",
      assignee: "",
      status: "todo",
      priority: "low",
      due: new Date(),
    }
  );
  const { handleAddTaskModal, handleAddNewTask, handleUpdateTask } = useTask();

  const handleCloseModal = () => {
    if (task) setShow(false);
    else handleAddTaskModal(false);
  };

  const handleButtonClick = () => {
    if (
      !currTask.title ||
      !currTask.description ||
      !currTask.assignee ||
      !currTask.status ||
      !currTask.priority ||
      !currTask.due
    ) {
      alert("All fields are required");
      return;
    }
    if (task) {
      handleUpdateTask(currTask, task._id);
      setShow(false);
    } else {
      handleAddNewTask(currTask);
      handleAddTaskModal();
    }
  };
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-[#e5e5e5d0] dark:bg-[#17161bcc] flex items-center justify-center">
      <div className="p-6 flex flex-col gap-4 rounded-xl bg-white dark:bg-[#060610] min-w-[500px]">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Add A New Task</h3>
          <IoClose
            onClick={handleCloseModal}
            size={25}
            className="cursor-pointer"
          />
        </div>
        <input
          type="text"
          name="title"
          className="bg-transparent border border-gray-300 dark:border-gray-800 px-3 py-2 rounded-lg"
          placeholder="title"
          value={currTask.title}
          onChange={(e) => setTask({ ...currTask, title: e.target.value })}
        />
        <textarea
          type="text"
          name="description"
          className="bg-transparent border border-gray-300 dark:border-gray-800 px-3 py-2 rounded-lg"
          placeholder="description..."
          value={currTask.description}
          onChange={(e) =>
            setTask({ ...currTask, description: e.target.value })
          }
        />
        <input
          type="text"
          name="assignee"
          className="bg-transparent border border-gray-300 dark:border-gray-800 px-3 py-2 rounded-lg"
          placeholder="assignee"
          value={currTask.assignee}
          onChange={(e) => setTask({ ...currTask, assignee: e.target.value })}
        />
        <select
          name="priority"
          id="priority"
          className="bg-transparent dark:bg-[#060610] border border-gray-300 dark:border-gray-800 px-3 py-2 rounded-lg "
          value={currTask.priority}
          onChange={(e) => setTask({ ...currTask, priority: e.target.value })}
        >
          <option value="low" className="text-gray-800 dark:text-gray-200">
            low
          </option>
          <option value="medium" className="text-gray-800 dark:text-gray-300">
            medium
          </option>
          <option value="high" className="text-gray-800 dark:text-gray-300">
            high
          </option>
        </select>
        <select
          name="status"
          id="status"
          className="bg-transparent dark:bg-[#060610] border border-gray-300 dark:border-gray-800 px-3 py-2 rounded-lg"
          value={currTask.status}
          onChange={(e) => setTask({ ...currTask, status: e.target.value })}
        >
          <option value="todo" className="text-gray-800 dark:text-gray-200">
            To Do
          </option>
          <option
            value="inprogress"
            className="text-gray-800 dark:text-gray-300"
          >
            In Progress
          </option>
          <option value="done" className="text-gray-800 dark:text-gray-300">
            Done
          </option>
        </select>
        <input
          type="date"
          name="due"
          className="bg-transparent border border-gray-300 dark:border-gray-800 px-3 py-2 rounded-lg "
          value={currTask.due.toISOString().split("T")[0]}
          onChange={(e) =>
            setTask({ ...currTask, due: new Date(e.target.value) })
          }
        />
        <div className="w-full ">
          <button
            type="submit"
            className="rounded-lg px-4 py-2 bg-gradient-to-b from-emerald-400 to-emerald-500 text-gray-800"
            onClick={handleButtonClick}
          >
            {task ? "Update Task" : "Add Task"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTaskModal;
