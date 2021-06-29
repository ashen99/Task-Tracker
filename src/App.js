import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appoinment",
      day: "Feb 5th at 2.30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at school",
      day: "Feb 6th at 2.30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food shopping",
      day: "Feb 7th at 2.30pm",
      reminder: false,
    },
  ]);

  //delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header tittle={"Task Tracker"} />
      <AddTask />
      {tasks.length > 0 ? (
        <Task tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks"
      )}
    </div>
  );
}

export default App;
