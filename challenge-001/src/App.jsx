import "./App.css";
import ItemsPanel from "./ItemsPanel";

function App() {
  const items = [
    { id: "001", label: "first", selected: false },
    { id: "002", label: "second", selected: false },
    { id: "003", label: "third", selected: false },
    { id: "004", label: "fourth", selected: false },
    { id: "005", label: "fifth", selected: false },
  ];

  return (
    <>
      <h1>Items Columns</h1>
      <div className="card py-7">
        <div className="container flex gap-2 w-full">
          <ItemsPanel items={items} />

          <div className="buttons-container flex flex-col gap-3 justify-center">
            <button> &#x27A1; </button>
            <button> &#x2B05; </button>
          </div>

          <ItemsPanel items={items} />
        </div>
      </div>
    </>
  );
}

export default App;
