import { useState } from 'react'
import CreateTask from './CreateTask.js'
import Tasks from './Tasks.js'
import { createTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

const App = () => {
  const darkTheme = createTheme({
    palette: {
      type: 'dark',
    },
  })

  const [tasks, setTasks] = useState([
    {
      id: 1,
      taskName: 'Task 1',
      completed: true,
    },
    {
      id: 2,
      taskName: 'Task 2',
      completed: false,
    },
    {
      id: 3,
      taskName: 'Task 3',
      completed: false,
    },
  ])

  const addTask = (task) => {
    //add task to tasks
    setTasks([...tasks, task])
  }

  const deleteTask = (id) => {
    //delete task from tasks
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleComplete = (id) => {
    //toggle task from tasks
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <CreateTask addTask={addTask} />
        <Tasks
          tasks={tasks}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      </div>
    </ThemeProvider>
  )
}

export default App
