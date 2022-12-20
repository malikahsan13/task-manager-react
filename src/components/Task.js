import React from 'react'

const Task = ({task, onUpdReminder, deleteTask}) => {
  return (
    <div onDoubleClick={() => {onUpdReminder(task.id)}}>
      <h3>{task.text} <span style={{color:"red"}} onClick={()=>{deleteTask(task.id)}}>X</span></h3>
      <p>{task.dateTime}</p>
      <p>{task.reminder ? "Reminder On" : "Reminder Off"}</p>
    </div>
  )
}

export default Task
