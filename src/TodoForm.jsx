import React, { useState } from "react";

function TodoForm({ addTask }) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addTask({ title, completed: false });
    setTitle("");
  }

  return (
    <div className="container">
      <ul className="list-group">
        <form className="list-group" onSubmit={handleSubmit}>
          <li className="list-group-item">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button className="m-2 btn btn-primary" type="submit">
                Add Task
            </button>
          </li>
        </form>
      </ul>
    </div>
  );
}

export default TodoForm;
