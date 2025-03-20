import React, { useState } from "react";
import "../components/DragDrop.css";

const DragDrop = () => {
  const TODO = "TODO";
  const DOING = "DOING";
  const DONE = "DONE";

  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [dragTask, setDragTask] = useState(null);
  const [editId, setEditId] = useState(null);

  // Input change
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // Task add/edit on Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && value.trim()) {
      if (editId !== null) {
        // Editing existing task
        setTasks((prev) =>
          prev.map((task) =>
            task.id === editId ? { ...task, title: value } : task
          )
        );
        setEditId(null);
      } else {
        // Adding new task
        setTasks([...tasks, { title: value, status: TODO, id: Date.now() }]);
      }
      setValue("");
    }
  };

  // Edit Task
  const handleEdit = (id, title) => {
    setValue(title);
    setEditId(id);
  };

  // Delete Task
  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Drag start
  const handleDrag = (task) => {
    setDragTask(task);
  };

  // Drop Logic
  const handleDrop = (e) => {
    const status = e.target.getAttribute("data-status");
    if (!dragTask || !status) return;

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === dragTask.id ? { ...task, status } : task
      )
    );
    setDragTask(null);
  };

  return (
    <div>
      <div className="heading">
        <h1>Task Manager</h1>
        <input
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="inp"
          type="text"
          placeholder="Enter your task"
        />
      </div>

      <div className="board">
        {/* Todo Column */}
        <div
          className="todo"
          data-status={TODO}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <h1 className="todo-col">Todo</h1>
          {tasks.map(
            (task) =>
              task.status === TODO && (
                <div
                  draggable
                  key={task.id}
                  onDragStart={() => handleDrag(task)}
                  className="task-item"
                >
                  {task.title}
                  <div className="btns">
                    <span className="btn" onClick={() => handleEdit(task.id, task.title)}>
                      <i className="ri-pencil-line"></i>
                    </span>
                    <span className="btn" onClick={() => handleDelete(task.id)}>
                      <i className="ri-delete-bin-line"></i>
                    </span>
                  </div>
                </div>
              )
          )}
        </div>

        {/* Doing Column */}
        <div
          className="doing"
          data-status={DOING}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <h1 className="doing-col">Doing</h1>
          {tasks.map(
            (task) =>
              task.status === DOING && (
                <div
                  draggable
                  key={task.id}
                  onDragStart={() => handleDrag(task)}
                  className="task-item"
                >
                  {task.title}
                  <div className="btns">
                    <span className="btn" onClick={() => handleEdit(task.id, task.title)}>
                      <i className="ri-pencil-line"></i>
                    </span>
                    <span className="btn" onClick={() => handleDelete(task.id)}>
                      <i className="ri-delete-bin-line"></i>
                    </span>
                  </div>
                </div>
              )
          )}
        </div>

        {/* Done Column */}
        <div
          className="done"
          data-status={DONE}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <h1 className="done-col">Done</h1>
          {tasks.map(
            (task) =>
              task.status === DONE && (
                <div
                  draggable
                  key={task.id}
                  onDragStart={() => handleDrag(task)}
                  className="task-item"
                >
                  {task.title}
                  <div className="btns">
                    <span className="btn" onClick={() => handleEdit(task.id, task.title)}>
                      <i className="ri-pencil-line"></i>
                    </span>
                    <span className="btn" onClick={() => handleDelete(task.id)}>
                      <i className="ri-delete-bin-line"></i>
                    </span>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default DragDrop;
