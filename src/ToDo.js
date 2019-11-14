import React, { useSate } from "react";

export default function ToDo({ toDo, deleteToDo }) {
  const [editClicked, setEditClicked] = useSate(false);
  return (
    <div>
      <div style={{ display: editClicked ? "none" : "block" }}>
        {toDo.title}
        <button onClick={() => deleteToDo(toDo.id)}>Delete</button>
      </div>
      <div style={{ display: editClicked ? "block" : "none" }}>
        <AddToDo />
      </div>
    </div>
  );
}
