import { useState } from "react";

export default function InputBlock({ tasks, setTask }) {
  const [item, setItem] = useState("");

  function addTask() {
    setTask([
      ...tasks,
      { id: Date.now(), item: item }
    ]);
    setItem("");
  }

  function handleKeyDown(e) {
    if (e.keyCode === 13) {
      addTask();
    }
  }

  return (
    <div id="inputBlock" className="text-center">
      <h1>To Dew List</h1>
      <div id="addTask" className="input-group mb-3">
        <input
          id="itemInput"
          type="text"
          className="form-control"
          placeholder="add a task"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button
          className="btn btn-success"
          type="button"
          id="addItemBtn"
          onClick={addTask}
        >
          +
        </button>
      </div>
    </div>
  );
}
