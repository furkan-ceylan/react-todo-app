import React from 'react'
import Task from './Task.js'

const Tasks = ({ tasks, deleteTask, toggleComplete }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  )
}

export default Tasks
