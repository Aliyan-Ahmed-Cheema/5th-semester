import PendingTasks from "./PendingTasks";
import CompletedTasks from "./CompletedTasks";
// import { useState } from "react";

// Functional Component
function ManageTasks(props) {
  const pendingTask = props.tasks.filter((task) => {
    return task.done === false && task.trash === false;
  });
  const completedTask = props.tasks.filter((task) => {
    return task.done === true && task.trash === false;
  });

  return (
    <div>
      <h1>Manage Tasks</h1>
      <PendingTasks
        tasks={pendingTask}
        onDone={props.onDone}
        onDelete={props.onDelete}
      ></PendingTasks>
      <CompletedTasks tasks={completedTask}></CompletedTasks>
    </div>
  );
}

export default ManageTasks;
