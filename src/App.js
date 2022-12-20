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

  return (
    <div className="App">
      <AddTask onAdd={onAdd} />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
