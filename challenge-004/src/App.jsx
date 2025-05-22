import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Todo List</h1>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // You can handle the form submission here
        }}
        style={{ marginTop: "1rem" }}
      >
        <input
          type="text"
          placeholder="Add a todo"
          style={{ marginRight: "0.5rem" }}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default App;
