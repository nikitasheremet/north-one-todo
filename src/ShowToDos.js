import React from "react";

import ToDo from "./ToDo";
import moment from "moment";

export default function ShowToDos(props) {
  let toDos = Object.values(props.toDos);
  return (
    <div>
      {toDos
        .filter(toDo => toDo.status !== "Completed")
        .map(toDo => {
          let now = moment().format("YYYY-MM-DD");
          if (
            moment(now).isAfter(toDo.dueDate) &&
            toDo.status !== "Late" &&
            toDo.status !== "Completed"
          ) {
            props.editToDo({ ...toDo, status: "Late" });
          }
          return (
            <ToDo
              key={toDo.id}
              toDo={toDo}
              deleteToDo={props.deleteToDo}
              editToDo={props.editToDo}
            />
          );
        })}
    </div>
  );
}
