import React, { useState } from "react";

import "./App.sass";

import AddToDo from "./AddToDo";
import ShowToDos from "./ShowToDos";

function App() {
  const [toDos, setToDos] = useState({});

  const addToDo = ({ title, dueDate, status, description }) => {
    let id = Object.values(toDos).length + 1;
    setToDos({ ...toDos, [id]: { id, title, dueDate, status, description } });
  };
  const editToDo = ({ title, description, dueDate, status }) => {
    setToDos({
      ...toDos,
      title: title ? title : toDos.title,
      description: description ? description : toDos.description,
      dueDate: dueDate ? dueDate : toDos.dueDate,
      status: status ? status : toDos.status
    });
  };
  const deleteToDo = id => {
    setToDos({ ...(toDos[id] = undefined) });
  };
  console.log("TO DOs", toDos);
  return (
    <div className="App">
      Hello World
      <AddToDo addToDo={addToDo} />
      <ShowToDos toDos={toDos} deleteToDo={deleteToDo} editToDo={editToDo} />
    </div>
  );
}

export default App;
