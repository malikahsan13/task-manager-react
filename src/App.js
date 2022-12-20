import React, {useState, useEffect} from "react"
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

  return (
    <div className="App">
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
