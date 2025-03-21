import React from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { CgGoogleTasks } from "react-icons/cg";
import { useTask } from "../Providers/TaskProvider";

function Navbar() {
  const { query, theme, handleSearchQuery, handleThemeChange } = useTask();
  return (
    <nav className="flex justify-between px-8 py-4 border-b border-gray-200 items-center dark:border-slate-800 ">
      <span className="flex items-center gap-1">
        <CgGoogleTasks size={30} className="text-indigo-400" />
        <p className="text-lg font-semibold">Task Manager</p>
      </span>
      <div className="border-red-500 flex gap-3 items-center">
        <input
          type="text"
          className="border bg-transparent rounded-lg border-slate-400 px-3 py-2 focus:outline-none dark:border-gray-700"
          placeholder="search task"
          value={query}
          onChange={handleSearchQuery}
        />
        {theme === "dark" ? (
          <IoSunnyOutline
            size={20}
            className="cursor-pointer"
            onClick={handleThemeChange}
          />
        ) : (
          <IoMoonOutline
            size={20}
            className="cursor-pointer"
            onClick={handleThemeChange}
          />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
