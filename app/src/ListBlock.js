import ListItem from './ListItem.js';
import ToggleButton from './ToggleButton.js';
import { useState } from 'react';

export default function ListBlock(props) {
  const [filter, setFilter] = useState("all");

  const filteredTasks = props.tasks.filter((task) => {
    if (filter === "active") {
      return task.taskstatus === "active";
    } else if (filter === "done") {
      return task.taskstatus === "done";
    }
    return true;
  });

  const handleTaskClick = (clickedTask) => {
    const updatedTasks = props.tasks.map((task) => {
      if (task.id === clickedTask.id) {
        return { ...task, taskstatus: task.taskstatus === "active" ? "done" : "active" };
      }
      return task;
    });
    props.setTask(updatedTasks);
  };

  const handleDeleteClick = (clickedTask) => {
    const updatedTasks = props.tasks.filter((task) => task.id !== clickedTask.id);
    props.setTask(updatedTasks);
  };

  return (
    <div>
      <ul className="list-group mt-2">
        {filteredTasks.map((task) => (
          <ListItem
            key={task.id}
            task={task}
            handleTaskClick={handleTaskClick}
            handleDeleteClick={handleDeleteClick}
          />
        ))}
      </ul>
      <ToggleButton filter={filter} setFilter={setFilter} />
    </div>
  );
}
