import React, { useState } from "react";
import "./App.sass";

import AddToDo from "./AddToDo";
import ShowToDos from "./ShowToDos";

function App() {
  const [toDos, setToDos] = useState({
    1: {
      id: 1,
      title: "Build ToDo App",
      description: "For NorthOne",
      dueDate: "2019-11-14",
      status: "Pending"
    },
    2: {
      id: 2,
      title: "Start new side project",
      description: "Build personal website",
      dueDate: "2019-12-14",
      status: "Pending"
    },
    3: {
      id: 3,
      title: "Take out trash",
      description: "Dont Forget",
      dueDate: "2019-11-13",
      status: "Late"
    }
  });

  const addToDo = ({ title, dueDate, status, description }) => {
    let id = Object.values(toDos).length + 1;
    setToDos({ ...toDos, [id]: { id, title, dueDate, status, description } });
  };

  const editToDo = ({ id, title, description, dueDate, status }) => {
    setToDos({
      ...toDos,
      [id]: {
        ...toDos[id],
        title: title,
        description: description,
        dueDate: dueDate,
        status: status
      }
    });
  };

  const deleteToDo = id => {
    setToDos({ ...(toDos[id] = undefined) });
  };

  return (
    <div className="App">
      <AddToDo addToDo={addToDo} />
      <ShowToDos toDos={toDos} deleteToDo={deleteToDo} editToDo={editToDo} />
    </div>
  );
}

export default App;
