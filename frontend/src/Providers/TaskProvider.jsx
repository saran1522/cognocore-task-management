import { createContext, useContext, useEffect, useState } from "react";
import { addTask, deleteTask, getTasks, updateTask } from "../api";

const TaskContext = createContext();

export default function TaskProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [query, setQuery] = useState("");
  const [addTaskModal, setAddTaskModal] = useState(false);
  const [allTasks, setAllTasks] = useState(null);
  const displayTasks =
    allTasks &&
    allTasks?.length > 0 &&
    allTasks.filter((task) =>
      task.title.toLowerCase().includes(query.toLowerCase())
    );

  const handleThemeChange = () =>
    setTheme(theme === "light" ? "dark" : "light");

  const handleSearchQuery = (e) => setQuery(e.target.value);

  const handleAddTaskModal = (value) => {
    setAddTaskModal(value);
  };

  const handleAddNewTask = async (newTask) => {
    const tasks = await addTask(newTask);
    setAllTasks(tasks?.data);
  };
  const handleUpdateTask = async (task, taskId) => {
    const tasks = await updateTask(task, taskId);
    setAllTasks(tasks?.data);
  };
  const handleDeleteTask = async (taskId) => {
    const tasks = await deleteTask(taskId);
    setAllTasks(tasks?.data);
  };

  useEffect(() => {
    const getAllTasks = async () => {
      const tasks = await getTasks();
      setAllTasks(tasks || []);
    };
    getAllTasks();
  }, []);

  return (
    <TaskContext.Provider
      value={{
        allTasks,
        displayTasks,
        query,
        theme,
        addTaskModal,
        handleSearchQuery,
        handleThemeChange,
        handleAddTaskModal,
        handleAddNewTask,
        handleUpdateTask,
        handleDeleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTask() {
  const context = useContext(TaskContext);
  if (!context) console.log("useTask must be used within TaskContext");
  return context;
}
