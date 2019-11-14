import React, { useState } from "react";
import moment from "moment";

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
  console.log(localToDoParams.dueDate);
  return (
    <div>
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
            dueDate: new Date(e.target.value)
          })
        }
      ></input>
      <button onClick={() => checkAndSubmitToDo()}>Add To Do</button>
    </div>
  );
}
