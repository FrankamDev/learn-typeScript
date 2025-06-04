import { useState } from 'react'

const App = () => {
  const [change, setChange] = useState('')
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'Laver les habits',
    },
    {
      id: 2,
      name: 'Coder',
    },
    {
      id: 3,
      name: "Aller a l'ecole",
    },
  ])
  const handChange = (e) => {
    console.log(e.target.id)
  }
  const handleDelete = (id) => {
    const taskCopy = [...tasks]
    const copyFilter = taskCopy.filter((task) => task.id != id)
    setTasks(copyFilter)
  }
  const handleAdd = (e) => {
    e.preventDefault()
    const id = new Date().getTime()
    const name = change
    setTasks({
      id,
      name,
    })
  }
  return (
    <div className="app">
      <h1 className="text-2xl"> Liste de taches</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.name}{' '}
            <button
              className="bg-cyan-800 p-2 rounded-4xl"
              onClick={() => handleDelete(task.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <form action="" onSubmit={handleAdd}>
        <input
          type="text"
          className="border"
          onChange={(e) => setChange(e.target.value)}
        />
        <input
          type="submit"
          className="bg-cyan-500 px-4 cursor-pointer"
          value="Valider"
        />
      </form>
    </div>
  )
}

export default App
