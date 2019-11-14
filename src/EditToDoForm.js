import React, { useState } from "react";
import moment from "moment";
import "./EditToDoForm.sass";

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
      editToDo(localToDoParams);
      setEditClicked(false);
    } else {
      alert("Please Fill In All Fields");
    }
  };
  return (
    <div className="edit-form">
      <div>
        <p>Title</p>
        <input
          type="text"
          value={localToDoParams.title}
          placeholder="Title"
          onChange={e =>
            setLocalToDoParams({ ...localToDoParams, title: e.target.value })
          }
        ></input>
        <br />
        <p>Description</p>
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
        <br />
        <p>Date</p>
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
      </div>
      <div>
        <button onClick={() => checkAndSubmitToDo()}>Update</button>
        <button onClick={() => setEditClicked(false)}></button>
      </div>
    </div>
  );
}
