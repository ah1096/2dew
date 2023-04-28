import { useState } from 'react';

export default function InputBlock(props) {
  const [newTask, setNewTask] = useState('');

  const handleTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setTask([
      ...props.tasks,
      { id: Date.now(), taskDescription: newTask, taskStatus: props.taskstatus },
    ]);
    setNewTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add Task..."
          value={newTask}
          onChange={handleTaskChange}
        />
        <button className="btn btn-success" type="submit">
          Add
        </button>
      </div>
    </form>
  );
}