"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let nextId = 1;
// 3. Required Core Operations
function addTask(tasks, title) {
    const newTask = {
        id: nextId++,
        title,
        status: "todo",
    };
    return [...tasks, newTask];
}
function completeTask(tasks, id) {
    return tasks.map((task) => task.id === id ? { ...task, status: "done" } : task);
}
function filterByStatus(tasks, status) {
    return tasks.filter((task) => task.status === status);
}
// 4. Custom Original Operations
function deleteTask(tasks, id) {
    return tasks.filter((task) => task.id !== id);
}
function advanceTask(tasks, id) {
    return tasks.map((task) => {
        if (task.id !== id)
            return task;
        if (task.status === "todo") {
            return { ...task, status: "in-progress" };
        }
        else if (task.status === "in-progress") {
            return { ...task, status: "done" };
        }
        return task;
    });
}
//# sourceMappingURL=model.js.map