import { useRecoilValue } from "recoil"
// import { todoListState } from "../recoil/atoms"
import { filteredTodoListState } from "../recoil/selectors"
import TodoItemCreator from "./TodoItemCreator"
import TodoItem from "./TodoItem"
import TodoListFilters from "./TodoListFilters"
import TodoListStats from "./TodoListStats"

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState)
  return (
    <div>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  )
}

export default TodoList