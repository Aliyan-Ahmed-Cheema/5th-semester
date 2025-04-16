import { useState } from "react";

// Functional Component
function TaskPending(props) {
  let [done, setDone] = useState(false); // state

  function handleDone() {
    // console.log("DONE ...........");
    props.onDone(props.id);
  }

  function handleDelete() {
    // console.log("DELETE ...........");
    props.onDelete(props.id);
  }

  return (
    <div>
      <span className="taskItem">{props.createDate}</span>
      <span className="taskItem">{props.title}</span>
      <button onClick={handleDone} disabled={done}>
        done
      </button>
      <button onClick={handleDelete}>delete</button>
    </div>
  );
}

export default TaskPending;
