const API_URL = "http://localhost:3000/api";

export async function getTasks() {
  try {
    const allTasks = await fetch(`${API_URL}/alltasks`);
    return await allTasks.json();
  } catch (error) {
    console.log(error.message);
  }
}
export async function addTask(newTask) {
  try {
    const allTasks = await fetch(`${API_URL}/createtask`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });
    return await allTasks.json();
  } catch (error) {
    console.log(error.message);
  }
}
export async function updateTask(task, taskId) {
  try {
    const allTasks = await fetch(`${API_URL}/updatetask/${taskId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    return await allTasks.json();
  } catch (error) {
    console.log(error.message);
  }
}
export async function deleteTask(taskId) {
  try {
    const allTasks = await fetch(`${API_URL}/deletetask/${taskId}`, {
      method: "DELETE",
    });
    return await allTasks.json();
  } catch (error) {
    console.log(error.message);
  }
}
