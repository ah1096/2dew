import { useState } from "react";

export default function ListItem({ item, id, setTask, tasks }) {
  const [status, setStatus] = useState("active");

  const handleCheckboxClick = () => {
    setStatus(status === "active" ? "done" : "active");
  };

  const handleDeleteClick = () => {
    setTask(tasks.filter((task) => task.id !== id));
  };

  return (
    <li className={`list-group-item d-flex align-items-center justify-content-between ${status}`}>
      <div>
        <input
          className="form-check-input me-1"
          type="checkbox"
          value=""
          id={`checkbox-${id}`}
          onClick={handleCheckboxClick}
          checked={status === "done"}
        />

        <label className="form-check-label" htmlFor={`checkbox-${id}`}>
          {item}
        </label>
      </div>

      <div className="align-self-end">
        <button className="btn btn-danger" type="button" id="deleteItemBtn" onClick={handleDeleteClick}>
          x
        </button>
      </div>
    </li>
  );
}