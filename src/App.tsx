import { useState } from 'react'
import './App.css'
import AddTask from './components/AddTask/AddTask'
import TaskList from './components/TaskList/TaskList'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import MainContent from './components/MainContent/MainContent'

interface Task {
  id: number
  name: string
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  const addTask = (taskName: string) => {
    setTasks([...tasks, { id: tasks.length + 1, name: taskName }])
  }

  return (
    <div className='app-container'>
      <Header />
      <MainContent>
        <h1>Lista de Tarefas</h1>
        <AddTask onAddTask={addTask} />
        <TaskList tasks={tasks} />
      </MainContent>
      <Footer />
    </div>
  )
}

export default App
