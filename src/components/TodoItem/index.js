// Write your code here
import './index.css'

const TodoItem = props => {
  const {todo, deleteTodo} = props
  const {id, title} = todo
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="lielestyle">
      {title}
      <button className="button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
