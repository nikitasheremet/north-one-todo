import React, { useState } from "react";
import EditToDoForm from "./EditToDoForm";

export default function ToDo({ toDo, deleteToDo, editToDo }) {
  const [editClicked, setEditClicked] = useState(false);
  return (
    <div>
      <div style={{ display: editClicked ? "none" : "block" }}>
        <input
          type="checkbox"
          onClick={() => editToDo({ ...toDo, status: "Completed" })}
        ></input>
        <h4>{toDo.title}</h4>
        <p>{toDo.description}</p>
        <p>{toDo.dueDate}</p>
        <p>{toDo.status}</p>
        <button onClick={() => setEditClicked(true)}>Edit</button>
        <button onClick={() => deleteToDo(toDo.id)}>Delete</button>
      </div>
      <div style={{ display: editClicked ? "block" : "none" }}>
        <EditToDoForm
          toDo={toDo}
          editToDo={editToDo}
          setEditClicked={setEditClicked}
        />
      </div>
    </div>
  );
}
