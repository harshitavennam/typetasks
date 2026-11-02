// 1. Literal Union Type
type TaskStatus = "todo" | "in-progress" | "done";

// 2. Task Interface
interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

let nextId = 1;

// 3. Required Core Operations
function addTask(tasks: Task[], title: string): Task[] {
  const newTask: Task = {
    id: nextId++,
    title,
    status: "todo",
  };
  return [...tasks, newTask];
}

function completeTask(tasks: Task[], id: number): Task[] {
  return tasks.map((task) =>
    task.id === id ? { ...task, status: "done" } : task
  );
}

function filterByStatus(tasks: Task[], status: TaskStatus): Task[] {
  return tasks.filter((task) => task.status === status);
}

// 4. Custom Original Operations
function deleteTask(tasks: Task[], id: number): Task[] {
  return tasks.filter((task) => task.id !== id);
}

function advanceTask(tasks: Task[], id: number): Task[] {
  return tasks.map((task) => {
    if (task.id !== id) return task;

    if (task.status === "todo") {
      return { ...task, status: "in-progress" };
    } else if (task.status === "in-progress") {
      return { ...task, status: "done" };
    }
    return task;
  });
}

