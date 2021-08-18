import React from 'react'
import CreateTask from './CreateTask.js'
import Tasks from './Tasks.js'
import { createTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

function App() {
  const darkTheme = createTheme({
    palette: {
      type: 'dark',
    },
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <CreateTask title="Hello everyone" />
        <Tasks />
      </div>
    </ThemeProvider>
  )
}

export default App
