import React from 'react'

const Task = ({task, onUpdReminder}) => {
  return (
    <div onDoubleClick={() => {onUpdReminder(task.id)}}>
      <h3>{task.text}</h3>
      <p>{task.dateTime}</p>
      <p>{task.reminder ? "Reminder On" : "Reminder Off"}</p>
    </div>
  )
}

export default Task
