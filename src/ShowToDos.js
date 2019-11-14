import React from "react";

import ToDo from "./ToDo";

export default function ShowToDos(props) {
  let toDos = Object.values(props.toDos);
  return (
    <div>
      {toDos.map(toDo => {
        return <ToDo key={toDo.id} toDo={toDo} />;
      })}
    </div>
  );
}
