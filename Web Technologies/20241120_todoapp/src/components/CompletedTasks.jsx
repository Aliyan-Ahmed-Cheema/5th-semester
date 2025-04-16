import TaskCompleted from "./TaskCompleted";

import "./CompletedTasks.css";

// Functional Component
function CompletedTasks(props) {
  const list = props.tasks.map((task, ind) => {
    return <TaskCompleted key={ind} title={task.title} />;
  });

  return (
    <div className="completedTask_container">
      <h2>Completed Tasks</h2>
      {list}
    </div>
  );
}

export default CompletedTasks;
