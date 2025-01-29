function ItemsPanel({ items, onSelect }) {
  return (
    <div className="flex-1 flex flex-col bg-slate-600 h-64 w-14 rounded p-3 gap-2">
      {items.map((currentItem) => (
        <div
          key={currentItem.id}
          className={
            "item rounded p-1 cursor-pointer " +
            (currentItem.selected ? "bg-slate-400" : "")
          }
          onClick={() => {
            const newItems = [...items];
            const pressedItem = newItems.find(
              (listItem) => listItem.id === currentItem.id
            );
            pressedItem.selected = !pressedItem.selected;
            onSelect(newItems);
          }}
        >
          {currentItem.label}
        </div>
      ))}
    </div>
  );
}

export default ItemsPanel;
