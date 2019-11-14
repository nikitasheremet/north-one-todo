import React, { useState } from "react";
import "./styles/App.sass";

import AddToDo from "./AddToDo";
import ShowToDos from "./ShowToDos";
import FilterBy from "./FilterBy";

function App() {
  const [toDos, setToDos] = useState({
    1: {
      id: 1,
      title: "Build ToDo App",
      description: "For NorthOne",
      dueDate: "2019-11-14",
      status: "PENDING"
    },
    2: {
      id: 2,
      title: "Start new side project",
      description: "Build personal website",
      dueDate: "2019-08-14",
      status: "LATE"
    }
  });
  const [filters, setFilters] = useState({
    title: "",
    dueDate: "",
    status: ""
  });

  const addToDo = ({ title, dueDate, status, description }) => {
    let id;
    if (Object.values(toDos).length === 0) {
      id = 1;
    } else {
      id = Number(Object.keys(toDos).slice(-1)[0]) + 1;
    }
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
    let cloneToDos = { ...toDos };
    delete cloneToDos[id];
    setToDos({ ...cloneToDos });
  };

  return (
    <div className="to-do-app">
      <AddToDo addToDo={addToDo} />
      <FilterBy setFilters={setFilters} filters={filters} />
      <ShowToDos
        toDos={toDos}
        deleteToDo={deleteToDo}
        editToDo={editToDo}
        filters={filters}
      />
    </div>
  );
}

export default App;
