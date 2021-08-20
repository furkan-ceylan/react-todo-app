import React from 'react'
import Icon from '@material-ui/core/Icon'

const DeleteTask = ({ task, deleteTask }) => {
  return (
    <div>
      <button className="btn-delete" onClick={() => deleteTask(task.id)}>
        <Icon color="action">clear</Icon>
      </button>
    </div>
  )
}

export default DeleteTask
