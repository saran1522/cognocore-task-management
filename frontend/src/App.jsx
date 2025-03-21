import React from "react";
import Navbar from "./components/Navbar";
import Board from "./components/Board";
import { useTask } from "./Providers/TaskProvider";
import AddButton from "./components/AddButton";
import AddTaskModal from "./components/AddTaskModal";
import Search from "./components/Search";
import { PiHandSwipeLeftLight } from "react-icons/pi";

function App() {
  const { allTasks, theme, addTaskModal } = useTask();

  return (
    <div
      className={`${
        theme === "dark" ? "dark" : ""
      } w-full bg-white text-gray-800 dark:bg-[#060610] dark:text-slate-200 min-h-screen`}
    >
      <Navbar />
      {!allTasks ? (
        <div className="absolute top-0 left-0 flex flex-col justify-center items-center h-screen w-full">
          <p className="text-2xl block">
            Please wait, loading data from the backend. It may take some time
          </p>
          <img src="loading.gif" alt="" className="block" />
        </div>
      ) : (
        <>
          <div className="w-full flex items-center justify-between gap-4 mt-5 px-2">
            <div className="md:hidden">
              <Search />
            </div>
            <AddButton />
          </div>
          <span className="w-full flex items-center justify-end gap-2 px-4 pt-4 text-gray-500 lg:hidden">
            swipe left <PiHandSwipeLeftLight />
          </span>
          <Board />
          {addTaskModal && <AddTaskModal />}
        </>
      )}
    </div>
  );
}

export default App;
