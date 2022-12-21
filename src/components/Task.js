import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ({task, onUpdReminder, deleteTask}) => {
  return (
    <div className={`task ${task.reminder && 'reminder'}`}   onDoubleClick={() => {onUpdReminder(task.id)}}>
      <h3>{task.text}{` `} <FaTimes style={{color: "red", cursor: "pointer"}} onClick={()=>{deleteTask(task.id)}} /></h3>
      <p>{task.dateTime}</p>
      {/* <p>{task.reminder ? "Reminder On" : "Reminder Off"}</p> */}
    </div>
  )
}

export default Task
