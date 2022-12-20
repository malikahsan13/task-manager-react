import React, {useState, useEffect} from "react"
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks"

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  },[]);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks")
    const data = await res.json()
    return data
  }

  const onAdd = async (task) => {
    const res = await fetch("http://localhost:5000/tasks",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
      });
      const data = await res.json()
      setTasks([...tasks, data]);
  }

  const onUpdReminder = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const taskToToggle = await res.json();
    const updTask = {...taskToToggle, reminder: !taskToToggle.reminder};
    const res1 = await fetch(`http://localhost:5000/tasks/${id}`,{
      method: "PUT",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(updTask)
    });
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !taskToToggle.reminder} : task));
  }

  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`,
    {
      method: "DELETE"
    });
    setTasks(tasks.filter((task) => task.id!==id))
  }

  return (
    <div className="App">
      <AddTask onAdd={onAdd} />
      <Tasks tasks={tasks} onUpdReminder={onUpdReminder} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
