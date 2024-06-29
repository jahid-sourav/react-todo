import TodoItem from "./TodoItem";

function TodoList({ todos, updateTodo, deleteTodo }) {
  return (
    <div className="flex justify-center mt-2">
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
