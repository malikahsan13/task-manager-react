import React from 'react'
import Task from "./Task"

const Tasks = ({tasks, onUpdReminder, deleteTask}) => {
  return (
    <>
      {
        tasks.map((task)=> {
          return <Task key={task.id} task={task} onUpdReminder={onUpdReminder} deleteTask={deleteTask}/>
        })
      }
    </>
  )
}

export default Tasks