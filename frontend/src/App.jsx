import React from "react";
import Navbar from "./components/Navbar";
import Board from "./components/Board";
import { useTask } from "./Providers/TaskProvider";
import AddButton from "./components/AddButton";
import AddTaskModal from "./components/AddTaskModal";

function App() {
  const { theme, addTaskModal } = useTask();
  return (
    <div
      className={`${
        theme === "dark" ? "dark" : ""
      } w-full bg-white text-gray-800 dark:bg-[#060610] dark:text-slate-200 min-h-screen`}
    >
      <Navbar />
      <AddButton />
      <Board />
      {addTaskModal && <AddTaskModal />}
    </div>
  );
}

export default App;
