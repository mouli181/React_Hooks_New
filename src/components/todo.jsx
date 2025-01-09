import React, { useState } from "react";

function TodoList() {
    const [tasks, setTasks] = useState([]); // State to hold tasks
    const [newTask, setNewTask] = useState(""); // State to hold the new task

    // Add a new task
    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    };

    // Remove a task
    const removeTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>To-Do List</h1>
            <input
                type="text"
                value={newTask}
                placeholder="Add a new task"
                onChange={(e) => setNewTask(e.target.value)}
                style={{ padding: "10px", width: "200px", marginRight: "10px" }}
            />
            <button onClick={addTask} style={{ padding: "10px 20px" }}>
                Add
            </button>
            <ul style={{ listStyle: "none", padding: "0", marginTop: "20px" }}>
                {tasks.map((task, index) => (
                    <li key={index} style={{ margin: "10px 0" }}>
                        {task}
                        <button
                            onClick={() => removeTask(index)}
                            style={{
                                marginLeft: "20px",
                                padding: "5px 10px",
                                backgroundColor: "red",
                                color: "white",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer",
                            }}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
