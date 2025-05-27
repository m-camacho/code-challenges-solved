import { useState } from "react";
import "./App.css";
import TodosList from "./TodosList";

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

  const onCompleteItem = (id) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const onDeleteItem = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
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
      <TodosList
        todos={todos}
        onCompleteItem={onCompleteItem}
        onDeleteItem={onDeleteItem}
      />
    </>
  );
}

export default App;
