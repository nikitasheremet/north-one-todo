import React, { useState } from "react";

export default function AddToDo(props) {
  const [localToDoParams, setLocalToDoParams] = useState({
    title: "",
    description: "",
    dueDate: Date.now(),
    status: "Pending"
  });

  const checkAndSubmitToDo = () => {
    if (!Object.values(localToDoParams).includes("")) {
      props.addToDo(localToDoParams);
    } else {
      alert("Please Fill In All Fields");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        onChange={e =>
          setLocalToDoParams({ ...localToDoParams, title: e.target.value })
        }
      ></input>
      <input
        type="text"
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
