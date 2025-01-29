import "./App.css";

function ItemsPanel() {
  const items = ["first", "second", "third"];
  return (
    <div className="flex-1 bg-slate-600 h-40 w-14 rounded">
      {items.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
}

export default ItemsPanel;
