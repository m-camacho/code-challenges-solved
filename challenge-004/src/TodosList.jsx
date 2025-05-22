import "./App.css";

function TodosList({ todos = [], onCompleteItem, onDeleteItem }) {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <span onClick={() => onCompleteItem(todo.id)}>{todo.label}</span>
            <button onClick={() => onDeleteItem(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodosList;
