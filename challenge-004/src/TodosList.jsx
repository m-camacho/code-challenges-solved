import { useState } from "react";
import ConfirmationDialog from "./ConfirmationDialog";

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

      <ConfirmationDialog
        isOpen={isDialogOpen}
        onCancel={() => {
          setIsDialogOpen(false);
        }}
        onConfirm={() => {
          setIsDialogOpen(false);
          onDeleteItem(selectedId);
        }}
      />
    </>
  );
}

export default TodosList;
