import React from "react";
import { useTask } from "../Providers/TaskProvider";

function Search() {
  const { query, handleSearchQuery } = useTask();
  return (
    <input
      type="text"
      className="border bg-transparent rounded-lg border-slate-400 px-3 py-2 focus:outline-none dark:border-gray-700 max-sm:max-w-[200px]"
      placeholder="search task"
      value={query}
      onChange={handleSearchQuery}
    />
  );
}

export default Search;
