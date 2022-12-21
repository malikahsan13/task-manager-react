import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  const onAdd = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTasks([...tasks, data]);
  };

  const onUpdReminder = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const taskToToggle = await res.json();
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updTask),
    });
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !taskToToggle.reminder } : task
      )
    );
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => {
            setShowAddTask(!showAddTask);
          }}
          showAdd={showAddTask}
        />
        <Routes>
          <Route path="/" element={
            <>
              {showAddTask && <AddTask onAdd={onAdd} />}
              {tasks.length === 0 ? (
              <Tasks
                tasks={tasks}
                onUpdReminder={onUpdReminder}
                deleteTask={deleteTask}
          />
        ) : (
          "No Tasks to Show"
        )}
            </>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
