import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const CreateTask = () => {
  return (
    <div>
      <form autoComplete="off" className="create-task">
        <TextField
          id="filled-secondary"
          label="Add Task"
          variant="filled"
          color="primary"
          className="create-input"
          size="small"
        />
        <Button variant="contained" color="primary">
          Create
        </Button>
      </form>
    </div>
  )
}

export default CreateTask
