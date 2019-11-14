import React, { useState } from "react";
import EditToDoForm from "./EditToDoForm";
import "./ToDo.sass";
import moment from "moment";

export default function ToDo({ toDo, deleteToDo, editToDo }) {
  const [editClicked, setEditClicked] = useState(false);
  let statusColor = "";
  console.log(moment(new Date(Date.now())).format("YYYY-MM-DD"));
  if (toDo.status === "Completed") {
    statusColor = "lightgrey";
  } else if (toDo.status === "Late") {
    statusColor = "salmon";
  } else if (
    toDo.dueDate === moment(new Date(Date.now())).format("YYYY-MM-DD")
  ) {
    statusColor = "#ffffa1";
  } else {
    statusColor = "white";
  }
  return (
    <div className="to-do" style={{ backgroundColor: statusColor }}>
      <div
        className="to-do-info"
        style={{ display: editClicked ? "none" : "flex" }}
      >
        <div className="checkbox">
          <input
            type="checkbox"
            onClick={() => editToDo({ ...toDo, status: "Completed" })}
          ></input>
        </div>
        <div className="info">
          <h4>{toDo.title}</h4>
          <p>{toDo.description}</p>
          <p>{toDo.dueDate}</p>
          <p>{toDo.status}</p>
        </div>
        <div className="function-buttons">
          <button onClick={() => setEditClicked(true)}>Edit</button>
          <button onClick={() => deleteToDo(toDo.id)}>Delete</button>
        </div>
      </div>
      <div style={{ display: editClicked ? "flex" : "none" }}>
        <EditToDoForm
          toDo={toDo}
          editToDo={editToDo}
          setEditClicked={setEditClicked}
        />
      </div>
    </div>
  );
}
