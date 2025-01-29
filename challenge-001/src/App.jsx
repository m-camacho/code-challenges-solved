import { useState } from "react";
import "./App.css";
import ItemsPanel from "./ItemsPanel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Items Columns</h1>
      <div className="card p-7">
        <div className="container flex gap-2 w-full">
          <ItemsPanel />

          <div className="buttons-container flex flex-col gap-3 justify-center">
            <button> &#x27A1; </button>
            <button> &#x2B05; </button>
          </div>

          <ItemsPanel />
        </div>
      </div>
    </>
  );
}

export default App;
