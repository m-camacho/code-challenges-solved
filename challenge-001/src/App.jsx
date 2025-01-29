import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Items Columns</h1>
      <div className="card p-7">
        <div className="container flex gap-2">
          <ItemsPanel></ItemsPanel>
          <ItemsPanel></ItemsPanel>
        </div>
      </div>
    </>
  );
}

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

export default App;
