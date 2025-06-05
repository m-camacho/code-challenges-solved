function AllocatorForm({ label, name }) {
  return (
    <label className="text-lg">
      {label}
      <input
        type="text"
        name={name}
        className="border border-gray-300 rounded-md p-1 ml-2"
      />
    </label>
  );
}

export default AllocatorForm;
