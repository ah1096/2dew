import React from 'react';
import ListItem from './ListItem';

export default function ToggleButton(props) {
  const { tasks, filter, setFilter, handleStatusChange } = props;

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const activeTasks = tasks ?? [] // nullish coalescing operator
    .filter((task) => task.taskStatus === "active");
  const doneTasks = tasks ?? [] // nullish coalescing operator
    .filter((task) => task.taskStatus === "done");

  return (
    <div id="toggleButtons" className="btn-group align-self-start" role="group">
      <input 
        id="toggleAllBtn" 
        type="radio" 
        className="btn-check" 
        name="btnradio" 
        autoComplete="off"
        checked={filter === 'all'}
        onChange={() => setFilter('all')}
      />
      <label className="btn btn-outline-success" htmlFor="toggleAllBtn">
        all
      </label>

      <input
        id="toggleToDewBtn"
        type="radio"
        className="btn-check"
        name="btnradio"
        autoComplete="off"
        checked={filter === "active"}
        onChange={() => handleFilterChange("active")}
      />
      <label className="btn btn-outline-success" htmlFor="toggleToDewBtn">
        to-dew
      </label>

      <input
        id="toggleDoneBtn"
        type="radio"
        className="btn-check"
        name="btnradio"
        autoComplete="off"
        checked={filter === "done"}
        onChange={() => handleFilterChange("done")}
      />
      <label className="btn btn-outline-success" htmlFor="toggleDoneBtn">
        done
      </label>

      <ul>
        {activeTasks.map((task) => (
          <ListItem key={task.id} task={task} handleStatusChange={handleStatusChange} />
        ))}
      </ul>

      <ul>
        {doneTasks.map((task) => (
          <ListItem key={task.id} task={task} handleStatusChange={handleStatusChange} />
        ))}
      </ul>
    </div>
  );
}