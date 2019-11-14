import React, { useState } from "react";

import "./App.sass";

function App() {
  const [toDos, setToDos] = useState({});

  const addToDo = () => {
    let id = Object.values(toDos).length + 1;
    setToDos({ ...toDos, [id]: { title, dueDate, status, description } });
  };

  return <div className="App">Hello World</div>;
}

export default App;
