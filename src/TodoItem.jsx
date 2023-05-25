import React from "react";

function TodoItem({ task, index, completeTask, deleteTask}) {

  const handleComplete = () => {
    completeTask(index);
  };

  const handleDelete = () => {
    deleteTask(index);
  };

  const taskStyle = {
    textDecoration: task.completed ? "line-through" : "none",
  };


  return (
    <div className="container">
      <li
        className="list-group-item"
        style={taskStyle}
      >
        <div>
          <span>{task.title}</span>
          <div>
            <button
              className="btn btn-success me-2"
              onClick={handleComplete}
            >
              Complete
            </button>
            <button
              className="btn btn-danger"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </li>
    </div>
  );
}

export default TodoItem;
