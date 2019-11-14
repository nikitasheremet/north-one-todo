import React, { useState } from "react";
import moment from "moment";
import "./styles/AddToDo.sass";

export default function AddToDo({ addToDo }) {
  const [localToDoParams, setLocalToDoParams] = useState({
    title: "",
    description: "",
    dueDate: moment(new Date(Date.now())).format("YYYY-MM-DD"),
    status: "Pending"
  });

  const checkAndSubmitToDo = () => {
    if (!Object.values(localToDoParams).includes("")) {
      addToDo(localToDoParams);
    } else {
      alert("Please Fill In All Fields");
    }
  };

  return (
    <div className="add-to-do">
      <div>
        <h3>Add To Do</h3>
      </div>
      <div className="inputs">
        <input
          type="text"
          value={localToDoParams.title}
          placeholder="Title"
          onChange={e =>
            setLocalToDoParams({ ...localToDoParams, title: e.target.value })
          }
        ></input>
        <input
          type="text"
          value={localToDoParams.description}
          placeholder="Description"
          onChange={e =>
            setLocalToDoParams({
              ...localToDoParams,
              description: e.target.value
            })
          }
        ></input>
        <input
          type="date"
          value={localToDoParams.dueDate}
          placeholder="Due Date"
          onChange={e =>
            setLocalToDoParams({
              ...localToDoParams,
              dueDate: moment(new Date(e.target.value)).format("YYYY-MM-DD")
            })
          }
        ></input>
        <button onClick={() => checkAndSubmitToDo()}>Add</button>
      </div>
    </div>
  );
}
