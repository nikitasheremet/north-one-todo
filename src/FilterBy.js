import React from "react";
import moment from "moment";

export default function FIlterBy({ setFilters, filters }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search By Title"
        onChange={e => setFilters({ ...filters, title: e.target.value })}
      ></input>
      <input
        type="date"
        placeholder="Search By Due Date"
        onChange={e => {
          console.log(new Date(e.target.value));
          setFilters({
            ...filters,
            dueDate: e.target.value
              ? moment(new Date(e.target.value))
                  .add(1, "d")
                  .format("YYYY-MM-DD")
              : ""
          });
        }}
      ></input>
      <select
        onChange={e => setFilters({ ...filters, status: e.target.value })}
      >
        <option value="">Status</option>
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
        <option value="Late">Late</option>
      </select>
    </div>
  );
}
