import React from "react";
import "./ShowToDos.sass";

import ToDo from "./ToDo";
import moment from "moment";

export default function ShowToDos(props) {
  let toDos = Object.values(props.toDos);
  console.log(props.filters);
  return (
    <div className="all-to-dos">
      {toDos
        .filter(
          toDo =>
            toDo.title
              .toLowerCase()
              .includes(props.filters.title.toLowerCase()) &&
            toDo.dueDate.includes(props.filters.dueDate) &&
            toDo.status.includes(props.filters.status)
        )
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
