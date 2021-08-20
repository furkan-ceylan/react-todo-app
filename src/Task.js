import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import DeleteTask from './DeleteTask'

const Task = ({ task, deleteTask, toggleComplete }) => {
  return (
    <div>
      <div className="task">
        <div>
          <Checkbox
            color="primary"
            checked={task.completed}
            onChange={() => toggleComplete(task.id)}
          />
          <span
            className={
              task.completed ? 'task-name task-completed' : 'task-name'
            }
          >
            {task.taskName}
          </span>
        </div>
        <DeleteTask deleteTask={deleteTask} task={task} />
      </div>
    </div>
  )
}

export default Task
