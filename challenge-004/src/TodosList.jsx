import { useState } from "react";
import "./App.css";

function TodosList({ todos = [], onCompleteItem, onDeleteItem }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleDeleteItem = (id) => {
    setSelectedId(id);
    setIsDialogOpen(true);
  };

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <span onClick={() => onCompleteItem(todo.id)}>{todo.label}</span>
            <button onClick={() => handleDeleteItem(todo.id)}>X</button>
          </li>
        ))}
      </ul>
      <dialog open={isDialogOpen}>
        <p>Are you sure you want to delete this TO-DO item?</p>
        <button
          onClick={() => {
            setIsDialogOpen(false);
          }}
        >
          Cancel
        </button>
        <button
          onClick={() => {
            setIsDialogOpen(false);
            onDeleteItem(selectedId);
          }}
        >
          Yes, delete it
        </button>
      </dialog>
    </>
  );
}

export default TodosList;
