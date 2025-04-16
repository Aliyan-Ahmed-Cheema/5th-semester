import ShowMessage from "./ShowMessage";

import "./AddTask.css";
import { useState } from "react";

// Functional Component
function AddTask(props) {
  let [taskTitle, setTaskTitle] = useState("");
  let [add, setAdd] = useState(false);

  function handleInputChange(event) {
    setAdd(false);
    setTaskTitle(event.target.value);
  }

  function handleAdd() {
    props.onAdd(taskTitle);
    setAdd(true);
    setTaskTitle("");
  }

  let message = "";

  if (add) {
    // Message  added
    message = (
      <ShowMessage>
        <i>Task Added Successfully!</i>
      </ShowMessage>
    );
  } else {
    // Message not added yet
    message = (
      <ShowMessage>
        {/* <i>Please add new task ...</i> */}

        {taskTitle ? (
          <div>
            <span className="taskItem">
              {new Date().toLocaleDateString("de-DE")}
            </span>
            <span className="taskItem">{taskTitle}</span>
          </div>
        ) : (
          <small>Please add new task ...</small>
        )}
      </ShowMessage>
    );
  }

  return (
    <div className="addTask_container">
      <h1>Add Task</h1>
      <label>Add new task: </label>
      <input type="text" onChange={handleInputChange} value={taskTitle} />
      <button onClick={handleAdd}>Add</button>
      {message}

      {/* <ShowMessage>Task Added Successfully!</ShowMessage> */}
      {/* <ShowMessage>
        <i>Task Added Successfully!</i>
      </ShowMessage> */}
    </div>
  );
}

export default AddTask;
