function TaskCard({ task }) {
  return (
    <div className="border rounded-xl p-4 shadow-md bg-white">
      <p><strong>Intent:</strong> {task.intent}</p>
      <p><strong>Details:</strong> {task.details}</p>
      <p><strong>Timestamp:</strong> {new Date(task.timestamp).toLocaleString()}</p>
    </div>
  )
}

export default TaskCard