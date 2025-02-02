import { useState } from "react";
import "./App.css";
import ItemsPanel from "./ItemsPanel";

const items = [
  { id: "001", label: "first", selected: false },
  { id: "002", label: "second", selected: false },
  { id: "003", label: "third", selected: false },
  { id: "004", label: "fourth", selected: false },
  { id: "005", label: "fifth", selected: false },
];

function App() {
  const [leftItems, setLeftItems] = useState(items);
  const [rightItems, setRightItems] = useState([]);

  const moveSelections = (sourceList, targetList) => {
    const itemsToStay = [];
    const itemsToMove = [];
    sourceList.forEach((currentItem) => {
      if (currentItem.selected) {
        itemsToMove.push(currentItem);
        currentItem.selected = false;
      } else {
        itemsToStay.push(currentItem);
      }
    });
    targetList.forEach((currentItem) => {
      currentItem.selected = false;
    });
    return [itemsToStay, [...targetList, ...itemsToMove]];
  };

  return (
    <>
      <h1>Items Columns Selector</h1>
      <div className="card py-7">
        <div className="container flex gap-2 w-full">
          <ItemsPanel
            items={leftItems}
            onSelect={(newItems) => {
              setLeftItems(newItems);
            }}
          />

          <div className="buttons-container flex flex-col gap-3 justify-center">
            <button
              onClick={() => {
                const [newLeftItems, newRightItems] = moveSelections(
                  leftItems,
                  rightItems
                );
                setLeftItems(newLeftItems);
                setRightItems(newRightItems);
              }}
            >
              &#x27A1;
            </button>
            <button
              onClick={() => {
                const [newRightItems, newLeftItems] = moveSelections(
                  rightItems,
                  leftItems
                );
                setLeftItems(newLeftItems);
                setRightItems(newRightItems);
              }}
            >
              &#x2B05;
            </button>
          </div>

          <ItemsPanel
            items={rightItems}
            onSelect={(newItems) => {
              setRightItems(newItems);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
