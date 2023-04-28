import { useState } from "react";

export default function ListItem(props) {
  const [taskstatus, setStatus] = useState("active");

  const handleCheckboxClick = () => {
    setStatus(taskstatus === "active" ? "done" : "active");
  };

  const handleDeleteClick = () => {
    props.setTask(props.tasks.filter((task) => task.id !== props.task.id));
  };

  return (
    <li className={`list-group-item d-flex align-items-center justify-content-between ${taskstatus}`}>
      <div>
      <input
        className="form-check-input me-1"
        type="checkbox"
        value=""
        id={`checkbox-${props.task.id}`}
        onClick={handleCheckboxClick}
        onChange={() => {}}
        taskstatus= ""
        checked={taskstatus === "done"}
        />

        <label className="form-check-label" htmlFor={`checkbox-${props.task.id}`}>
          {props.task && props.task.item}
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