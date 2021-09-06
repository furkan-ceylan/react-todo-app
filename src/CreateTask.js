import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { useState } from 'react'

const CreateTask = ({ addTask }) => {
  const [id, setId] = useState(Math.floor(Math.random() * 500))
  const [taskName, setTaskName] = useState('')
  const [completed, setCompleted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!taskName) return alert('Please Add a Task Name')
    addTask({ id, taskName, completed })
    setTaskName('')
  }

  return (
    <div>
      <form autoComplete="off" className="create-task" onSubmit={onSubmit}>
        <TextField
          id="filled-secondary"
          label="Task Name"
          variant="filled"
          color="primary"
          className="create-input"
          size="small"
          defaultValue=""
          onChange={(e) => setTaskName(e.target.value)}
          value={taskName}
        />
        <Button variant="contained" color="primary" type="submit">
          Add
        </Button>
      </form>
    </div>
  )
}

export default CreateTask
