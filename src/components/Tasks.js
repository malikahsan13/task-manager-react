import React from 'react'
import Task from "./Task"

const Tasks = ({tasks, onUpdReminder}) => {
  return (
    <div>
      {
        tasks.map((task)=> {
          return <Task key={task.id} task={task} onUpdReminder={onUpdReminder} />
        })
      }
    </div>
  )
}

export default Tasks