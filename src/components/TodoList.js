import { useRecoilValue } from "recoil"
import { todoListState } from "../recoil/atoms"
import TodoItemCreator from "./TodoItemCreator"
import TodoItem from "./TodoItem"

const TodoList = () => {
  const todoList = useRecoilValue(todoListState)
  return (
    <div>
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  )
}

export default TodoList