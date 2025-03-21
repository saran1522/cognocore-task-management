import React from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { CgGoogleTasks } from "react-icons/cg";
import { useTask } from "../Providers/TaskProvider";
import Search from "./Search";

function Navbar() {
  const { theme, handleThemeChange } = useTask();
  return (
    <nav className="flex justify-between px-8 py-4 border-b border-gray-200 items-center dark:border-slate-800 max-md:px-4">
      <span className="flex items-center gap-1">
        <CgGoogleTasks size={30} className="text-indigo-400" />
        <p className="text-lg font-semibold">Task Manager</p>
      </span>
      <div className="flex gap-3 items-center">
        <div className="max-md:hidden">
          <Search />
        </div>
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
