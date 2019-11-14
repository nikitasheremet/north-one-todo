import React, { useState } from "react";
import EditToDoForm from "./EditToDoForm";
import "./ToDo.sass";

export default function ToDo({ toDo, deleteToDo, editToDo }) {
  const [editClicked, setEditClicked] = useState(false);
  return (
    <div className="to-do">
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
        <div>
          <h4>{toDo.title}</h4>
          <p>{toDo.description}</p>
          <p>{toDo.dueDate}</p>
          <p>{toDo.status}</p>
        </div>
        <div>
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
