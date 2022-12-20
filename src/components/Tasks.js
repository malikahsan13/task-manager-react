import React from 'react'
import Task from "./Task"

const Tasks = ({tasks, onUpdReminder, deleteTask}) => {
  return (
    <div>
      {
        tasks.map((task)=> {
          return <Task key={task.id} task={task} onUpdReminder={onUpdReminder} deleteTask={deleteTask}/>
        })
      }
    </div>
  )
}

export default Tasks