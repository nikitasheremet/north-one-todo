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
  console.log("TO DOs", toDos);
  return (
    <div className="App">
      Hello World
      <AddToDo addToDo={addToDo} />
      <ShowToDos toDos={toDos} />
    </div>
  );
}

export default App;
