import AddTask from "./components/AddTask";
import ManageTasks from "./components/ManageTasks";

import "./App.css";
import { useState } from "react";

const INITIAL_TASKS = [
  {
    id: 101,
    title: "Going to admission office",
    createDate: "20.10.2023",
    done: false,
    trash: false,
  },
  {
    id: 102,
    title: "Visit library",
    createDate: "16.10.2023",
    done: false,
    trash: false,
  },
  {
    id: 103,
    title: "Attending seminar",
    createDate: "19.10.2023",
    done: false,
    trash: false,
  },
  {
    id: 104,
    title: "Taking breakfast",
    createDate: "15.10.2023",
    done: true,
    trash: false,
  },
  {
    id: 105,
    title: "Meet batch advisor",
    createDate: "13.09.2023",
    done: true,
    trash: false,
  },
  {
    id: 106,
    title: "Community service",
    createDate: "29.10.2023",
    done: true,
    trash: false,
  },
];

function App() {
  let [taskList, setTaskList] = useState(INITIAL_TASKS);

  function handleDone(id) {
    console.log("done");

    // Identify item
    const taskInd = taskList.findIndex((task) => task.id === id);
    console.log("taskList: ", taskList);

    const updatedList = [...taskList]; // [STEP-1] Create copy // Shallow copy

    updatedList[taskInd].done = true; // [STEP-2] Update desired value(s) in copy

    setTaskList(updatedList); // [STEP-3] Update state with copy
  }

  function handleDelete(id) {
    console.log("DELETE DELETE DELETE DELETE DELETE ");

    // Modify immutably

    // Identify item
    const taskInd = taskList.findIndex((task) => task.id === id);
    console.log("taskList: ", taskList);

    const updatedList = [...taskList]; // [STEP-1] Create copy // Shallow copy

    updatedList[taskInd].trash = true; // [STEP-2] Update desired value(s) in copy

    setTaskList(updatedList); // [STEP-3] Update state with copy
  }

  function handleAdd(newTitle) {
    console.log("ADD ", newTitle);

    if (newTitle) {
      // -------------------------------
      // [STEP-1] Create copy // Shallow copy
      const newList = [...taskList];

      // [STEP-2] Update desired value(s) in copy
      // +1

      newList.push({
        id: 0,
        title: "",
        createDate: "00.00.0000",
        done: false,
        trash: false,
      });

      newList[newList.length - 1].id = 100 + newList.length;
      newList[newList.length - 1].title = newTitle;
      newList[newList.length - 1].createDate = new Date().toLocaleDateString(
        "de-DE"
      );
      newList[newList.length - 1].done = false;
      newList[newList.length - 1].trash = false;

      // [STEP-3] Update state with copy
      setTaskList(newList);
    }
  }

  return (
    <div className="App">
      <h1>ToDo Application</h1>
      <AddTask onAdd={handleAdd}></AddTask>
      <ManageTasks
        onDone={handleDone}
        onDelete={handleDelete}
        tasks={taskList}
      ></ManageTasks>
    </div>
  );
}

export default App;
