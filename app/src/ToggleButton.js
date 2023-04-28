import ListItem from './ListItem.js';

export default function ToggleButton({ tasks, setTasks, filter, setFilter }) {
    if (!Array.isArray(tasks)) {
        return (
            <div>
                <p>Sorry, an error occurred!</p>
            </div>
        );
      }


  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") {
      return true;
    } else if (filter === "active") {
      return task.taskStatus === "active";
    } else if (filter === "done") {
      return task.taskStatus === "done";
    }
  });

  console.log("filteredTasks:", filteredTasks);

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

      <ul className="list-group mt-2">
        {filteredTasks.map((task) => (
          <ListItem
            key={task.id}
            task={task}
            setTasks={setTasks}
            tasks={tasks}
          />
        ))}
      </ul>
    </div>
  );
}
