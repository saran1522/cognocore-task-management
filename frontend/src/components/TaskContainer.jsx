import React from "react";
import Task from "./Task";

function TaskContainer({ Status, tasks }) {
  return (
    <section className="flex-1 flex flex-col gap-4">
      <h3
        className={`py-1 px-2 rounded-md w-fit font-semibold dark:text-gray-800 ${
          Status === "To Do"
            ? "bg-blue-400"
            : Status === "In Progress"
            ? "bg-yellow-300"
            : "bg-emerald-400"
        }`}
      >
        {Status}
      </h3>
      <div className="flex flex-col gap-4 items-center rounded-xl bg-slate-100 p-4 h-full min-h-[calc(100vh-200px)] dark:bg-[#18181e]">
        {tasks.map((task) => (
          <Task key={task._id} task={task} />
        ))}
      </div>
    </section>
  );
}

export default TaskContainer;
