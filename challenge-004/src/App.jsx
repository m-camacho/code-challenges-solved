import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    const { elements } = e.currentTarget;
    const input = elements.todo;
    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        label: input.value,
        completed: false,
      },
    ]);
    input.value = "";
  };

  return (
    <>
      <div>
        <h1>Todo List</h1>
      </div>
      <form onSubmit={onSubmit} style={{ marginTop: "1rem" }}>
        <input
          type="text"
          name="todo"
          placeholder="Add a todo"
          style={{ marginRight: "0.5rem" }}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={todo.completed ? "completed" : ""}
            onClick={() => {
              setTodos(
                todos.map((t) =>
                  t.id === todo.id ? { ...t, completed: !t.completed } : t
                )
              );
            }}
          >
            {todo.label}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
