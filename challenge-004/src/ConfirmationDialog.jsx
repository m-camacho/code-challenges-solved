function ConfirmationDialog({ isOpen = false, onCancel, onConfirm }) {
  return (
    <dialog open={isOpen}>
      <p>Are you sure you want to delete this TO-DO item?</p>
      <button onClick={onCancel}>Cancel</button>
      <button onClick={onConfirm}>Yes, delete it</button>
    </dialog>
  );
}

export default ConfirmationDialog;
