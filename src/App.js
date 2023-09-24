import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import AddTaskForm from "./components/AddTaskForm";
import UpdateForm from "./components/UpdateForm";
import Todo from "./components/Todo";
import "./App.css";
import Tabs from "./components/Tabs";

function App() {
  const [todo, setTodo] = useState([
    // { id: 1, title: "First task", status: false },
    // { id: 2, title: "second task", status: false },
  ]);

  const [newTask, setNewtask] = useState("");
  const [updateData, setUpdateData] = useState("");
  const [toogleState, setToogleState] = useState(1);

  const addTask = () => {
    if (newTask) {
      let num = todo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setTodo([...todo, newEntry]);
      setNewtask("");
    }
  };

  const deleteTask = (id) => {
    let newTasks = todo.filter((task) => task.id !== id);
    setTodo(newTasks);
  };

  const markDone = (id) => {
    let newTask = todo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });

    setTodo(newTask);
  };

  const cancelUpdate = () => {
    setUpdateData("");
  };

  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };

    setUpdateData(newEntry);
  };

  const updateTask = () => {
    let filterRecords = [...todo].filter((task) => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData];
    setTodo(updatedObject);
    setUpdateData("");
  };

  const handleTodoData = (state) => {
    if (state === 1) return todo;
    if (state === 2) return todo.filter((t) => t.status === true);
    if (state === 3) return todo.filter((t) => t.status === false);
  };

  return (
    <div className="container App">
      <br></br>
      <h2>To Do List</h2>
      <br></br>

      {/* uppdate Task */}
      {updateData && updateData ? (
        <>
          <UpdateForm
            updateData={updateData}
            changeTask={changeTask}
            updateTask={updateTask}
            cancelUpdate={cancelUpdate}
          />
        </>
      ) : (
        <>
          <AddTaskForm
            newTask={newTask}
            setNewtask={setNewtask}
            addTask={addTask}
          />
        </>
      )}

      {todo && todo.length ? "" : "No Tasks Yet..."}
      <Tabs toogleState={toogleState} setToggleState={setToogleState} />

      <Todo
        todo={handleTodoData(toogleState)}
        markDone={markDone}
        updateData={updateData}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
