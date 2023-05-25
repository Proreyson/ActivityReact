import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ tasks, completeTask, deleteTask }) {
  const handleComplete = (index) => {
    completeTask(index);
  };

  const handleDelete = (index) => {
    deleteTask(index);
  };

  const taskStyle = {
    textDecoration: tasks.completed ? "line-through" : "none",
  };

  return (
    <div className="container">
      <ul className="list-group-item">
        <h1 className="fw-bold m-3 text-center">List of tasks</h1>

        <li className="list-group-item">
          {tasks.map((task, index) => (
            <TodoItem
              key={index}
              task={task}
              index={index}
              completeTask={completeTask}
              deleteTask={deleteTask}
            />
          ))}
        </li>
      </ul>

      <div className="container">
        <li className="list-group-item" style={(taskStyle)}>
          Basketball
        </li>
        <button className="btn btn-success me-2" onClick={() => handleComplete(index)}>
          Complete
        </button>
        <button className="btn btn-danger"  onClick={() => handleDelete(index)}>
          Delete
        </button>

        <li className="list-group-item" style={(taskStyle)}>
          Valorant
        </li>
        <button className="btn btn-success me-2" onClick={() => handleComplete(index)}>
          Complete
        </button>
        <button className="btn btn-danger"  onClick={() => handleDelete(index)}>
          Delete
        </button>

        <li className="list-group-item" style={(taskStyle)}>
          Dota
        </li>
        <button className="btn btn-success me-2" onClick={() => handleComplete(index)}>
          Complete
        </button>
        <button className="btn btn-danger"  onClick={() => handleDelete(index)}>
          Delete
        </button>

        <li className="list-group-item" style={(taskStyle)}>
          Coding
        </li>
        <button className="btn btn-success me-2" onClick={() => handleComplete(index)}>
          Complete
        </button>
        <button className="btn btn-danger"  onClick={() => handleDelete(index)}>
          Delete
        </button>

        <li className="list-group-item" style={taskStyle}>
          Gym
        </li>
        <button className="btn btn-success me-2" onClick={() => handleComplete(index)}>
          Complete
        </button>
        <button className="btn btn-danger"  onClick={() => handleDelete(index)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoList;
