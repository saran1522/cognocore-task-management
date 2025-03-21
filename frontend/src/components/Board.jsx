import React from "react";
import TaskContainer from "./TaskContainer";
import { useTask } from "../Providers/TaskProvider";

function Board() {
  const { displayTasks } = useTask();
  if (!displayTasks || displayTasks.length === 0)
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
    <div className="flex flex-1 gap-8 p-8">
      {displayTasks && displayTasks.length === 0 ? (
        <div className="flex flex-1 justify-center items-center text-gray-600">
          Start adding taskssss
        </div>
      ) : (
        <>
          <TaskContainer Status="To Do" tasks={todo} />
          <TaskContainer Status="In Progress" tasks={inprogress} />
          <TaskContainer Status="Done" tasks={done} />
        </>
      )}
    </div>
  );
}

export default Board;
