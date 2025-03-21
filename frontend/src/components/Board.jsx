import React from "react";
import TaskContainer from "./TaskContainer";
import { useTask } from "../Providers/TaskProvider";

function Board() {
  const { allTasks, displayTasks } = useTask();

  if (allTasks && allTasks.length === 0)
    return (
      <div className="flex flex-1 justify-center items-center text-7xl text-slate-200 mt-20 font-bold dark:text-slate-800">
        Start adding tasks
      </div>
    );

  const todo = displayTasks.filter((task) => task.status === "todo");
  const inprogress = displayTasks.filter(
    (task) => task.status === "inprogress"
  );
  const done = displayTasks.filter((task) => task.status === "done");

  return (
    <div className="flex flex-1 gap-8 p-8 max-md:p-4 overflow-x-scroll">
      <TaskContainer Status="To Do" tasks={todo} />
      <TaskContainer Status="In Progress" tasks={inprogress} />
      <TaskContainer Status="Done" tasks={done} />
    </div>
  );
}

export default Board;
