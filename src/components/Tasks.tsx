const Tasks = ({ handleDelete, task }) => {
  return (
    <li
      key={task.id}
      className="flex justify-between items-center border-b py-2"
    >
      <span>{task.name}</span>
      <button
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        onClick={() => handleDelete(task.id)}
      >
        Supprimer
      </button>
    </li>
  )
}

export default Tasks
