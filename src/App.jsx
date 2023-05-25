import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList.";




function App() {
  const [tasks, setTasks] = useState([]);

    function addTask(task) {
      setTasks(prevTasks => [...prevTasks, task]);
    }

    function completeTask(index) {
      setTasks(prevTasks => {
        const newTasks = [...prevTasks];
        newTasks[index].completed = true;
        return newTasks;
      });
    }

    function deleteTask(index) {
      setTasks(prevTasks => {
        const newTasks = [...prevTasks];
        newTasks.splice(index, 1);
        return newTasks;
      });
    }
    


  return (
    <div className="container m-5 p-5 border">
      <TodoForm addTask={addTask} />
      <TodoList
        tasks={tasks}
        completeTask={completeTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
