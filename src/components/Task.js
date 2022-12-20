import React from 'react'

const Task = ({task}) => {
  return (
    <>
      <h3>{task.text}</h3>
      <p>{task.dateTime}</p>
    </>
  )
}

export default Task
