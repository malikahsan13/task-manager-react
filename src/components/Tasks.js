import React from 'react'
import Task from "./Task"

const Tasks = ({tasks}) => {
  console.log(tasks)
  return (
    <div>
      {
        tasks.map((task)=> {
          return <Task key={task.id} task={task} />
        })
      }
    </div>
  )
}

export default Tasks