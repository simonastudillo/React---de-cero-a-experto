export const TodoItem = ({ item, borrarTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        onClick={() => onToggleTodo(item.id)}
        className={`${item.done ? 'text-decoration-line-through' : ''} align-self-center`}
      >
        <span>{item.done ? '✔' : '✘'} - </span>
        {item.description}
      </span>
      <button className="btn btn-danger" onClick={() => borrarTodo(item.id)}>X</button>
    </li>
  )
}
