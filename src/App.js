import React, { useState } from "react";

import "./App.sass";

import AddToDo from "./AddToDo";

function App() {
  const [toDos, setToDos] = useState({});

  const addToDo = ({ title, dueDate, status, description }) => {
    let id = Object.values(toDos).length + 1;
    setToDos({ ...toDos, [id]: { title, dueDate, status, description } });
  };
  console.log("TO DOs", toDos);
  return (
    <div className="App">
      Hello World
      <AddToDo addToDo={addToDo} />
    </div>
  );
}

export default App;
