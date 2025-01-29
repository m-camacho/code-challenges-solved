import "./App.css";

function ItemsPanel({ items }) {
  return (
    <div className="flex-1 flex flex-col bg-slate-600 h-64 w-14 rounded p-3 gap-2">
      {items.map((item) => (
        <div key={item.id} className="item bg-slate-400 rounded p-1">
          {item.label}
        </div>
      ))}
    </div>
  );
}

export default ItemsPanel;
