import { useTask } from "../Providers/TaskProvider";

function AddButton() {
  const { handleAddTaskModal } = useTask();
  return (
    <div className="mt-6 pr-10 w-full flex justify-end">
      <button
        className="rounded-lg text-gray-800 border-gray-800 bg-gradient-to-b from-indigo-400 to-indigo-500 px-4 py-2 font-semibold"
        onClick={() => handleAddTaskModal(true)}
      >
        Add Task +
      </button>
    </div>
  );
}

export default AddButton;
