import "./PendingTasks.css";
import TaskPending from "./TaskPending";

function PendingTasks(props) {
  const tasks = props.tasks;

  const list = tasks.map((task, ind) => {
    return (
      <TaskPending
        key={ind}
        id={task.id}
        title={task.title}
        createDate={task.createDate}
        onDone={props.onDone}
        onDelete={props.onDelete}
      />
    );
  });

  return (
    <div className="pendingTask_container">
      <h2>Pending Tasks</h2>

      {/* <TaskPending title="Visit library" createDate={<span>16.10.2023</span>} /> */}

      {list}
    </div>
  );
}

export default PendingTasks;
