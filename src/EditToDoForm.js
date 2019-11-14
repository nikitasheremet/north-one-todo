import React, { useState } from "react";
import moment from "moment";

export default function EditToDoForm({ editToDo, toDo, setEditClicked }) {
  const [localToDoParams, setLocalToDoParams] = useState({
    id: toDo.id,
    title: toDo.title,
    description: toDo.description,
    dueDate: moment(toDo.dueDate).format("YYYY-MM-DD"),
    status: toDo.status
  });

  const checkAndSubmitToDo = () => {
    if (!Object.values(localToDoParams).includes("")) {
      console.log("In EDIT SUBMIT");
      editToDo(localToDoParams);
      setEditClicked(false);
    } else {
      alert("Please Fill In All Fields");
    }
  };
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
            dueDate: moment(new Date(e.target.value)).format("YYYY-MM-DD")
          })
        }
      ></input>
      <button onClick={() => checkAndSubmitToDo()}>Update</button>
      <button onClick={() => setEditClicked(false)}></button>
    </div>
  );
}
