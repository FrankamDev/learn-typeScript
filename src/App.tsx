import { useState } from 'react'
import Tasks from './components/Tasks'

const App = () => {
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Laver les habits' },
    { id: 2, name: 'Coder' },
    { id: 3, name: "Aller à l'école" },
    { id: 4, name: 'Prier tous les jours' },
    { id: 5, name: 'Lire la bible' },
  ])

  const handleAdd = (e) => {
    e.preventDefault()
    const trimmed = newTask.trim()
    if (!trimmed) return

    const newTaskItem = {
      id: Date.now(),
      name: trimmed,
    }

    setTasks([...tasks, newTaskItem])
    setNewTask('')
  }

  const handleDelete = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id)
    setTasks(filteredTasks)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Liste de tâches
        </h1>

        <ul className="space-y-2 mb-6">
          {tasks.map((task) => (
            <Tasks handleDelete={handleDelete} task={task} />
          ))}
        </ul>

        <form onSubmit={handleAdd} className="flex space-x-2">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Nouvelle tâche"
            className="flex-grow border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <button
            type="submit"
            className="bg-cyan-600 text-white px-4 rounded hover:bg-cyan-700"
          >
            Ajouter
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
